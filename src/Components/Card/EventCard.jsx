import React from 'react'
import { Link } from 'react-router-dom'
import event from '../../assets/event.png'
import { useAuth } from '../../Context/Authcontext'
import ProgressBar from '../Util/ProgressBar'
import { CiCircleRemove } from 'react-icons/ci'
import { FaDonate } from 'react-icons/fa'
import { GiClothes } from 'react-icons/gi'

const EventCard = () => {
    const {currentUser}=useAuth()
  return (
    <div className='lg:w-[900px] md1:w-[700px] w-[370px] rounded-3xl bg-blue3color relative flex flex-col justify-center items-center gap-3 px-4 py-1'>
        {
            currentUser?.email=="admin@gmail.com" && (
                <button className='hover:bg-red-400 duration-300 text-sm text-bgcolor rounded-tr-3xl bg-red-600 sm:px-8 px-4 py-1 absolute top-0 right-0 flex gap-3'>Remove <CiCircleRemove size={27}/></button>
            )
        }
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
                    <div className='w-full flex flex-col gap-2 justify-center items-center'>
                        <Link to={'/event'} className='py-3 px-16 bg-blue2color rounded-3xl text-bgcolor font-bold text-sm hover:bg-opacity-40 transition-all duration-300'>Lire Plus</Link>
                        <div className='flex gap-1 pt-1'>
                            <Link to='/stripe' className='py-3 lg:px-8 px-4 bg-blue2color rounded-3xl text-bgcolor font-bold text-sm hover:bg-opacity-40 transition-all duration-300 flex gap-3 items-center'>Faire un don <FaDonate size={27}/></Link >
                            <Link to='/payment' className='py-3 lg:px-8 px-3 bg-blue2color rounded-3xl text-bgcolor font-bold text-sm hover:bg-opacity-40 transition-all duration-300 flex gap-3 items-center'>Autrement <GiClothes size={27}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full self-start border-2 border-bgcolor rounded-xl p-2  '>
            <h3 className='font-bold text-blue2color text-lg'>Progression :</h3>
            <div className=' flex justify-between items-center gap-2'>
               <p className='font-bold text-blue2color '> 1 mars</p>
                <ProgressBar/>
                <p className='font-bold text-blue2color '>1 avril</p>
            </div>
        </div>
    </div>
  )
}

export default EventCard