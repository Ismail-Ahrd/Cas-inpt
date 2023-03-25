import React from 'react'

const Arrow = ({children}) => {
  return (
    <>
        <div className='w-full flex justify-center items-center animate-slowfade'>
          <div className=' w-full bg-blue1color h-4 '>

          </div>
          <div className='w-[38px] h-[38px] aspect-square bg-blue1color rotate-[45deg] '>

          </div>
        </div>
        <div className='flex gap-8 lg:flex-nowrap justify-center flex-wrap '>
            {children}
        </div>
        <div className='w-full flex justify-center items-center animate-slowfade'>
          <div className='w-[38px] h-[38px] aspect-square bg-blue1color rotate-[45deg] '>

          </div>
          <div className=' w-full bg-blue1color h-4 '>

          </div>
        </div>
    </>
  )
}

export default Arrow