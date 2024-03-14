// import React, { Component } from 'react';
// import defaultBcg from '../images/room-1.jpeg'
// import Hero from './Hero/Hero';
// import Banner from './Banner/Banner';
// import {Link} from 'react-router-dom'
// import { RoomContext } from '../Context';

// export default class SingleRoom extends Component {
//   constructor(props){
//     super(props)
//     // console.log(this.props);
//     this.state ={
//       slug: this.props.match.params.slug,
//       defaultBcg
//     };
//   }
//   static contextType = RoomContext;
//   // componentDidMount(){

//   // }
//   render() {
//     const {getRoom} =this.context;
//     const room = getRoom(this.state.slug);
//     if(!room){
//       return <div className='error'>
//         <h3>no such room can be found...</h3>
//         <Link to="/rooms" className='btn-primary'>
//           back to rooms
//         </Link>
//       </div>
//     }
//     const {name, description, capacity, size, price, extas, breakfast, pets, images}=room;
//     const [mainImg,...defaultImg]= images;
//     return (
//     <>
//     <Hero hero='roomsHero'>
//       <Banner title={`${name} room`}>
//         <Link to='/rooms' className='btn-primary'>
//           back to rooms
//         </Link>
//       </Banner>
//     </Hero>
//     <section className='single-room'>
//       <div className='single-room-images'>
//         {defaultImg.map((item,index) => {
//           return <img key={index} src={item} alt={name}/>;

//         })}
//         </div>
//         <div className="single-room-info">
//           <article className='desc'>
//             <h3>details</h3>
//             <p>{description}</p>
//           </article>

//       </div>
//     </section>
//     </>
//    ); 
//   }
// }
import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';

export default class SingleRoom extends Component {
  static contextType = RoomContext;

  state = {
    slug: this.props.match.params.slug,
    defaultBcg,
  };

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className='error'>
          <h3>no such room can be found...</h3>
          <Link to="/rooms" className='btn-primary'>
            back to rooms
          </Link>
        </div>
      );
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <Hero hero='roomsHero'>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </Hero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            {/* Add additional room details as needed */}
          </div>
        </section>
      </>
    );
  }
}
