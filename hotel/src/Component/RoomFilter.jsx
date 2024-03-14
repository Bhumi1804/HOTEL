import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from "../Component/Title";
//get all unique values
const getUnique =(items, value)  => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({rooms}) {
const context = useContext(RoomContext);
const {
handelChange,
type,
capacity,
price,
minPrice,
maxPrice,
minSize,
MaxSize,
breakfast,
pets
} = context;
//get unique types
let types = getUnique(rooms, 'type');
//add all
types =['all', ...types];

//map to jsx
types = types.map((item, index) => {
  return (
  <option value={item} key={index}>
    {item}
    </option>
  );
});
let people = getUnique(rooms,'capacity') 
people = people.map((item,index)=> {
  return <option key={index} value={item}>{item}</option>
})  
  return (
  <section className='filter-container'>
    <Title title="search rooms"/>
    <form className='filter-form'>
   
    {/*select typr */}
    <div className="form-group">
      <label htmlfor="type">room type</label>
      <select name='type' id='type' value={type} className='form-control' onChange={handelChange}>
      {types}
      </select>
    </div>
    {/* end of select type */}


     {/*guests */}
     <div className="form-group">
      <label htmlfor="capacity">Guests</label>
      <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handelChange}>
      {people}
      </select>
    </div>
    {/* end of guests */}


    {/* room price*/}
<div className="form-group">
  <label htmlFor="price">
    room price ₹{price}
  </label>
  <input type="range" name="price" value={minPrice} max={maxPrice} id="price" values={price} onChange={handelChange} className="form-control"/>
</div>

    {/*end of room price*/}



{/*extra  breakfast/pets */}
<div className="form-group">
  <div className="single-extra">
    <input type="checkbox" name="breakfast" id='breakfast'
     checked={breakfast} onChange={handelChange} />
    <label htmlFor='breakfast'> breakfast</label>
  </div>


  <div className="single-extra">
    <input type="checkbox" name='pets' id='pets'
     checked={pets} onChange={handelChange} />
    <label htmlFor='pets'>pets</label>
  </div>
  </div>


{/*end extra breakfast/pets */}

    </form>
  </section> 
  );
  
}
