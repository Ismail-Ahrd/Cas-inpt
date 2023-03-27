import React from 'react';
import { Link } from 'react-router-dom';
import './mainPage.css';
import books from '../../assets/books.png'
import money from '../../assets/money.png'
import clothes from '../../assets/clothes.png'
import logo1 from '../../assets/logo1.png'


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
                <img className='main__logo ' src={logo1} alt="Logo" />
                <Link className='animate-pulse main__icon main__icon__books hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-500' to={'/payment'}><img  src={books} alt="Book" /></Link>
                <Link className='animate-pulse main__icon main__icon__money hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-500' to={'/payment'}><img  src={money} alt="Money" /></Link>
                <Link className='animate-pulse main__icon main__icon__clothes hover:bg-slate-300 rounded-full p-2 cursor-pointer transition-all duration-500' to={'/payment'}><img src={clothes} alt="Clothes" /></Link>
            </div>
        </div>
    </div>   
    

  )
}
