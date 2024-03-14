import React from 'react'
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer({ context }){
const{loading, sortedRooms, rooms}=context;
if (loading) {
  return<Loading/>;
   }       
          return (
            <>
         
          <RoomsFilter rooms={rooms}/>
          <RoomsList rooms={sortedRooms}/>
      </>
          );
}


export default withRoomConsumer(RoomContainer)





// import React from 'react'
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'
// export default function RoomsContainer() {
//   return (
    
//    <RoomConsumer>
//     {value => {
//         const {loading,sortedRooms,rooms}=value
//  if (loading) {
// return<Loading/>;
//  }       
//          console.log(value);
//         return (
//           <div>
//         hello from roomscontainer
//         <RoomsFilter rooms={rooms}/>
//         <RoomsList rooms={sortedRooms}/>
//     </div>
//         );
//       }
//     }
//    </RoomConsumer>
   
//   );
// }
