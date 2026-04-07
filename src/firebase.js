// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Database-ku
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIhoK-xJJaoAdj6yu39zXKRxeD7KNvRNw",
  authDomain: "my---portfolio-b3fb6.firebaseapp.com",
  projectId: "my---portfolio-b3fb6",
  storageBucket: "my---portfolio-b3fb6.firebasestorage.app",
  messagingSenderId: "218591088474",
  appId: "1:218591088474:web:b860d7d0da68804ef06d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);