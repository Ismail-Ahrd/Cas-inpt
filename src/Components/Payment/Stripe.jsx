import React, { useEffect } from 'react'
import money from '../../assets/money.png'

const Stripe = () => {
    useEffect(()=>{
        setTimeout(()=>{
            window.open('https://buy.stripe.com/test_bIYaFT2606fH8iQcMM')
            window.location='/'
        },1000)
    })
  return (
    <div className='h-screen w-full flex flex-col pt-10 items-center'>
        <h1 className='text-center sm:text-3xl text-lg gradient font-bold'>PAYING WITH STRIPE</h1>
        <img className='bg-slate-400 rounded-full p-3 animate-pulse sm:w-[300px] w-[200px] ' src={money} alt="money" />
    </div>
  )
}

export default Stripe