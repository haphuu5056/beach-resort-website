import React from 'react'
import { Link } from 'react-router-dom'

function Room({room}) {
  return (
   <Link  to={`/rooms/${room.sys.id}`} className="relative bg-slate-300 flex flex-col shadow-md shadow-mainBlack	 rounded-md w-70 ">
   <div>
    <img src={room.fields.images[0].image1} alt="" className=" rounded-tr-sm"/>
   </div>
   <h4 className="text-center bg-mainGrey p-2 text-xs tracking-widest">{room.fields.name}</h4>
   <div className="absolute bg-mainBlack text-offWhite flex flex-col items-center p-2 rounded-br-lg opacity-80">
   <span className="text-xs tracking-widest">${room.fields.price} </span>
   <span className="text-[8px]">per night</span>
   </div>
  </Link> 
  )
}

export default Room