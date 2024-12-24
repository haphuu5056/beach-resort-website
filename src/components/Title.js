import React from "react";

function Title({ title }) {
  return (
    <div className='flex flex-col justify-center items-center text-center space-y-4'>
      <h2 className='font-semibold text-3xl tracking-wider capitalize'>{title}</h2>
      <div className='w-20 h-1 bg-primaryColor'></div>
    </div>
      
  );
}

export default Title;
