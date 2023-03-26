import React from 'react'
import { Link } from 'react-router-dom'

const MyDonationCard = () => {
  return (
    <div className='sm:w-[700px] w-[370px] sm:flex-row flex-col justify-center items-center rounded-xl p-2 px-4 bg-blue3color flex'>
        <div>
          <h3 className='text-blue2color font-bold sm:text-left text-center'>Event: Azillal</h3>
          <div className='sm:w-[150px] w-[300px] h-[150px] bg-bgcolor'></div>
        </div>
        <div className='flex-1 p-5 justify-start pt-6 items-start flex flex-col gap-6'>
          <h3 className='text-blue2color font-bold'>You donated: <span className='text-blue4color'>100mad</span></h3>
          <h3 className='text-blue2color font-bold'>Total donation : <span className='text-blue4color'>2000mad</span></h3>
          <Link to ={'/event'}><button className='text-bgcolor text-sm font-medium bg-blue2color px-12 py-1 rounded-xl hover:bg-opacity-50 duration-300'>Go to event page</button></Link>
        </div>
    </div>
  )
}

export default MyDonationCard