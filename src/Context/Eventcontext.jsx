import { getDocs } from 'firebase/firestore';
import React,{useState} from 'react'
import { useContext } from 'react'
import { db } from '../../firebase';

const Eventcontext=React.createContext()

export const useEvent=()=>{
    return useContext(Eventcontext);
}

export const EventProvider=({children})=>{
    const value={};
    <Eventcontext.Provider value={value}>
        {children}
    </Eventcontext.Provider>
}