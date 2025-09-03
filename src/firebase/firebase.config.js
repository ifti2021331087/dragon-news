// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmtDewqOeJDAgUcSKL4kjYNHwL6-UpmRU",
  authDomain: "dragon-news-d9e86.firebaseapp.com",
  projectId: "dragon-news-d9e86",
  storageBucket: "dragon-news-d9e86.firebasestorage.app",
  messagingSenderId: "979152704357",
  appId: "1:979152704357:web:c1a2c8b7db6021ee69c78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;