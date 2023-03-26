import React from 'react';
import { Link } from 'react-router-dom';
import './mainPage.css';

export default function MainPage({title, text,button,direction}) {
  return (
    <div className="mainPage">
        <div className="mainPage__notification">A new event was added!!!</div>
        <div className='main'>
            <div className='main__left'>
                <h1 className='main__title'> {title} </h1>
                <p className='main__text'>
                    {text}
                </p>
                {
                    button&&(
                        <Link to={`${direction}`} className='bg-blue2color px-12 py-2 duration-300 rounded-2xl mt-4 self-start  hover:bg-opacity-50'><button className='text-bgcolor'>{button}</button></Link>
                    )
                }
            </div>
            <div className='main__right'>
                <img className='main__logo ' src="src/assets/logo1.png" alt="Logo" />
                <Link className='animate-pulse main__icon main__icon__books hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-500' to={'/payment'}><img  src="src/assets/books.png" alt="Book" /></Link>
                <Link className='animate-pulse main__icon main__icon__money hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-500' to={'/payment'}><img  src="src/assets/money.png" alt="Money" /></Link>
                <Link className='animate-pulse main__icon main__icon__clothes hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-500' to={'/payment'}><img src="src/assets/clothes.png" alt="Clothes" /></Link>
            </div>
        </div>
    </div>   
    

  )
}
