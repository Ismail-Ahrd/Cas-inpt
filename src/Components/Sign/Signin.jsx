import React, { useRef, useState } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import { Link, useLocation,Navigate, useNavigate} from 'react-router-dom'
import auth from '../../../firebase'
import { useAuth } from '../../Context/Authcontext'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Signin = () => {
    const location = useLocation();
    const navigate=useNavigate()
    const from =location.state?.from?.pathname || '/'
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const emailref=useRef()
    const passwordref=useRef()
    const {currentUser}=useAuth()
    async function handleSignin(e){
        e.preventDefault()
        try{
            setLoading(true)
            setError('')
            await signInWithEmailAndPassword(auth,emailref.current.value,passwordref.current.value)
            .then((userCredential) => {
                // Signed in
                navigate(from,{replace:true})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
        }catch{
            setError('Failed to Signin')
        }
        setLoading(false)
    }
  return (
    <div className='flex justify-center mt-11'> 
        <form onSubmit={handleSignin} className='flex flex-col gap-7 items-center justify-center md1:w-[700px] w-[400px]'>
            <FaUserAlt size={30} className="text-blue4color"/>
            <div className='flex flex-col  gap-14 w-full'>
                <h2 className='text-3xl font-bold md1:w-[700px] w-[400px] text-center  gradient '>Rejoignez votre session:</h2>
                {error&&(
                    <h2 className='text-sm font-bold text-red-500'>{error}</h2>
                )}
                <div className='flex gap-7 '>
                    <h3 className='text-lg font-semibold text-blue1color w-[32%] '>Email:</h3>
                    <input required ref={emailref} type="email" className='flex-1 bg-input rounded-xl outline-1 outline-blue1color text-blue2color py-1 px-2'/>
                </div>
                <div className='flex gap-7 '>
                    <h3 className='text-lg font-semibold text-blue1color w-[32%]'>Mot de passe:</h3>
                    <input required  ref={passwordref} type="password" className='flex-1 bg-input rounded-xl outline-1 outline-blue1color text-blue2color py-1 px-2'/>
                </div>
                <div>
                    <h2 className='text-sm font-bold w-[600px] text-blue1color text-left '>you don’t have an account . <Link to='/signup' className='border-b-2 border-blue1color hover:border-blue3color hover:text-blue3color'>Registre</Link></h2>
                </div>
            </div>
            <button disabled={loading} type='submit' className='bg-blue1color text-white font-bold text-sm py-3 hover:bg-blue3color transition-all duration-300 px-8 rounded-3xl'>Sign In</button>
        </form>
    </div>
  )
}

export default Signin