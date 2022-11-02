// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA556pCr3uZz5VeUbxNsKYQnZ3P6pkCa1Y",
    authDomain: "twitter-clone-be771.firebaseapp.com",
    projectId: "twitter-clone-be771",
    storageBucket: "twitter-clone-be771.appspot.com",
    messagingSenderId: "336243984175",
    appId: "1:336243984175:web:cc365b1f6fd43fb9b3c3da",
    measurementId: "G-W63LGYEW19"
  };

  const firebaseApp = firebase.intializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;