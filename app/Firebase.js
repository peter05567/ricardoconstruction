// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3TLJILAU8eS4LMDdmryyxQsBAZUzNqec",
  authDomain: "algoquest-f3344.firebaseapp.com",
  projectId: "algoquest-f3344",
  storageBucket: "algoquest-f3344.firebasestorage.app",
  messagingSenderId: "335348641784",
  appId: "1:335348641784:web:89fab06f345e336b25300d",
  measurementId: "G-DTVDW6PB50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
