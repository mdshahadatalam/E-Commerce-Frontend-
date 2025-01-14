// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIQJX3lCEXpdunk9veKdlO1C3L6Rj9X74",
  authDomain: "aytor-c6ab9.firebaseapp.com",
  projectId: "aytor-c6ab9",
  storageBucket: "aytor-c6ab9.firebasestorage.app",
  messagingSenderId: "process.env.REACT_APP_USERID",
  appId: "process.env.REACT_APP_APPLIED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig