import React from 'react'
import { useAuth } from '../../Context/Authcontext'

const AvatarImage = () => {
    const {currentUser}=useAuth()
  return (
    <>
        {
        currentUser?.photoURL
        ?<img className='rounded-full' src={`${currentUser.photoURL}`} alt="Avatar" />
        :
        <div className='hover:bg-blue-400 duration-500 flex justify-center items-center rounded-full h-10 w-10 bg-blue-500'>
           <p className='text-xl text-bold text-bgcolor'>{currentUser?.displayName?.slice(0,1)?.toUpperCase()}</p>
        </div>
        }
    </>
  )
}

export default AvatarImage