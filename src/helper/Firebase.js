import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAINYnF6jMA7_WFV5-_fE0QIFHY-m66cOg",
  authDomain: "alumni4-977cb.firebaseapp.com",
  projectId: "alumni4-977cb",
  storageBucket: "alumni4-977cb.appspot.com",
  messagingSenderId: "694650517891",
  appId: "1:694650517891:web:28f20192c900f584765eb6",
  measurementId: "G-P4GNKZN4MZ"
  };

// Initialize Firebase
// firebase.initializeApp(config);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

