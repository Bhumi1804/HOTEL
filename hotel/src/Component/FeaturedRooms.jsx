import React, { Component } from 'react';
import { RoomContext } from '../../src/Context';
import Room from"./Room";
import Loading from "./Loading";
 import Title from './Title';
export default class FeaturedRooms extends Component {
    static contextType=RoomContext;
  render() {
    let {loading,featuredRooms : rooms} = this.context;
    rooms = rooms.map(room => {
    return  <Room key={room.id} room={room}/>;
    })
    // console.log(rooms);
    
    // console.log(value);
    return (
      <section className ='featured-rooms'>
        <Title title="featured rooms" />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>
      
      </section>
    );
    
  }
}
