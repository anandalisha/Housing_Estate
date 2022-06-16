// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAuFAHADw72uHwP2h9QqpvPqqyE7PwUcoU",
  authDomain: "house-market-7f9d8.firebaseapp.com",
  projectId: "house-market-7f9d8",
  storageBucket: "house-market-7f9d8.appspot.com",
  messagingSenderId: "173586398489",
  appId: "1:173586398489:web:1399569477a53921fb1988",
  measurementId: "G-FLL065V3WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();