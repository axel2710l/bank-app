// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

initializeApp({
  apiKey: "AIzaSyD3bDYyberY7lKWrv5hoouOuUqfoTDp5Mc",
  authDomain: "basessad.firebaseapp.com",
  projectId: "basessad",
  storageBucket: "basessad.appspot.com",
  messagingSenderId: "339932290286",
  appId: "1:339932290286:web:afc0bbff87fc693e36a7ff",
});

// Initialize Firebase
const db = getFirestore();
export default db;
