// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPBh2R8aftI95fLYvZqCymqKzqjfbxPuI",
  authDomain: "react-gb-38f97.firebaseapp.com",
  projectId: "react-gb-38f97",
  storageBucket: "react-gb-38f97.appspot.com",
  messagingSenderId: "338009474635",
  appId: "1:338009474635:web:49e25fe908e7d4d52eafce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);
export const signIn = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);