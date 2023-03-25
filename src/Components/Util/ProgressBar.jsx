import React from 'react'

const ProgressBar = () => {
  return (
    <div className="py-2 flex-1">
        <div className=" bg-slate-200 relative h-6 w-full rounded-2xl">
        <div
            className=" bg-blue4color absolute top-0 left-0 flex h-full w-1/2 items-center justify-center rounded-2xl text-xs font-semibold text-white"
        >
            2000 MAD
        </div>
        </div>
  </div>
  )
}

export default ProgressBar