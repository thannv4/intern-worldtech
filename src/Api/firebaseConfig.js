// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXO3ieZoqY40E2_e7vOB8mDs4BsEprZkw",
  authDomain: "burgerbuilder-30976.firebaseapp.com",
  databaseURL: "https://burgerbuilder-30976-default-rtdb.firebaseio.com",
  projectId: "burgerbuilder-30976",
  storageBucket: "burgerbuilder-30976.appspot.com",
  messagingSenderId: "1030992162114",
  appId: "1:1030992162114:web:c7abee56ca5194b3836cdb",
  measurementId: "G-85VRNPN69H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);