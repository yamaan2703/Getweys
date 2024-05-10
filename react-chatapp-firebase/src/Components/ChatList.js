// import React, { useState, useEffect } from "react";
// import AddUser from "./AddUser";
// import { AppGet } from "../Config/FirebaseMethods";

// function ChatList() {
//   const [userData, setUserData] = useState([]); 
  
//   const handleDataFromChild = (user) => {
//     const updatedUserData = [...userData, { ...user }];
//     setUserData(updatedUserData);
//     console.log("User ===", user);
//     console.log("  updatedUserData ===", updatedUserData);
//   };
//    console.log("userData", userData);

//   return (
//     <>
//       <div className="chatlist">
//         <div className="container">
//           <div>
//             <AddUser getdatafx={handleDataFromChild} />
//           </div>

         
//           {userData && userData.length > 0 ? userData.map((x, i) => (
//             <div key={i} className="flex space-x-3 hover:border-b py-2">
//               <div>
//                 <img
//                   src={
//                     x.avatar ||
//                     "https://static.vecteezy.com/system/resources/previews/036/280/650/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
//                   }
//                   className="w-[50px] h-[50px] object-cover rounded-full"
//                   alt="User Avatar"
//                 />
//               </div>
//               <div>
//                 <p className="text-white text-lg font-mono">{x.userName || "Empty"}</p>
//                 <p className="text-gray-500 text-sm">{x.lastMessage || "Hello...."}</p>
//               </div>
//             </div>
//           )): <h1>Loading -------</h1>}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ChatList;

import React, { useState, useEffect } from "react";
import AddUser from "./AddUser";
import { AppGet } from "../Config/FirebaseMethods";

function ChatList() {
  const [userData, setUserData] = useState([]);

  // Function to load user data from localStorage when the component mounts
  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData) {
      setUserData(savedUserData);
    }
  }, []);

  const handleDataFromChild = (user) => {
    const updatedUserData = [...userData, { ...user }];
    setUserData(updatedUserData);
    // Save updated user data to localStorage
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  console.log("userData", userData);

  return (
    <>
      <div className="chatlist">
        <div className="container">
          <div>
            <AddUser getdatafx={handleDataFromChild} />
          </div>

          {userData && userData.length > 0 ? (
            userData.map((x, i) => (
              <div key={i} className="flex space-x-3 hover:border-b py-2">
                <div>
                  <img
                    src={
                      x.avatar ||
                      "https://static.vecteezy.com/system/resources/previews/036/280/650/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                    }
                    className="w-[50px] h-[50px] object-cover rounded-full"
                    alt="User Avatar"
                  />
                </div>
                <div>
                  <p className="text-white text-lg font-mono">{x.userName || "Empty"}</p>
                  <p className="text-gray-500 text-sm">{x.lastMessage || "Hello...."}</p>
                </div>
              </div>
            ))
          ) : (
            <h1>Loading -------</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default ChatList;

