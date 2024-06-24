import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
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
export const auth = getAuth();
export const db = getFirestore();
export const storage= getStorage();