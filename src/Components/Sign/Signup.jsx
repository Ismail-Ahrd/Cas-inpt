import React, { useState } from 'react'
import { useRef } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import auth from '../../../firebase'
import { useLocation, useNavigate } from 'react-router-dom'

const Signup = () => {
    const location = useLocation();
    const navigate=useNavigate()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const confirmref=useRef()
    const usernameref=useRef()
    const emailref=useRef()
    const passwordref=useRef()
    const from =location.state?.from?.pathname || '/'
    async function handleRegistre(e){
        e.preventDefault()
        if(confirmref.current.value==passwordref.current.value){
            try{
                setLoading(true)
                setError('')
                await createUserWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value)
                    .then((userCredential) => {
                        // Signed in  
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        setError(errorMessage)
                        // ..
                })
                await updateProfile(auth.currentUser, { displayName: usernameref.current.value }).then(()=>{
                    navigate(from,{replace:true})
                })
                .catch(
                    (err) => console.log(err)
                );
                // await signup(emailref.current.value, passwordref.current.value)
            }catch{
                console.log('pleaase');
                setError('Failed to create an account')
            }
            setLoading(false)
        }
        else{
            setError('Passwords do not match')
        }
    }
    // const Signup=async()=>{
    //     const detail ={
    //         familyname:nomref.current.value,
    //         name:prenomref.current.value,
    //         email:emailref.current.value,
    //         password:passwordref.current.value,
    //     }
    //     console.log(detail);
    // }
  return (
    <div className='flex justify-center mt-6'> 
        <form onSubmit={handleRegistre} className='flex flex-col gap-7 items-center justify-center md1:w-[700px] w-[370px]'>
            <FaUserAlt size={30} className="text-blue4color"/>
            <div className='flex flex-col gap-11'>
                <h2 className='text-3xl font-bold text-blue1color gradient'>Rejoignez notre groupe en s’inscrivant:</h2>
                {error&&(
                    <h2 className='text-sm font-bold text-red-500'>{error}</h2>
                )}
                <div className='flex gap-7 w-full'>
                    <h3 className='text-lg font-semibold text-blue1color sm:w-[32%] flex-1 sm:flex-none'>Username:</h3>
                    <input required ref={usernameref} type="text" className='flex-1 bg-input rounded-xl outline-1 outline-blue1color text-blue2color py-1 px-2'/>
                </div>
                <div className='flex gap-7 w-full'>
                    <h3 className='text-lg font-semibold text-blue1color sm:w-[32%] flex-1 sm:flex-none '>Email:</h3>
                    <input required ref={emailref} type="email" className='flex-1 bg-input rounded-xl outline-1 outline-blue1color text-blue2color py-1 px-2'/>
                </div>
                <div className='flex gap-7 w-full'>
                    <h3 className='text-lg font-semibold text-blue1color sm:w-[32%] flex-1 sm:flex-none'>Mot de passe:</h3>
                    <input required ref={passwordref} type="password" className='flex-1 bg-input rounded-xl outline-1 outline-blue1color text-blue2color py-1 px-2'/>
                </div>
                <div className='flex gap-7 w-full'>
                    <h3 className='text-lg font-semibold text-blue1color sm:w-[32%] flex-1 sm:flex-none'>Confirmer:</h3>
                    <input required ref={confirmref} type="password" className='flex-1 bg-input rounded-xl outline-1 outline-blue1color text-blue2color  py-1 px-2'/>
                </div>
            </div>
            <button disabled={loading} type="submit" className='bg-blue1color text-white font-bold text-sm py-3 hover:bg-blue3color transition-all duration-300 px-8 rounded-3xl'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup