import React from 'react'
const Banner = ({title, subtitle, children}) => {
  return (
   <>
      <h1 className='text-offWhite text-5xl tracking-wider font-bold capitalize'>{title}</h1>
      <div className='w-32 h-1 bg-primaryColor'></div>
      <p className='text-offWhite tracking-widest capitalize'>{subtitle}</p>
      {children}
   </>
  )
}

export default Banner