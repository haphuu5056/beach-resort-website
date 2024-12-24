import React from "react";
import { useEffect,useState } from "react";

const RoomContext = React.createContext();

const RoomProvider = ({children})=>{

  // const getRoom = (slug) => {
  //   let tempRooms = [...data.rooms];
  //   const room = tempRooms.find((room) => room.slug === slug);
  //   return room;
  //  };

 return (
       <RoomContext.Provider
      //  value={{
      //    ...data,
      //    getRoom: getRoom,
      //    handleChange: handleChange,
      //  }}
       >
       {children}
     </RoomContext.Provider>
 )
}

export {RoomProvider, RoomContext}