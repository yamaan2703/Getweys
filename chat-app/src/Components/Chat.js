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
// ue handler bnaya hai iske ande rimage, video audio or documents sb handle hai ... 
  const handleSend = async () => { 
    console.log(data)
    try {
      if (text.trim() === "" && !img && !video && !documentFile && !recordedBlob)
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
              console.log(audioDownloadURL)
              console.log(data)
              let UpdateReq =  await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  audio: audioDownloadURL,
                }),
              }).then((res)=>console.log(res)).catch((err)=>console
            .log(err))
              console.log(UpdateReq)
              setRecord(false); 
              setRecordedBlob(null); 

                  // console.log("set record -----", setRecord);
              // console.log("set record bolb -----", setRecordedBlob);
            }
          );
          break;
// ye code logic sahi hai data base me ja bhi rahi hai or aa bhi rahi hai bs show documents me ho rahi hai pheke image format me hi show ho rahi thi jb se document ka likha usme kuch out ho gya tb se ye garbar chl rahi hai .. mujhe pata hai bahi lekin mujhe code smjne to do ....ok ok 
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
    // console.log("seRecord -=-=-=-=-=-=-=-=", setRecord);
  };
  // console.log("Stop Recording ==========", stopRecording);

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

//  console.log("onData )-0-0-0-0-00-0-0-_" ,onData);

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    setRecordedBlob(recordedBlob); 
  };

  // console.log(messages)
  return (
    <div className="chat_box p-5 relative w-[1000px]">
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

      <div className="message_body p-2 overflow-y-auto h-[470px] relative">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex space-x-2 items-center my-2 ${
              message.senderId === currentUser.uid
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div className="p-1 bg-[rgba(0,0,0,0.6)] rounded text-white">
              {message.text && <p className="w-auto">{message.text}</p>}
              {/* is code pe aa hi nh raha iamge ka hai direct document pe ja raha hai  */}
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
              {/* idher ... */}
              <div className="flex flex-col">
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
                <span className="text-gray-400 text-xs">
                  {message.date.toDate().toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="user_chats absolute bottom-0 w-[1000px]">
        <div className="flex justify-center items-center p-1 pt-2 space-x-4 border-t">
          <div className="icons flex justify-between items-center space-x-4">
            <div className="text-white font-bold text-xl">
              {/* <IoIosCall /> */}
              <div>
                <ReactMic
                  record={record}
                  className="sound-wave w-[100px]"
                  onStop={onStop}
                  onData={onData}
                />
                <button onClick={startRecording} type="button" className="text-2xl px-2">
                  <AiFillAudio />
                </button>
                <button onClick={stopRecording} type="button" className="text-2xl px-2">
                  <FaRegStopCircle />
                </button>
              </div>
            </div>
            <div className="text-white font-bold text-xl">
              {/* <FaVideo /> */}
            </div>
            <div className="text-white font-bold text-2xl hover:text-gray-500">
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
                    } else if(e.target.files[0].type.startsWith("image/")){
                      setImg(e.target.files[0]);
                    }else{
                      setDocumentFile(e.target.files[0]);
                    }
                  }}
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