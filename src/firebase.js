// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDlDiCKm1iskgJdQaiFzf40jIMRDf-OZac",
  authDomain: "fir-97ff9.firebaseapp.com",
  projectId: "fir-97ff9",
  storageBucket: "fir-97ff9.appspot.com",
  messagingSenderId: "594430792789",
  appId: "1:594430792789:web:0c786ad68f73923386f0dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);