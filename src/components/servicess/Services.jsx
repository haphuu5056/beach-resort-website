import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from '../Title';

const Services = () => {
  const services = [
    {
      icon: <FaCocktail size={30}/>,
      title: "Free Cocktails",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, eius!",
    },
    {
      icon: <FaHiking size={30}/>,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, eius!",
    },
    {
      icon: <FaShuttleVan size={30}/>,
      title: "Free Shuttle",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, eius!",
    },
    {
      icon: <FaBeer size={30}/>,
      title: "Strongest Beer",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, eius!",
    },
  ]
  return (
     <section className='bg-[#ebe3d7]'>
      <div className='max-w-[1100px] mx-auto py-12'>
        <Title   title="services"/>
       <div className='flex items-center justify-between space-x-6 pt-8'>
        {services.map((item,index)=>(
            <div key={index} className='flex flex-col items-center text-center space-y-2 py-4'>
            <div className='text-center'>
            <span className='text-primaryColor'>{item.icon} </span>
            </div>
            <h6 className=' text-mainBlack tracking-widest text-sm p-2 font-semibold'>{item.title}</h6>
            <p className='text-xs px-4 leading-5'>{item.info}</p>
           </div>
          ))}
        </div>
      </div>
     </section>
  )
}

export default Services