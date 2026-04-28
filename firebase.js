// firebase.js — Shared Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBFq2gJav9bCRLWefWfPExmjki08KNyLUQ",
    authDomain: "eduvibes-62426.firebaseapp.com",
    projectId: "eduvibes-62426",
    storageBucket: "eduvibes-62426.firebasestorage.app",
    messagingSenderId: "587654080019",
    appId: "1:587654080019:web:2e1500022541c6fbf241e6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export {
    auth, db, googleProvider,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged,
    GoogleAuthProvider, signInWithPopup,
    doc, setDoc, getDoc, updateDoc,
    addDoc, collection
};
