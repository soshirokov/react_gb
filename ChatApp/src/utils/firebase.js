// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPBh2R8aftI95fLYvZqCymqKzqjfbxPuI",
  authDomain: "react-gb-38f97.firebaseapp.com",
  databaseURL: "https://react-gb-38f97-default-rtdb.firebaseio.com/",
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

const database = getDatabase(app);

/* Работа с чатами */
export const chatRef = (chatId) => {
  return ref(database, `chats/${chatId}`);
}
export const chatsRef = ref(database, 'chats');

/* Работа с сообщениями */
export const messageRef = (chatId, messageId) => {
  return ref(database, `chats/${chatId}/messages/${messageId}`);
}
export const messagesRef = (chatId) => {
  return ref(database, `chats/${chatId}/messages/`);
}

/* Работа с пользователем */
export const profileRef = (userUid) => {
  return ref(database, `profile/${userUid}`);
}
export const profilesRef = ref(database, `profile`);


