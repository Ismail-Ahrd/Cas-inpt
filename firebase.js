// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore}from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAz0F5bOeYZBDECu9HQA3MYR695jRa3jKQ",
  authDomain: "cas-inpt.firebaseapp.com",
  projectId: "cas-inpt",
  storageBucket: "cas-inpt.appspot.com",
  messagingSenderId: "468748221471",
  appId: "1:468748221471:web:0efe59de86d33b28ebe92a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth ;
export const googleprovider=new GoogleAuthProvider()
export const  db=getFirestore(app)