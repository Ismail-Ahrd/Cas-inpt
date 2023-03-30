import { addDoc, collection ,doc,serverTimestamp, setDoc } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import {db}from '../../../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../../firebase'

const Addevent = () => {
    const titleref=useRef()
    const descriptionref=useRef()
    const destinationref=useRef()
    const dateStartref=useRef()
    const dateEndref=useRef()
    const photoURLref=useRef()
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const [loading,setLoading]=useState(false)

    async function uploadImage(name){
      const imageref=ref(storage,`events/${name}`)
      try {
        await uploadBytes(imageref,photoURLref.current.files[0]).then(()=>{
          setSuccess('the image had been uploaded')
          setTimeout(() => {
            setSuccess('')
          }, 2000);
        })
        .catch((err)=>{
          console.log(err);
        })
      } catch (error) {
        setError('Failed to upload the image')
      }
    }
    
    async function handleAddEvent(e){
    e.preventDefault()
        try{
            setLoading(true)
            const docData={
              name: titleref.current.value,
              description: descriptionref.current.value,
              destination: destinationref.current.value,
              createdAt:serverTimestamp(),
              dateStart: dateStartref.current.value.toString(),
              dateEnd: dateEndref.current.value.toString(),
            }
            setError('')
            Promise.all([setDoc(doc(db,"events",titleref.current.value),docData),uploadImage(titleref.current.value)]).then(()=>{
              setSuccess('a new Event had been created')
            })
            .catch((err)=>{
              setError(err.message)
            })
        }catch{
          setError('Failed to add an event')
        }
        setLoading(false)
  }
  return (
    <div className='flex flex-col items-center gap-2 justify-center mt-6'> 
        <h2 className='sm:text-3xl text-xl font-bold text-blue1color gradient '>Add Events</h2>
        <form onSubmit={handleAddEvent} className='flex flex-col sm:gap-5 gap-2 bg-blue3color items-center justify-center md1:w-[700px] w-[360px]'>
            <FaUserAlt size={27} className="text-blue4color mt-3"/>
            <div className='flex px-10 w-full flex-col items-center sm:gap-5 gap-2'>
                {success&&(
                    <h2 className='text-sm font-bold text-green-900'>{success}</h2>
                )}
                {error&&(
                    <h2 className='text-sm font-bold text-red-500'>{error}</h2>
                )}
                <div className='flex  flex-col sm:flex-row   sm:gap-7 gap-2 w-full'>
                    <h3 className='text-lg font-bold text-blue4color sm:w-[32%] flex-1 sm:flex-none'>Event title:</h3>
                    <input required ref={titleref} type="text" className='flex-1 bg-bgcolor py-3 rounded-xl outline-1 outline-blue1color text-blue2color  px-2'/>
                </div>
                <div className='flex flex-col sm:flex-row  sm:gap-7 gap-2 w-full'>
                    <h3 className='text-lg font-bold text-blue4color sm:w-[32%] flex-1 sm:flex-none '>Event description:</h3>
                    <input required ref={descriptionref} type="text" className='flex-1 bg-bgcolor py-3 rounded-xl outline-1 outline-blue1color text-blue2color  px-2'/>
                </div>
                <div className='flex  flex-col sm:flex-row sm:gap-7 gap-2 w-full'>
                    <h3 className='text-lg font-bold text-blue4color sm:w-[32%] w-full flex-1 sm:flex-none'>Event destination:</h3>
                    <input required ref={destinationref} type="text" className='flex-1 bg-bgcolor py-3 rounded-xl outline-1 outline-blue1color text-blue2color  px-2'/>
                </div>
                <div className='flex flex-col sm:flex-row  sm:gap-7 gap-2 w-full'>
                    <h3 className='text-lg font-bold text-blue4color sm:w-[32%] flex-1 sm:flex-none'>Start date:</h3>
                    <input required ref={dateStartref} type="date" className='flex-1 bg-bgcolor py-3 rounded-xl outline-1 outline-blue1color text-blue2color   px-2'/>
                </div>
                <div className='flex flex-col sm:flex-row  sm:gap-7 gap-2 w-full'>
                    <h3 className='text-lg font-bold text-blue4color sm:w-[32%] flex-1 sm:flex-none'>End date:</h3>
                    <input required ref={dateEndref} type="date" className='flex-1 bg-bgcolor py-3 rounded-xl outline-1 outline-blue1color text-blue2color   px-2'/>
                </div>
                <div className='flex flex-col sm:flex-row  sm:gap-7 gap-2 w-full'>
                    <h3 className='text-lg font-bold text-blue4color sm:w-[32%] flex-1 sm:flex-none'>Event Image:</h3>
                    <input required ref={photoURLref} type="file" className='flex-1 bg-bgcolor py-3 rounded-xl outline-1 outline-blue1color text-blue2color   px-2'/>
                </div>
            </div>
            <button disabled={loading} type="submit" className='bg-blue4color mb-3  text-white font-bold text-sm py-3 hover:bg-blue2color transition-all duration-300 px-12 rounded-3xl'>Add</button>
        </form>
    </div>
  )
}

export default Addevent