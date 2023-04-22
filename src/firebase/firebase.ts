// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW8pT5-Aul2G_Tt4tJkUME71HMFQqcAaI",
  authDomain: "open-market-hub.firebaseapp.com",
  projectId: "open-market-hub",
  storageBucket: "open-market-hub.appspot.com",
  messagingSenderId: "878873029400",
  appId: "1:878873029400:web:6b8c5a8edb0e3e5d928c6d",
  measurementId: "G-EZC5P8V32L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
