import React from 'react'
import { Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='fixed bg-[#f8f2e8] w-full left-0 top-0 px-8 py-4 z-10 '>
     <div className='flex items-center  max-w-[1000px] mx-auto'>
      <button className='text-2xl bg-transparent px-2 tracking-widest ring-2 ring-mainBlack'>Beach <span className='text-primaryColor'>Resort</span></button>
      <div className='ml-12 tracking-[3px]'>
        <Link to='/' className='p-4 font-bold text-mainBlack hover:text-primaryColor'>Home</Link>
        <Link to='/rooms' className='p-4 font-bold text-mainBlack hover:text-primaryColor'>Rooms</Link>
      </div>
     </div>
    </div>
  )
}

export default Navbar