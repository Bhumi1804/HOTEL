import React, { useState } from "react";
import "./BookingForm.css";


const HotelBookingForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      // You can add further logic here, like sending data to a backend or displaying a confirmation message
    };
  
    return (
      <div className="signup-container">
        <h2><b>Hotel Booking Form</b></h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Check-in Date:
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Check-out Date:
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Number of Guests:
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          
        <label>
          Room Type:
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="single-economy">Single Economy</option>
            <option value="single-basic">Single-Basic</option>
            <option value="single-standard">Single-Standard</option>
            <option value="single-delux">Single-delux</option>
            <option value="double-economy">Double-economy</option>
            <option value="double-basic">Double-basic</option>
            <option value="double-standard">Double-standard</option>
            <option value="double-delux">Double-delux</option>
            <option value="family-economy">Family-economy</option>
            <option value="family-basic">Family-basic</option>
            <option value="family-standard">Family-standard</option>
            <option value="family-delux">Family-delux</option>
            <option value="presidential">Presidential</option>
          </select>
        </label>
        <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default HotelBookingForm;