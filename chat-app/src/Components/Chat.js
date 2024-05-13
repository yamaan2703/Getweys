import React, { useContext, useEffect, useState } from "react";
import AppBtn from "./AppBtn";
import { FaVideo } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import AppInp from "./AppInp";
import { ChatContext } from "../Config/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../Config/FirebaseConfig";
import { AuthContext } from "../Config/AuthContext";
import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Chat() {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false);
  const [firstUserLoggedIn, setFirstUserLoggedIn] = useState(false);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);

  useEffect(() => {
    if (!firstUserLoggedIn && data.user) {
      setFirstUserLoggedIn(true);
    }
  }, [data.user, firstUserLoggedIn]);

  const handleIconClick = () => {
    setShowFileInput(true);
  };

  const handleSend = async () => {
    try {
      if (text.trim() === "" && !img) return; // Don't send empty messages

      if (img) {
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            console.error(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
            // Clear input fields after sending message
            setText("");
            setImg(null);
          }
        );
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
        // Clear input fields after sending message
        setText("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // ChatBox
    <div className="chat_box p-5 relative w-[900px]">
      {/* User Info */}
      <div className="flex justify-between ">
        <div className="chat_info flex justify-between items-center space-x-4">
          <div>
            <img
              src={data.user?.photoURL || null}
              className="w-[50px] h-[50px] object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg font-mono">
              {firstUserLoggedIn ? data.user?.displayName : ""}
            </h1>
          </div>
        </div>
      </div>
      <hr className="my-2" />

      {/* User Chats */}
      <div className="message_body p-2 overflow-y-auto h-[420px] relative">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex space-x-2 items-center my-2 ${
              message.senderId === currentUser.uid ? "justify-end" : "justify-start"
            }`}
          >
            <div className="p-1 bg-[rgba(0,0,0,0.6)] rounded text-white">
              {message.text && <p>{message.text}</p>}
              {message.img && (
                <img
                  src={message.img}
                  className="rounded w-[200px] h-[200px] object-cover"
                  alt="Sent image"
                />
              )}
              <span className="text-gray-400 text-xs">
                {message.date.toDate().toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Box */}
      <div className="user_chats absolute bottom-0 w-[850px]">
        <div className="flex justify-center items-center p-1 pt-2 space-x-4 border-t">
          <div className="icons flex justify-between items-center space-x-4">
            <div className="text-white font-bold text-xl">
              <IoIosCall />
            </div>
            <div className="text-white font-bold text-xl">
              <FaVideo />
            </div>
            <div className="text-white font-bold text-xl">
              <label htmlFor="file-input" onClick={handleIconClick}>
                <MdOutlineInsertPhoto />
              </label>
              {showFileInput && (
                <input
                  type="file"
                  id="file-input"
                  style={{ display: "none" }}
                  onChange={(e) => setImg(e.target.files[0])}
                />
              )}
            </div>
          </div>
          <div className="w-full">
            <AppInp
              label="Type a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <AppBtn label="Send" onClick={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

