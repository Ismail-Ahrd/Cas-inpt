import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer__first'>
            <img src="src/assets/Logo.png" alt="Logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid at iure, neque laborum consequatur qui blanditiis aspernatur perspiciatis minima exercitationem veniam. Corrupti esse reprehenderit blanditiis ipsa culpa voluptatem possimus!</p>
            <button>Contact us</button>
        </div>
        <footer className="footer__second">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
        </footer>
    </div>
  )
}
