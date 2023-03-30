import React from 'react'
import Arrow from '../Util/Arrow'
import Card from '../Card/Card'
import Line from './Line'
import MainPage from '../MainPage/MainPage'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import logo1 from '../../assets/logo1.png'




const titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maxime? Obcaecati, nesciunt laborum magni maiores "
const About = () => {
  return (
    <div className=''>
       <MainPage title="Club Des Affaires Sociaux" text={titleDescription} image={logo1}  />
       <div className='w-screen flex justify-center mt-4 sm:px-0 px-2 '>
        <div className=' border-blue1color border-4 sm:w-[80%] w-full  pb-5  flex flex-col items-center py-2 overflow-hidden justify-center'>
            <h1 id='casinpt' className='text-2xl text-blue1color font-extrabold'>CAS inpt</h1>
            <div className='flex flex-col gap-8'>
                <Line/>
                <Line dark/>
                <Line/>
                <Line dark/>
                <Line/>
                <Line dark/>
            </div>
            <div className='flex w-full flex-col gap-12 justify-center items-center mt-20'>
              <div className='flex items-center  w-full justify-center'>
                  <Arrow>
                    <Card/>
                  </Arrow>
              </div>
              <div className='flex  w-full justify-center items-center'>
                <Arrow>
                  <Card/>
                  <Card/>
                  <Card/>
                </Arrow>
              </div>
              <div className='flex  w-full justify-center items-center '>
                <Arrow>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                </Arrow>
              </div>
            </div>
        </div>
      </div>
    </div>
   
  )
}

export default About