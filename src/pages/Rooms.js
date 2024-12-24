import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title';
import items from '../data';
import { useEffect } from 'react';
import FormRooms from '../components/FormRooms';
import Room from '../components/Room/Room';

const Rooms = () => {
  const backgroundImge = items[1].fields.images[0].image1;
  const [sortedRooms,setSortedRooms] = useState([])
  const [formData, setFormData] = useState({
    roomType: 'all',
    guest : 1,
    price : 300,
    breakfast: false,
    pets: false
  })
  let maxPrice = Math.max(...items.map((item) => item.fields.price));

  const filterRooms = ()=>{

    let tempRooms = [...items];
    let capacity = parseInt(formData.guest);
    let price = parseInt(formData.price);

    if (formData.roomType !== "all") {
      tempRooms = tempRooms.filter((room) => room.fields.type === formData.roomType);
    }
    if (formData.guest !== 1) {
      tempRooms = tempRooms.filter((room) => room.fields.capacity >= capacity);
    }
     // filter by size
    //  tempRooms = tempRooms.filter(
    //   (room) => room.fields.size >= 0 && room.fields.size <= maxSize
    // );
    
    //  filter by price
     if (price !== maxPrice) {
      tempRooms = tempRooms.filter((room) => room.fields.price <= price);
    }
    // filter by breakfast
    if (formData.breakfast) {
      tempRooms = tempRooms.filter((room) => room.fields.breakfast === true);
    }
    // filter by pets
    if (formData.pets) {
      tempRooms = tempRooms.filter((room) => room.fields.pets === true);
    }
    setSortedRooms(tempRooms);

  }
  useEffect(()=>{
     filterRooms();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[formData])

  const handleChange = (event) => {
    const { type, name } = event.target;
    const value =  type === "checkbox"
        ? event.target.checked
        : event.target.value;

        setFormData({...formData,[name]: value});
  };
  return (
    <div>
      <Navbar />
      <Hero hero={'room'} backgroundImge={backgroundImge}>
        <Banner title='Our Rooms'>
        <Link to={'/'} className='p-2 text-sm px-4 tracking-widest bg-primaryColor text-mainBlack uppercase hover:bg-[#e9dcc5] outline-none '>Return Home
        </Link>
        </Banner>
      </Hero>
      <div className='max-w-[1200px] mx-auto px-4 py-12'>
        <Title title='Search Rooms' />
        <FormRooms maxPrice={maxPrice} handleChange={handleChange} 
            formData = {formData}/>
     <div className='grid grid-cols-4 gap-8 py-8'>
        {sortedRooms.map((room,index)=> {
          return( 
            <Room room={room}  key={index}/>
          )
         })}     
     </div>
     </div>
    </div>
  )
}

export default Rooms