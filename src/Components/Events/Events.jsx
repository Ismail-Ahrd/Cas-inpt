import React from 'react'
import { useAuth } from '../../Context/Authcontext'
import EventCard from '../Card/EventCard'
import MainPage from '../MainPage/MainPage'

const Events = () => {
  const {currentUser}=useAuth()
  const titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maxime? Obcaecati, nesciunt laborum magni maiores eum asperiores ex rem nisi dicta? Sit repellat consequatur ut sequi recusandae cupiditate, perspiciatis praesentium?"
  return (
    <div>
      <MainPage title="Events" text={titleDescription} />
      <div className='flex flex-col px-20 gap-6'>
        <div className='w-full items-center justify-center flex flex-col gap-4'>
            <h3 className='text-xl font-bold text-blue2color'>The last 3 /10 events:</h3>
            {
            currentUser?.email=="admin@gmail.com" && (
                <button className='hover:bg-green-400 duration-300  text-bgcolor rounded-xl bg-green-600 px-12 text-lg py-2'>Add Event</button>
            )
              }
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
        <div className='w-full items-center justify-center flex'>
            <div className='flex justify-between w-[900px]'>
                <button className='text-blue4color font-bold text-xl hover:text-opacity-40 duration-300'>Previous</button>
                <button className='text-blue4color font-bold text-xl hover:text-opacity-40 duration-300'>Next</button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Events