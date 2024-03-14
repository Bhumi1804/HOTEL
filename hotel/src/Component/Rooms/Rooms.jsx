import React from 'react'
import Hero from '../Hero/Hero';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import RoomContainer from '../RoomContainer';
export const Rooms = () => {
  return (
    <>
  <Hero hero="roomsHero">
    <Banner title="our rooms">
      <Link to='/' className='btn-primary'>return home</Link>
    </Banner>
  </Hero>
  <RoomContainer/>
  </>
  );
};

export default Rooms;
