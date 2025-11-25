// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRHXV3VPfpBk_NLorcawqb_N9hj5ks5sA",
  authDomain: "erikshaver-8642f.firebaseapp.com",
  projectId: "erikshaver-8642f",
  storageBucket: "erikshaver-8642f.firebasestorage.app",
  messagingSenderId: "825717136260",
  appId: "1:825717136260:web:6ce7c8758f63f6db97dbd1",
  measurementId: "G-60F967QGGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);