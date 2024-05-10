import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
  
  const storage = getStorage();
  
  const uploadFile = async (file) => {
    const date = new Date();
    const storageRef = ref(storage, `images/${date.getTime()}_${file.name}`);
  
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject("Something went wrong: " + error.code);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              reject("Error getting download URL: " + error);
            });
        }
      );
    });
  };
  
  export default uploadFile;
  