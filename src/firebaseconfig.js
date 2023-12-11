// firebaseConfig.js or wherever you configure Firebase
import { initializeApp } from "firebase/app";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY4w34oylZRZNc3ejTcqu5tHCgBW1eJhk",
  authDomain: "rabs-technical.firebaseapp.com",
  projectId: "rabs-technical",
  storageBucket: "rabs-technical.appspot.com",
  messagingSenderId: "84823605568",
  appId: "1:84823605568:web:552973ebf2777d643cbaa5",
  measurementId: "G-XVF6X0DYGR",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
