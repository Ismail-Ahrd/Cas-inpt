import React from 'react'
import MainPage from '../MainPage/MainPage'
import don from '../../assets/don.png'

const titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maxime? Obcaecati, nesciunt "

const Donation = () => {
  return (
    <div>
        <MainPage title="Donation" text={titleDescription} button="Donate" direction='/stripe' image={don} />
    </div>
  )
}

export default Donation