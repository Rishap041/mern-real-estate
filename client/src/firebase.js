// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-f4f36.firebaseapp.com",
  projectId: "mern-real-estate-f4f36",
  storageBucket: "mern-real-estate-f4f36.appspot.com",
  messagingSenderId: "927914329337",
  appId: "1:927914329337:web:76487a288fbc9e93794e28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);