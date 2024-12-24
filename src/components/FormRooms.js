import React from 'react'

function FormRooms({maxPrice , handleChange ,formData}) {
 
 const options = [
  {
    value: "single",
  },
  {
    value: "all",
  },
  {
    value: "double",
  },
  {
    value: "family",
  },
  {
    value: "presidential",
  },
];
  return (
   <form  className='flex  justify-between items-center py-8'>
          {/* room type */}
          <div className='flex flex-col space-y-2'>
          <label htmlFor="type" className='text-mainBlack tracking-[3px] text-sm'>Room Type</label>
          <select  id="type" name="roomType" className='text-xs w-52 rounded-sm border border-mainBlack focus: outline-indigo-500' value={formData.roomType} onChange={handleChange}>
            {options.map(opt=>(
            <option key={opt.value} value={opt.value}>{opt.value}</option>
            ))}
          </select>
          </div>
            {/* room guests */}
          <div className='flex flex-col space-y-2'>
          <label htmlFor="guests" className='text-mainBlack tracking-[3px] text-sm'>Guests</label>
          <select  id="guests" name="guest" className='text-xs w-52 rounded-sm border border-mainBlack focus: outline-indigo-500' onChange={handleChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
          </select>
          </div>
         {/* room price */}
          <div className='w-52'>
          <label htmlFor="price" className='text-sm'>Room price $ {formData.price}</label>
          <input
            type="range"
            name="price"
            min= '0'
            max={maxPrice}
            id="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full"/>
           </div>
          {/* room size */}
          <div className='space-y-2'>
            <h4 className='text-mainBlack tracking-[3px] text-sm'>Room Size</h4>
            <input type="text" className='border-2 border-gray-600 w-16 text-sm tracking-wider px-1 rounded-md' placeholder=''/>
            <input type="text" className='border-2 border-gray-600 w-16 text-sm tracking-wider px-1 rounded-md ml-2 text-black' placeholder='3000'/>
          </div>
          {/* breakfast and pets */}

          <div className='flex flex-col'>
            <div>
            <input type="checkbox" id="breakfast" name="pets" value={formData.breakfast} onChange={handleChange}/>
          <label htmlFor="breakfast" className='p-2 text-sm tracking-[3px] text-gray-800'>Breakfast</label>
            </div>
            <div>
            <input type="checkbox" id="pets" name="pets" 
            value={formData.pets} onChange={handleChange}/>
            <label htmlFor="pets" className='p-2 text-sm tracking-[3px] text-gray-800'>Pets</label>
            </div>
          </div>
        </form>
  )
}

export default FormRooms