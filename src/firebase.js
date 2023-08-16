import firebase from 'firebase/compat/app'
import "firebase/compat/database";
import 'firebase/compat/auth'
// import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0WItuqyABH6kQ_H6K5Kxo0GOUiFC8JzQ",
    authDomain: "clone-f66e4.firebaseapp.com",
    projectId: "clone-f66e4",
    storageBucket: "clone-f66e4.appspot.com",
    messagingSenderId: "958771954691",
    appId: "1:958771954691:web:a4f05e9953c994be66ba36",
    measurementId: "G-78Q6XTTERF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.database();
const auth =firebase.auth();

  export {db,auth};