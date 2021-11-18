import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwAn5ctvR9lBWwFXnqOD2dnPWMgKJelCc",
  authDomain: "shoes-store-9d67d.firebaseapp.com",
  projectId: "shoes-store-9d67d",
  storageBucket: "shoes-store-9d67d.appspot.com",
  messagingSenderId: "997660156964",
  appId: "1:997660156964:web:1757908b11d7e2d33de4b1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
