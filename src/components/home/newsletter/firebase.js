import firebase from "firebase/app";
import "firebase/firestore";



// const firebaseConfig = {
  try {
    firebase.initializeApp({
      apiKey: "AIzaSyBECF4zNEyAXp2B2zsgiETV7UvnEkwH_-Y",
      authDomain: "alumni-portal-nitp.firebaseapp.com",
      databaseURL: "https://alumni-portal-nitp-default-rtdb.firebaseio.com",
      projectId: "alumni-portal-nitp",
      storageBucket: "alumni-portal-nitp.appspot.com",
      messagingSenderId: "538390607133",
      appId: "1:538390607133:web:2ca5c958ad24b081645df4",
      measurementId: "G-0P5Y4B74ZY"
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
