// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore}from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth ;
export const googleprovider=new GoogleAuthProvider()
export const  db=getFirestore(app)
export const storage=getStorage(app)