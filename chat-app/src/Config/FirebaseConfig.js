// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Op3yrG3D-XOpYXmJkAjH2RnM1Ka8uNs",
  authDomain: "chat-2ca36.firebaseapp.com",
  projectId: "chat-2ca36",
  storageBucket: "chat-2ca36.appspot.com",
  messagingSenderId: "920790862847",
  appId: "1:920790862847:web:bb3ef28ec322ca65bc75ca",
  measurementId: "G-S3MK8HXNWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);

