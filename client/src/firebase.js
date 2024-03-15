// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-5a65c.firebaseapp.com",
    projectId: "real-estate-5a65c",
    storageBucket: "real-estate-5a65c.appspot.com",
    messagingSenderId: "898506183418",
    appId: "1:898506183418:web:1b2dc1727a6fe6f1712f43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);