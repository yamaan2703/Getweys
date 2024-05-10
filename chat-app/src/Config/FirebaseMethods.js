// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// let AppSignUp = (model, imageFile) => {
//   return new Promise((resolve, reject) => {
//     const auth = getAuth();
//     const db = getFirestore();
//     const storage = getStorage();

//     if (!model.email || !model.password) {
//       reject("Email and Password are required");
//     } else {
//       createUserWithEmailAndPassword(auth, model.email, model.password)
//         .then((res) => {
//           const userId = res.user.uid;
//           const userRef = doc(db, "users", userId);

//           uploadBytes(ref(storage, `avatars/${userId}`), imageFile)
//             .then(() => {
//               getDownloadURL(ref(storage, `avatars/${userId}`))
//                 .then((imgURL) => {
//                   model.id = userId;
//                   model.avatar = imgURL;

//                   setDoc(userRef, model)
//                     .then(() => {
//                       resolve("User Created Successfully");
//                     })
//                     .catch((error) => {
//                       reject(error);
//                     });
//                 })
//                 .catch((error) => {
//                   reject("Error getting image URL: " + error);
//                 });
//             })
//             .catch((error) => {
//               reject("Error uploading image: " + error);
//             });
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     }
//   });
// };

// export default AppSignUp;
