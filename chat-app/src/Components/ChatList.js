import React from "react";

function ChatList() {
  return (
    // Chat List
    <>
      <div className="chatlist">
        <div className="container">
          <div className="flex space-x-3 hover:border-b py-2">
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/036/280/650/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-white text-lg font-mono">William Micheal</p>
              <p className="text-gray-500 text-sm">hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatList;
