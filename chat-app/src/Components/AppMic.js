import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

function AppMic() {
  const [record, setRecord] = useState(false);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
  };

  return (
    <>
      <div>
        <div>
          <ReactMic
            record={record}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
            strokeColor="#000000"
            backgroundColor="#FF4081"
          />
          <button onClick={startRecording} type="button">
            Start
          </button>
          <button onClick={stopRecording} type="button">
            Stop
          </button>
        </div>
      </div>
    </>
  );
}

export default AppMic;



// const handleSend = async () => {
//     try {
//       if (text.trim() === "" && !img && !video && !documentFile && !record) return;
  
//       switch (true) {
//         // Handling audio recording
//         case record:
//           const audioStorageRef = ref(storage, uuid());
//           const audioUploadTask = uploadBytesResumable(audioStorageRef, recordedBlob.blob);
//           audioUploadTask.on(
//             "state_changed",
//             (snapshot) => {
//               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//               console.log("Upload is " + progress + "% done");
//             },
//             (error) => {
//               console.error(error);
//             },
//             async () => {
//               const audioDownloadURL = await getDownloadURL(audioUploadTask.snapshot.ref);
//               await updateDoc(doc(db, "chats", data.chatId), {
//                 messages: arrayUnion({
//                   id: uuid(),
//                   senderId: currentUser.uid,
//                   date: Timestamp.now(),
//                   audio: audioDownloadURL,
//                 }),
//               });
//               setRecord(false); // Reset recording state
//             }
//           );
//           break;
//         case !!img:
//           // Handling image upload
//           // ... (your existing code)
//           break;
//         case !!video:
//           // Handling video upload
//           // ... (your existing code)
//           break;
//         case !!documentFile:
//           // Handling document upload
//           // ... (your existing code)
//           break;
//         default:
//           // Handling text message
//           // ... (your existing code)
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  