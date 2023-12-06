import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <Link className='h4' to='/about'>About Us</Link>
        </div>

        <div className="footer-col">
          <Link className='h4' to='/terms'>Terms & Conditions</Link>
        </div>

        <div className="footer-col">
          <Link className='h4' to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-col">
          <Link className='h4' to="/faq">FAQ</Link>
        </div>

        <div className="footer-col">
          <h4 className='h4'>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
