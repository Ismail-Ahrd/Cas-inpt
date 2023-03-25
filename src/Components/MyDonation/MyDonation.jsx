import React from 'react'
import MyDonationCard from '../Card/MyDonationCard'

const MyDonation = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-6 mt-14'>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <h1 className='text-3xl font-bold gradient '>Thank you for donating</h1>
            <p className='text-lg font-thin text-blue1color text-center'>One donation saves one thousand lives <br /> all thanks to you ...</p>
            <h3 className='text-lg font-bold text-blue1color'>you have donated: <span className='text-blue4color'>500mad</span></h3>
            <h2 className='text-2xl font-bold text-blue1color'>List of Donation :</h2>
        </div>
        <MyDonationCard/>
        <MyDonationCard/>
        <MyDonationCard/>
        <MyDonationCard/>
        <MyDonationCard/>
    </div>
  )
}

export default MyDonation