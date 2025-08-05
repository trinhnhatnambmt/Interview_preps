// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyArkTRNyIf62kR4xzJnEXIxfJP5t_Kp6q8",
    authDomain: "prepwise-e7300.firebaseapp.com",
    projectId: "prepwise-e7300",
    storageBucket: "prepwise-e7300.firebasestorage.app",
    messagingSenderId: "980087200839",
    appId: "1:980087200839:web:b8e9b322c97da74895e562",
    measurementId: "G-JXKE33EJD6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
