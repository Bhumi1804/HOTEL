import React from 'react';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import FeaturedRooms from '../FeaturedRooms';

// import SingleRoom from '../SingleRoom/SingleRoom';
export default function Home() {
  return (
    <>
    <Hero>
    <Banner title="Hotel Grand Blue" subtitle="deluxe rooms starting at ₹2599">
      <Link to='/rooms' className="btn-primary">
        our rooms
      </Link>
    </Banner>
  </Hero>
  <Services/> 
  <FeaturedRooms/>
  </> 
  );  
}

  