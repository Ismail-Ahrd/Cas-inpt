import React,{ useContext, useEffect, useState } from "react";
import { onAuthStateChanged} from "firebase/auth";
import auth from "../../firebase";



const AuthContext=React.createContext();

export const useAuth=()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState('');
    const [loading,setLoading]=useState(true)
    
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