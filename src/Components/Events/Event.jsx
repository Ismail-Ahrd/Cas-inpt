import React from 'react'
import Navbar from '../Navbar/Navbar'
import event from '../../assets/event.png'
import ProgressBar from '../Util/ProgressBar'
import ActivitiesSwipper from '../Util/ActivitiesSwipper'

const Event = () => {
  return (
    <div className='mt-3 flex flex-col items-center gap-5'>
        <div className='flex flex-col items-center md:w-[70%] w-full md:px-0 px-10  gap-4'>
            <h1 className='text-blue2color font-bold text-2xl'>Event</h1>
            <img className='w-full md:h-[450px] h-[300px]' src={event} alt=""  />
            <div className=' w-full items-center gap-2'>
                <h1 className='font-bold text-blue2color text-lg'>Destination :</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className=' w-full items-center gap-2'>
                <h1 className='font-bold text-blue2color text-lg'>Description :</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className=' flex-col w-full  gap-2'>
                <h3 className='font-bold text-blue2color text-lg'>Progression :</h3>
                <div className=' flex justify-between items-center gap-2'>
                    <p className='font-bold text-blue2color '> 1 mars</p>
                    <ProgressBar/>
                    <p className='font-bold text-blue2color '>1 avril</p>
                </div>
            </div>
            <div className='flex w-full md:gap-20 gap-2 pt-1 mt-3'>
                <a href='#' className='py-3 md:px-16 px-8 bg-blue1color rounded-3xl text-bgcolor font-bold text-sm hover:bg-opacity-40 transition-all duration-300'>Faire un don</a >
                <a href='#' className='py-3 md:px-16 px-8 bg-blue1color rounded-3xl text-bgcolor font-bold text-sm hover:bg-opacity-40 transition-all duration-300'>Autrement</a>
            </div>
            <div className='w-full mt-8 '>
                <h1 className='text-blue2color font-bold text-2xl text-center'>Activities</h1>
                <ActivitiesSwipper/>
            </div>
        </div>
       
        
    </div>
  )
}

export default Event   