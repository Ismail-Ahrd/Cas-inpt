import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaInstagram}from 'react-icons/fa'

const Card = () => {
  return (
    <div className=''>
        <div className='w-[200px] h-[250px]  bg-blue1color '>
            <div className='h-full  bg-blue1color hover:opacity-100 lg:opacity-0 transition-all duration-300 flex  test gap-4 justify-center items-end w-full pb-4'>
                <div className='w-[40px] h-[40px] rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300 bg-white flex justify-center items-center'>
                    <FaFacebookF/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300 bg-white flex justify-center items-center'>
                    <FaLinkedinIn/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full hover:bg-gray-400 cursor-pointer transition-all duration-300 bg-white flex justify-center items-center'>
                    <FaInstagram/>
                </div>
            </div>
        </div>
        <div className='text-center border-b-2 border-x-2 border-blue1color '>
            <h4 className='text-lg font-extrabold text-blue1color'>abdo</h4>
            <h6 className='text-sm font-normal text-blue-600'>president</h6>
            <p className='text-[14px] font-light text-blue-500'>im me you are you</p>
        </div>
    </div>
  )
}

export default Card