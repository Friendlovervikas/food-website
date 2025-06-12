import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home";
import Login from "./Components/LoginPopup/login";
import Navbar from "./Components/Navbar/Navbar";
import Mobile from "./Pages/About us/Mobile/";
import Cart from "./Pages/Cart/Cart";
import Contact from './Pages/Contact/Contact';
import Menu from './Pages/Menu/Menu';
import PlaceOrder from './Pages/Place_Order/PlaceOrder';

const App = () => {
  const [ShowLogin, SetShowLogin] = useState(false);

  return (
    <>
      {/* Show Login Popup */}
      {ShowLogin && <Login SetShowLogin={SetShowLogin} />}

      {/* Main Content */}
      <div className="main">
        {/* Pass SetShowLogin to Navbar so it can trigger the popup */}
        <Navbar SetShowLogin={SetShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/about-us" element={<Mobile />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
