// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAohWc5oDuXGR4Lfa9hP_r_f3NIloLV1ZU",
  authDomain: "react-chat-app-eba82.firebaseapp.com",
  databaseURL: "https://react-chat-app-eba82-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-eba82",
  storageBucket: "react-chat-app-eba82.appspot.com",
  messagingSenderId: "217347611869",
  appId: "1:217347611869:web:851df3739fd35a772c4f34",
  measurementId: "G-N9X5PJM4MG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();
export const auth = getAuth()