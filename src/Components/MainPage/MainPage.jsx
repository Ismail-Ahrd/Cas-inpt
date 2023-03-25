import React from 'react';
import { Link } from 'react-router-dom';
import './mainPage.css';

export default function MainPage({title, text}) {
  return (
    <div className="mainPage">
        <div className="mainPage__notification">A new event was added!!!</div>
        <div className='main'>
            <div className='main__left'>
                <h1 className='main__title'> {title} </h1>
                <p className='main__text'>
                    {text}
                </p>
            </div>
            <div className='main__right'>
                <img className='main__logo ' src="src/assets/logo1.png" alt="Logo" />
                <Link className='main__icon main__icon__books hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-300' to={'/payment'}><img  src="src/assets/books.png" alt="Book" /></Link>
                <Link className='main__icon main__icon__money hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-300' to={'/payment'}><img  src="src/assets/money.png" alt="Money" /></Link>
                <Link className='main__icon main__icon__clothes hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-300' to={'/payment'}><img src="src/assets/clothes.png" alt="Clothes" /></Link>
            </div>
        </div>
    </div>   
  )
}
