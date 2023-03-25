import React from 'react';
import './AvatarInfo.css';
import { IoMdSettings, FiLogOut } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/Authcontext';
import auth from '../../../firebase';
import { signOut } from 'firebase/auth';


export default function AvatarInfo({setShowAvatarInfo}) {
    async function handleSignout(){
        await signOut(auth).then(() => {
            setShowAvatarInfo(false)
            // Sign-out successful.oe
          }).catch((error) => {
            // An error happened.
          });
    }
    const {currentUser}=useAuth()
  return (
    <div className='avatar'>
        <div className='avatar__first'>
            <div className='avatar__first__img'>
                <img src="src/assets/Avatar.png" alt="Avatar" />
            </div>
            <div className='avatar__first__info'>
                <h4>{currentUser?.name||'user'}</h4>
                <p>{currentUser?.email}</p>
                <Link to ={'/mydonation'}><p className='underline'>Go to myDonation</p></Link>
            </div>
        </div>
        <div className='avatar__second'>
            <div>
                <div className='avatar__second__icon'><IoMdSettings /></div>
                <p>Settings</p>
                <div className='avatar__second__icon'><FiLogOut /></div>
                <p onClick={handleSignout}>Logout</p>
            </div>
        </div>
        <div className='avatar__last'>
            <p>condition d'utilisation</p>
        </div>
    </div>
  )
}
