
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoG-4Udt5moKjOtu9kM2DMh12zQdO4I08",
  authDomain: "wallet-btis.firebaseapp.com",
  projectId: "wallet-btis",
  storageBucket: "wallet-btis.appspot.com",
  messagingSenderId: "796625810399",
  appId: "1:796625810399:web:c3882acaa7869a67464a6a",
  measurementId: "G-2PZ5XFWN58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const googleProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);
console.log(analytics);
// import firebase from 'firebase/compat/app';
// import 'firebase/auth';
// import 'firebase/database';

// // const firebaseConfig = {
// //     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //     databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
// //     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// // };

// const firebaseConfig = {
//     apiKey: "AIzaSyDoG-4Udt5moKjOtu9kM2DMh12zQdO4I08",
//     authDomain: "wallet-btis.firebaseapp.com",
//     projectId: "wallet-btis",
//     storageBucket: "wallet-btis.appspot.com",
//     messagingSenderId: "796625810399",
//     appId: "1:796625810399:web:c3882acaa7869a67464a6a",
//     measurementId: "G-2PZ5XFWN58"
//   };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// console.log(firebaseApp)
// export const firebaseAuth=firebaseApp.auth();

// export const googleProvider = new firebase.auth.GoogleAuthProvider();