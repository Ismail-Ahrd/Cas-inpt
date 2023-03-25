import React, {useEffect, useState} from 'react';
import './navbar.css';
import { FaTimes, FaBars } from 'react-icons/fa';
import AvatarInfo from '../AvatarInfo/AvatarInfo';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/Authcontext';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const location=useLocation()
  const pathname=location.pathname
  console.log(pathname);
  const {currentUser}=useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAvatarInfo, setShowAvatarInfo] = useState(false);

  const showMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  const showAvatarInfos = () => {
    setShowAvatarInfo(!showAvatarInfo);
  }

  return (
    <header>
      <div className='first'>
        <nav className="navbar">
            <div className="navbar__logo">
              <Link to="/">
                  <img src="src/assets/Logo.png" alt="Logo" />
              </Link> 
            </div>
              <div className={`navbar__links ${isMenuOpen ? 'navbar__links__responsive' : ''}`}>
                <ul className='navbar__links__left'>
                    <li className={pathname=='/events'?('bg-blue3color p-2 rounded-2xl'):''}><Link to="/events">Evenement</Link></li>
                    <li className={pathname=='/donation'?(' bg-blue3color p-2 rounded-2xl'):''}><Link to="/donation">Donation</Link></li>
                </ul>
              </div>
              <ul className='navbar__links__right gap-5'>
                  <li className='navbar__links__right__trad'>Fr-<span>En</span></li>
                  <li>
                  {currentUser ? 
                      <button className='navbar__links__right__avatar' onClick={showAvatarInfos}>
                        <img src='src/assets/avatar.png' alt='Avatar' />
                      </button>: 
                      <button className='navbar__links__right__login bg-blue2color  hover:bg-opacity-50 duration-300'>
                        <Link to="/signin">Sign In</Link>
                      </button>
                  }
                  </li>
              </ul>
        </nav>
        <button className='navbar__menu' onClick={showMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <div className='second'>
        {showAvatarInfo ? 
          <div className='navbar__avatarInfo'>
            <AvatarInfo setShowAvatarInfo={setShowAvatarInfo} /> 
          </div> : 
        null }
      </div>
      
      
    </header>
  )
}