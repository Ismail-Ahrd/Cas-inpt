import React from 'react'
import { useAuth } from '../../Context/Authcontext'
import EventCard from '../Card/EventCard'
import MainPage from '../MainPage/MainPage'
import {MdAddCircle} from 'react-icons/md'
import {BsFillFastForwardFill} from 'react-icons/bs'
import {FaBackward} from 'react-icons/fa'

const Events = () => {
  const {currentUser}=useAuth()
  const titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maxime? Obcaecati, nesciunt"
  return (
    <div>
      <MainPage title="Events" text={titleDescription} />
      <div className='flex flex-col px-20 gap-6'>
        <div className='w-full items-center justify-center flex flex-col gap-4'>
            <h3 className='text-xl font-bold text-blue2color'>The last 3 /10 events:</h3>
            {
            currentUser?.email=="admin@gmail.com" && (
                <button className='hover:bg-green-400 duration-300  text-bgcolor rounded-xl bg-green-600 px-12 text-lg py-2 flex gap-3'>Add Event <MdAddCircle className='text-bgcolor' size={27}/></button>
            )
              }
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
        <div className='w-full items-center justify-center flex'>
            <div className='flex justify-between sm:w-[900px] w-full'>
                <button className='text-blue4color font-bold text-xl hover:text-opacity-40 duration-300 flex gap-3'><FaBackward size={27}/>Previous</button>
                <button className='text-blue4color font-bold text-xl hover:text-opacity-40 duration-300 flex gap-3'>Next <BsFillFastForwardFill size={27}/></button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Events