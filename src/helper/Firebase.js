import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBECF4zNEyAXp2B2zsgiETV7UvnEkwH_-Y",
    authDomain: "alumni-portal-nitp.firebaseapp.com",
    projectId: "alumni-portal-nitp",
    storageBucket: "alumni-portal-nitp.appspot.com",
    messagingSenderId: "538390607133",
    appId: "1:538390607133:web:2ca5c958ad24b081645df4",
    measurementId: "G-0P5Y4B74ZY"
  };

// Initialize Firebase
// firebase.initializeApp(config);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

