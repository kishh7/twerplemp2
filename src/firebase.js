
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCn4uhwbXTHNgIcT3hy3srSm6y98m7_MZM",
  authDomain: "lopezmp2.firebaseapp.com",
  projectId: "lopezmp2",
  storageBucket: "lopezmp2.appspot.com",
  messagingSenderId: "719081843425",
  appId: "1:719081843425:web:e45342925f92b2caa6a5a0",
  measurementId: "G-7KRNVVSTNL"
};


const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
