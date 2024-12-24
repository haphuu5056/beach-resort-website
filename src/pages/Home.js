import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../components/Banner/Banner'
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/servicess/Services'
import bg from '../images/defaultBcg.jpeg';

const Home = () => {
  return (
    <div className=''>
     <Navbar />
     <Hero hero={'hero-sec'} backgroundImge={bg}>
      <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
        <Link to={'./rooms'} className='p-2 text-sm px-4 tracking-widest bg-primaryColor text-mainBlack uppercase hover:bg-[#e9dcc5] outline-none '>
          Our Rooms
        </Link>
      </Banner>
    </Hero>
     <Services />
     <FeaturedRooms />
    </div>
  )
}

export default Home