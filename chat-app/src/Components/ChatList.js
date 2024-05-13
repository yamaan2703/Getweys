// import React, { useContext, useEffect, useState } from "react";
// import Search from "./Search";
// import { AuthContext } from "../Config/AuthContext";
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from "../Config/FirebaseConfig";
// import { ChatContext } from "../Config/ChatContext";

// function ChatList() {
//   const [chats, setChats] = useState([]);
//   const { currentUser } = useContext(AuthContext);
//   const { dispatch } = useContext(ChatContext);

//   useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(
//         doc(db, "usersChats", currentUser.uid),
//         (doc) => {
//           setChats(doc.data());
//         }
//       );
//       return () => {
//         unsub();
//       };
//     };
//     currentUser.uid && getChats();
//   }, [currentUser.uid]);
// console.log(Object.entries(chats));

// const handleSelect = (u) => {
//   dispatch({type: "CHANGE_USER", payload: u})
// }
//   return (
//     <>
//       <div className="my-1">
//         {Object.entries(chats)?.map((chat) => (
//           <div className="flex space-x-3 items-center hover:bg-[rgba(0,0,0,0.9)] focus:hover:bg-[rgba(0,0,0,0.9)] p-2" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
//           <div>
//             <img
//               src={chat[1].userInfo.photoURL}
//               className="w-[50px] h-[50px] object-cover rounded-full"
//               alt="User Avatar"
//               />
//           </div>
//           <div>
//             <p className="text-white text-lg font-mono">{chat[1].userInfo.displayName}</p>
//             <p className="text-white text-xs font-mono">{chat[1].userInfo.lastmessage}</p>
//           </div>
//         </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default ChatList;


import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import { AuthContext } from "../Config/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";
import { ChatContext } from "../Config/ChatContext";

function ChatList() {
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null); // State to track selected chat item
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "usersChats", currentUser.uid),
        (doc) => {
          setChats(doc.data());
        }
      );
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (chatId) => {
    setSelectedChatId(chatId);
    dispatch({ type: "CHANGE_USER", payload: chats[chatId].userInfo });
  };

  return (
    <>
      <div className="my-1">
        {Object.entries(chats)?.map((chat) => (
          <div
            className={`flex space-x-3 items-center p-2 cursor-pointer hover:bg-[rgba(0,0,0,0.9)] ${
              selectedChatId === chat[0] ? "bg-[rgba(0,0,0,0.9)]" : ""
            }`}
            key={chat[0]}
            onClick={() => handleSelect(chat[0])}
          >
            <div>
              <img
                src={chat[1].userInfo.photoURL}
                className="w-12 h-12 rounded-full"
                alt="User Avatar"
              />
            </div>
            <div>
              <p className="text-white text-lg font-mono">
                {chat[1].userInfo.displayName}
              </p>
              <p className="text-white text-xs font-mono">
                {chat[1].userInfo.lastmessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChatList;
