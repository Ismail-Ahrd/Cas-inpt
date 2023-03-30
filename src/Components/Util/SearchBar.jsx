import React from 'react'
import { FaFilter } from 'react-icons/fa'
const SearchBar = ({search,setSearch}) => {   
  return (
    <div className='sm:w-full w-[90vw] rounded-xl px-3 h-[50px] bg-blue3color flex justify-around '>
        <div className='flex gap-2 justify-center items-center'>
            <h3 className='text-bold text-sm text-bgcolor '>Search :</h3>
            <input onChange={(e)=>setSearch(e.target.value)} className='text-bgcolor md:w-[400px] w-[200px] bg-blue2color px-2 outline-blue1color border-0 rounded-xl h-[35px]'  />
        </div>
        <div className='flex gap-2 justify-center items-center'>
            <h3 className='text-bold text-sm text-bgcolor sm:flex hidden '>Filter By :</h3>
            <FaFilter size={23} className='text-blue2color'/>
        </div>
    </div>
  )
}

export default SearchBar