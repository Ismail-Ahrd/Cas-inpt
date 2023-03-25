import React from 'react'
import event from '../../assets/event.png'

const EventCard = () => {
  return (
    <div className='lg:w-[900px] md1:w-[700px] w-[400px] rounded-3xl bg-blue3color flex flex-col justify-center items-center gap-3 px-4 py-1'>
        <h1 className='font-[1000] text-[1.25rem] text-blue2color'>Event</h1>
        <div className='flex md1:flex-row flex-col  gap-3 w-full justify-center '>
            <div className=' rounded-xl md1:w-[50%] w-full h-[230px]'>
                <img className='w-full h-full' src={event} alt="eventpicture" />
            </div>
            <div className='md1:w-[50%] w-full  h-[230px] border-2 flex flex-col gap-3  border-bgcolor rounded-xl p-2 pt-4'>
                <div className='flex gap-3 p-1 items-center'>
                    <h3 className='font-bold text-blue2color text-lg'>Destination :</h3>
                    <p className='text-sm font-light text-black'>Azilal</p>
                </div>
                <div className='flex gap-3 p-1 items-center'>
                    <h3 className='font-bold text-blue2color text-lg'>Description :</h3>
                    <p className='text-sm font-light text-black'>llllllllllllllllllllllllllllllll</p>
                </div>
                <div>
                    <div className='w-full flex flex-col gap-3 justify-center items-center'>
                        <a href='#' className='py-3 px-16 bg-blue2color rounded-3xl text-bgcolor font-bold text-sm hover:bg-opacity-40 transition-all duration-300'>Lire Plus</a>
                        <div className='flex gap-1 pt-1'>
                            <a href='#' className='py-3 px-8 bg-blue2color rounded-3xl text-bgcolor font-bold text-sm hover:bg-opacity-40 transition-all duration-300'>Faire un don</a >
                            <a href='#' className='py-3 px-8 bg-blue2color rounded-3xl text-bgcolor font-bold text-sm hover:bg-opacity-40 transition-all duration-300'>Autrement</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full self-start border-2 border-bgcolor rounded-xl p-2  '>
            <h3 className='font-bold text-blue2color text-lg'>Progression :</h3>
            <div>

            </div>
        </div>
    </div>
  )
}

export default EventCard