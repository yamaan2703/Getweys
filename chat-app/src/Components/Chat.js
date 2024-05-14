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
import { ReactMic } from "react-mic";
import { AiFillAudio } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";

function Chat() {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [documentFile, setDocumentFile] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false);
  const [firstUserLoggedIn, setFirstUserLoggedIn] = useState(false);
  const [record, setRecord] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);

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
    console.log(data);
    try {
      if (
        text.trim() === "" &&
        !img &&
        !video &&
        !documentFile &&
        !recordedBlob
      )
        return;

      switch (true) {
        case !!recordedBlob:
          const audioStorageRef = ref(storage, uuid());
          const audioUploadTask = uploadBytesResumable(
            audioStorageRef,
            recordedBlob.blob
          );
          audioUploadTask.on(
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
              const audioDownloadURL = await getDownloadURL(
                audioUploadTask.snapshot.ref
              );
              console.log(audioDownloadURL);
              console.log(data);
              let UpdateReq = await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  audio: audioDownloadURL,
                }),
              })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
              console.log(UpdateReq);
              setRecord(false);
              setRecordedBlob(null);
            }
          );
          break;

        case !!img:
          const imgStorageRef = ref(storage, uuid());
          const imgUploadTask = uploadBytesResumable(imgStorageRef, img);
          imgUploadTask.on(
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
              const imgDownloadURL = await getDownloadURL(
                imgUploadTask.snapshot.ref
              );
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: imgDownloadURL,
                }),
              });
              setText("");
              setImg(null);
            }
          );
          break;
        case !!video:
          const videoStorageRef = ref(storage, uuid());
          const videoUploadTask = uploadBytesResumable(videoStorageRef, video);
          videoUploadTask.on(
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
              const videoDownloadURL = await getDownloadURL(
                videoUploadTask.snapshot.ref
              );
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  video: videoDownloadURL,
                }),
              });
              setText("");
              setVideo(null);
            }
          );
          break;
        case !!documentFile:
          const docStorageRef = ref(storage, uuid());
          const docUploadTask = uploadBytesResumable(
            docStorageRef,
            documentFile
          );
          docUploadTask.on(
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
              const docDownloadURL = await getDownloadURL(
                docUploadTask.snapshot.ref
              );
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  document: docDownloadURL,
                }),
              });
              setText("");
              setDocumentFile(null);
            }
          );
          break;
        default:
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
            }),
          });
          setText("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    setRecordedBlob(recordedBlob);
  };

  return (
    <div className="chat_box relative w-[1030px]">

      <div className="flex items-center space-x-4 py-2 px-5 bg-[rgba(0,0,0,0.5)]">
        <div>
          <img
            src={data.user?.photoURL || null}
            className="w-[50px] h-[50px] object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl font-mono">
            {firstUserLoggedIn ? data.user?.displayName : ""}
          </h1>
        </div>
      </div>

      <div className="message_body p-5 overflow-y-auto h-[460px]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex space-x-2 items-center my-2 ${
              message.senderId === currentUser.uid
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div className="p-2 bg-[rgba(0,0,0,0.6)] rounded text-white">
              {message.text && <p className="w-auto">{message.text}</p>}

              {message.img && (
                <img
                  src={message.img}
                  className="rounded w-[200px] h-[200px] object-cover"
                  alt="Sent image"
                />
              )}
              {message.video && (
                <video
                  src={message.video}
                  controls
                  className="rounded w-[200px] h-[200px] object-cover"
                />
              )}
              {message.audio && (
                <audio
                  src={message.audio}
                  controls
                  // className="rounded w-[200px] h-[200px] object-cover"
                />
              )}
                {message.document && (
                  <a
                    href={message.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold border-b"
                  >
                    Download Document.....
                  </a>
                )}
                <span className="text-gray-500 py-1 text-xs">
                  {message.date.toDate().toLocaleString()}
                </span>
              
            </div>
          </div>
        ))}
      </div>

      <div className="user_chats w-[1030px] border-t">
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <div className="icons flex justify-between items-center text-2xl">
              <div className="">
                <div>
                  <ReactMic
                    record={record}
                    className="sound-wave w-[100px]"
                    onStop={onStop}
                    onData={onData}
                  />
                  <button
                    onClick={startRecording}
                    type="button"
                    className="text-white font-bold text-2xl hover:text-gray-500 p-2"
                  >
                    <AiFillAudio />
                  </button>
                  <button
                    onClick={stopRecording}
                    type="button"
                    className="text-white font-bold text-2xl hover:text-gray-500 p-2"
                  >
                    <FaRegStopCircle />
                  </button>
                </div>
              </div>

              <div className="text-white font-bold text-2xl hover:text-gray-500 pt-4">
                <label htmlFor="file-input" onClick={handleIconClick}>
                  <MdOutlineInsertPhoto />
                </label>
                {showFileInput && (
                  <input
                    type="file"
                    id="file-input"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      // console.log(e.target.files)
                      // return
                      if (e.target.files[0].type.startsWith("video/")) {
                        setVideo(e.target.files[0]);
                      } else if (e.target.files[0].type.startsWith("image/")) {
                        setImg(e.target.files[0]);
                      } else {
                        setDocumentFile(e.target.files[0]);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center px-2 space-x-3">
            <div className="w-[800px]">
              <AppInp
                label="Type a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="w-[75px]">
              <AppBtn label="Send" onClick={handleSend} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Chat;
