import React from 'react'
import {GoTriangleRight,GoTriangleLeft} from 'react-icons/go'

const Line = ({dark}) => {
  return (
    <div className={` transition-all duration-500 ${dark?'animate-slideleft':'animate-slideright'} flex pt-2 gap-3 items-center ${dark&&('flex-row-reverse')}`}>
        <div className='flex items-center justify-center'>
          <div className={`h-[60px] w-[200px] bg-bgcolor md1:flex hidden`}>
          </div>
          <GoTriangleLeft size={35} className=" text-bgcolor md1:flex hidden"/>
        </div>
        <div className={`h-[70px] w-[70px] ${dark?'bg-blue2color':'bg-blue1color'} rounded-full grid place-items-center text-white`}>
            2003
        </div>
        <div className='flex justify-center items-center'>
          {!dark&&(<GoTriangleLeft size={35} className=" text-blue1color"/>)}
          <div className={`h-[60px] w-[200px] ${dark?'bg-blue2color':'bg-blue1color'}  grid place-items-center`}>
          </div>
          {dark&&(<GoTriangleRight size={35} className=" text-blue1color"/>)}
        </div>
    </div>
  )
}

export default Line