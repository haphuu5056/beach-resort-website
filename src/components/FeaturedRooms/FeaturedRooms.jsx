import Title from "../Title"
import items from "../../data";
import Room from "../Room/Room";
const FeaturedRooms = () => {
  let featuredRooms = items.filter((room) => room.fields.featured === true);

  return (
    <section className='bg-offWhite py-4'>
       <div className='max-w-[1000px] mx-auto py-8 flex flex-col justify-center items-center text-center'>
       <Title title='Featured Rooms'/>
        <div className='flex items-center mt-4 px-4 space-x-8 pt-8'>
         {featuredRooms.map((room,index)=> {
          return(
          <Room room={room} key={index}/> )
         })}     

        </div>
       </div>
    </section>
  )
}

export default FeaturedRooms