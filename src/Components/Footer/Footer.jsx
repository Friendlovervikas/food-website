import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>
          We deliver your favorite meals right to your doorstep, fresh and fast. 
          Your satisfaction is our priority!
        </p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/offers">Offers</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} FoodDeliveryApp. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
