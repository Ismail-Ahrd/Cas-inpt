import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/Authcontext'
import EventCard from '../Card/EventCard'
import MainPage from '../MainPage/MainPage'
import {MdAddCircle} from 'react-icons/md'
import {BsFillFastForwardFill} from 'react-icons/bs'
import {FaBackward} from 'react-icons/fa'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase'
import logo1 from '../../assets/logo1.png'
import SearchBar from '../Util/SearchBar'
import { Link } from 'react-router-dom'
import { storage } from '../../../firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'

const Events = () => {
  const [events,setEvents]=useState([])
  const [removed,setRemoved]=useState(false)
  const [data,setData]=useState([])
  const [search,setSearch]=useState('')
  const [images,setImages]=useState([])
  const [items,setItems]=useState([])
  const imagesRef=ref(storage,"events/")
  const map=new Map()

  // createObject=({l1,l2})=>{
  //   let object =[]
  //   for(let i=0;i<l1.length;i++){
  //     [...object,{l1[i]:l2[i]}]
  //   }
  // }
  useEffect(()=>{
      const getEvents=async()=>{
        try{
            await listAll(imagesRef).then((res)=>{
              res.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                  map.set(item.name,url)
                  setImages(map)
                })
              })
            })
            const eventCollection=collection(db,"events")
            const data=await getDocs(eventCollection)
            const devents=data.docs.map((doc)=>({...doc.data(),id:doc.id}))
            setEvents(devents)
            setData(devents)
          }catch(error){
            console.log(error);
        }
      }
      getEvents()
  },[removed])
  
  useEffect(()=>{
    const filteredEvents=data.filter((doc)=>doc.name.toLowerCase().includes(search.toLowerCase()))
    setEvents(filteredEvents)
    setRemoved(false)
  },[search,removed])

  const {currentUser}=useAuth()
  const titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maxime? Obcaecati, nesciunt"
  return (
    <div>
      <MainPage title="Events" text={titleDescription} image={logo1} />
      <div className='flex flex-col px-20 gap-6'>
        <div className='w-full items-center justify-center flex flex-col gap-4'>
            <h3 className='text-xl font-bold text-blue2color'>The last 3 /10 events:</h3>
            <SearchBar search={search} setSearch={setSearch}/>
            {
            currentUser?.email=="admin@gmail.com" && (
                <Link to={'/addevent'} ><button className='hover:bg-green-400 duration-300  text-bgcolor rounded-xl bg-green-600 px-12 text-lg py-2 flex gap-3' >Add Event <MdAddCircle className='text-bgcolor' size={27}/></button></Link>
            )
              }
              {
                events?.map((event)=>(
                  <EventCard setRemoved={setRemoved} key={event.id} id={event.id} dateEnd={event.dateEnd} dateStart={event.dateStart} description={event.description} name={event.name} destination={event.destination} photoURL={images?.get(event.name)}/>
                ))
              }
              
        </div>
        <div className='w-full items-center justify-center flex'>
            <div className='flex justify-between sm:w-[900px] w-full'>
                <button className='text-blue4color font-bold text-xl hover:text-opacity-40 duration-300 flex gap-3'><FaBackward size={27}/>Previous</button>
                <button className='text-blue4color font-bold text-xl hover:text-opacity-40 duration-300 flex gap-3'>Next <BsFillFastForwardFill size={27}/></button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Events