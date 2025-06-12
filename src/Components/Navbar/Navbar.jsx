import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../../assets/logo.jpg";
const Navbar = ({SetShowLogin}) => {


  const [isopen,setisopen]=useState(false);
  const openmenu=()=>{
    setisopen(!isopen)
    // console.log("hello");
    // alert("hello")
  }
  const [menu,setmenu]=useState("home");
  const SetShowLogin1=()=>{
    console.log("hello");
    SetShowLogin(true);
  }
  
  return (
    <div className="navbar">
      <h2><i className="fa-solid fa-pot-food">F o o d i</i></h2>
      <ul className="navbar-menu">
         <Link to="/" onClick={()=>{setmenu("home")}}className={menu=="home"?"active":""}>Home</Link>
         <Link to="/Menu" onClick={()=>{setmenu("menu")}} className={menu=="menu"?"active":""}>Menu</Link>
         <Link to="/about-us" onClick={()=>{setmenu("Mobile-app")}} className={menu=="Mobile-app"?"active":""}>About Us</Link>
         <Link to="/Contact-us" onClick={()=>{setmenu("Contact")}} className={menu=="Contact"?"active":""}>Contact Us</Link>
         
       </ul>
       <div className="hello1">
      <i onClick={openmenu} className="fa-solid fa-bars"></i>
      </div>
    <div className="navbar-right">
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
    <div className="cart">
      <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i> </Link>
    <div className="dot"></div>   
    </div>
    <button  onClick={(SetShowLogin1)} className="button">Sign In</button>
    </div>
  )
}

export default Navbar
