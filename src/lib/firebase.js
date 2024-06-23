// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import  getAuth from "firebase/auth";
import  getFirestore from "firebase/db";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-d8764.firebaseapp.com",
  projectId: "react-chat-d8764",
  storageBucket: "react-chat-d8764.appspot.com",
  messagingSenderId: "183273931053",
  appId: "1:183273931053:web:296cfa6dcb066dc73893a4",
  measurementId: "G-KN0ZBWYY5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
 export const auth= getAuth();
 export const db= getFirestore();
