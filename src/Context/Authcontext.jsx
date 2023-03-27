import React,{ useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import auth from "../../firebase";
import { db } from "../../firebase";
import { getDocs,collection,addDoc } from "firebase/firestore";


const AuthContext=React.createContext();

export const useAuth=()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState('');
    const [loading,setLoading]=useState(true)

    // const getUserFirestore=async({userId})=>{
    //     try{
    //       const data=await getDocs(collection(db,'users'))
    //     }catch(error){
    //       console.log(error);
    //     }
        
    // }
    // const addUserFirestore=async({user,username})=>{
    //   try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //       userId: user.uid,
    //       username:username|| user.displayName,
    //       photoURL: user.photoURL,
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // }
    
    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
          setCurrentUser(user)
          setLoading(false)
      });
      return unsubscribe
    },[])
    const value={
      currentUser
    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;