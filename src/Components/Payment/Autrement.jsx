import React from 'react'
import map from '../../assets/map.png'
const Autrement = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h3 className='mt-3 sm:text-xl text-sm gradient font-bold'>We accept also clothes , books ...etc as a donnation</h3>
      <div className='mt-6 flex md:flex-row flex-col lg:w-[70vw] w-[90vw] justify-between'>
        <div className='flex flex-col  items-center'>
          <h3 className='mt-3 sm:text-xl text-lg text-blue1color font-bold'>Choose a way to contact Us</h3>
          <div className='flex gap-6 mt-3'>
            <button className='px-8 py-2 bg-blue2color text-bgcolor hover:bg-opacity-40 duration-300 rounded-xl'>Email</button>
            <button className='px-8 py-2 bg-blue2color text-bgcolor hover:bg-opacity-40 duration-300 rounded-xl'>Tel</button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='mt-3 sm:text-xl text-lg text-blue1color font-bold'>Or Visit Us</h3>
          <img className='sm:w-[400px] ' src={map} alt="" />
        </div>
      </div>

    </div>
  )
}
export default Autrement