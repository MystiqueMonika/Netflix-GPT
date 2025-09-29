// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBitH-B3nMc-fS-KGG0eey9Qh7zk6-xjkQ",
  authDomain: "netflix-gpt-2a7c8.firebaseapp.com",
  projectId: "netflix-gpt-2a7c8",
  storageBucket: "netflix-gpt-2a7c8.firebasestorage.app",
  messagingSenderId: "1080926289937",
  appId: "1:1080926289937:web:469454c6c78c2750af31b0",
  measurementId: "G-SL6RGNF1QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();