import React from 'react'

const Hero = ({hero,backgroundImge, children}) => {
  return (
    <header id={hero} style={{backgroundImage: `url(${backgroundImge})`}}>
     <div className='opacity-80 bg-mainBlack p-6 px-16 flex flex-col justify-center items-center space-y-8'>
      {children}
     </div>
    </header>
  )
}

export default Hero