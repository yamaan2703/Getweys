// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// For Firebase Storage, you already added the required SDK above

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG6YDeofpG4F0GBQXj3-rjtWf62bxh4uc",
  authDomain: "chat-app-93245.firebaseapp.com",
  databaseURL: "https://chat-app-93245-default-rtdb.firebaseio.com",
  projectId: "chat-app-93245",
  storageBucket: "chat-app-93245.appspot.com",
  messagingSenderId: "975843501822",
  appId: "1:975843501822:web:0826ea1236015f719927af",
  measurementId: "G-S8VXC3HT1L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();
export const auth = getAuth()
