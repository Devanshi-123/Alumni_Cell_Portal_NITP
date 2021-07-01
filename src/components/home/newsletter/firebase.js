import firebase from "firebase/app";
import "firebase/firestore";



// const firebaseConfig = {
  try {
    firebase.initializeApp({
      apiKey: "AIzaSyAINYnF6jMA7_WFV5-_fE0QIFHY-m66cOg",
      authDomain: "alumni4-977cb.firebaseapp.com",
      projectId: "alumni4-977cb",
      storageBucket: "alumni4-977cb.appspot.com",
      messagingSenderId: "694650517891",
      appId: "1:694650517891:web:28f20192c900f584765eb6",
      measurementId: "G-P4GNKZN4MZ"
    })
  } catch(err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error raised', err.stack)
    }
  }
// };

const firebaseApp = firebase;

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
