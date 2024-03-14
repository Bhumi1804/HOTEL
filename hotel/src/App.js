import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Router, Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import Rooms from "./Component/Rooms/Rooms";
import SingleRoom from "./Component/SingleRoom";
import Error from "./Component/Error";
import Navbar from "./Component/Navbar/Navbar";
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact";
import BookingForm from "./Component/BookingForm/BookingForm";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
// import { Route,Switch } from "react-router-dom"; 

  
    function App() {
  return (
 
      <BrowserRouter>
       <Navbar />

        <Routes>
 
    <Route path="/" element={<Home/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route path="/BookingForm" element={<BookingForm/>} />
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          
          {/* <Route path="/Activities" element={<Activities/>} /> */} 
           <Route exact path="/rooms" element={<Rooms/>} /> 
           {/* <Route exact path="/rooms/:slug" element= {<SingleRoom/>} /> */}
           <Route path="/rooms/:slug" component={SingleRoom} />
           <Route path="/Gallery" element={<Gallery/>} /> 
           <Route path="/Contact" element={<Contact/>} />
           <Route path ="/Error"element={Error}/> 
           </Routes>
</BrowserRouter>
         
  );
}

export default App;
