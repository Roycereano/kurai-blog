// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, 
  signInWithPopup, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, sendPasswordResetEmail, 
  signOut,} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTrYm2pnPUSxmIWjtmR5L_kNkOc4ddutc",
  authDomain: "roisu-online-67102.firebaseapp.com",
  projectId: "roisu-online-67102",
  storageBucket: "roisu-online-67102.appspot.com",
  messagingSenderId: "447534351877",
  appId: "1:447534351877:web:6034a583cf12816283fe6c",
  measurementId: "G-8ZDN4MZ328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

