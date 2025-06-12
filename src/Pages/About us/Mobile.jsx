import React from "react";
import "./Mobile.css";

const Mobile = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <p>
          Welcome to <strong>Foodly</strong>, your trusted partner for delivering delicious meals 
          right to your doorstep. Founded with the vision of connecting people with their favorite 
          restaurants, we make food delivery convenient, reliable, and fast.
        </p>
        <p>
          At Foodly, we are passionate about food and dedicated to serving you. Whether you're 
          craving local delights, international cuisines, or comforting homemade meals, we've 
          got you covered. Our mission is to make every meal memorable and every experience seamless.
        </p>
        <h2>What We Stand For</h2>
        <ul>
          <li><strong>Quality:</strong> Partnering with top-rated restaurants and chefs.</li>
          <li><strong>Convenience:</strong> Easy ordering process through our app and website.</li>
          <li><strong>Speed:</strong> Ensuring timely deliveries, every time.</li>
          <li><strong>Community:</strong> Supporting local businesses and fostering connections.</li>
        </ul>
        <h2>Our Journey</h2>
        <p>
          Foodly started as a small idea to make great food accessible to everyone. Today, 
          we are proud to serve thousands of customers across multiple cities. Our team 
          of dedicated professionals works tirelessly to enhance your food delivery experience.
        </p>
        <h2>Join Us</h2>
        <p>
          Be part of the Foodly family! Whether you're a restaurant looking to expand 
          your reach, a delivery partner eager to explore opportunities, or a customer 
          seeking delightful meals, we welcome you to our journey.
        </p>
      </section>
      <footer className="about-us-footer">
        <p>Contact us: support@foodly.com | Follow us on social media: @Foodly</p>
      </footer>
    </div>
  );
};

export default Mobile;
