import { useParams,Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';

import data from '../data';
const SingleRoom = () => {
  const {roomId} = useParams();
  const getroom = data.filter(data=> data.sys.id === roomId);
  return (
    <>
    <Navbar />
    {getroom.map((room)=>{
      return(
        <div key={room.sys.id}>
          <Hero hero={'room'}  backgroundImge={room.fields.images[0].image1}>
            <Banner title={room.fields.name}>
            <Link to={'/'} className='p-2 text-sm px-4 tracking-widest bg-primaryColor text-mainBlack uppercase hover:bg-[#e9dcc5] outline-none '>Back to Rooms
            </Link>
            </Banner>
        </Hero>
        <div className='flex flex-col' >
          <div>
          {
             room.fields.images.map((images,index) =>{
              return(
                <div key={index} className='max-w-[1200px] mx-auto justify-around flex
                items-center mt-4 px-4 p-4 overflow-hidden'>
                    <img src={images.image2} alt="" className="w-80 rounded-r-sm"/>
                    <img src={images.image3} alt="" className="w-80 rounded-r-sm"/>
                    <img src={images.image4} alt="" className="w-80 rounded-r-sm"/>
                </div>
              )
             })
          }
          </div>
          <div className='grid grid-cols-2 gap-6 max-w-[1150px] mx-auto p-6'>
            {/*detail section*/}
            <div className=''>
              <h2 className='font-bold text-2xl py-4 tracking-[3px]'>Details</h2>
              <p className='text-sm tracking-wider leading-6'>{room.fields.description}</p>
            </div>
            {/*info section*/}
            <div className='max-w-sm ml-10'>
              <h2 className='font-bold text-2xl py-4 tracking-[3px]'>Info</h2>
              <div className='flex flex-col space-y-4 tracking-[3px]'>
              <span className=''>Price : ${room.fields.price}</span>
              <span>Size : ${room.fields.size}</span>
              <span>Max Capacity {room.fields.capacity} Person</span>
              <span>{room.fields.pets ? 'Pets Allowed' : 'No Pets Allowed'}</span>
              <span>{room.fields.breakfast ? 'Free Breakfast Included' : ''}</span>
            </div>
            </div>
            <div className='col-span-2'>
            <h2 className='font-bold text-1xl tracking-[3px] py-4'>Extras</h2>
            <div className='grid grid-cols-3 gap-2'>
            {room.fields.extras.map((extra,index) => (
                <span key={index}>- {extra}</span>
            ))}
            </div>
            </div>
          </div>
          </div>
          </div>
      )})}

    </>
  )
}

export default SingleRoom