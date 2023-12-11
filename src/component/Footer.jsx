import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-2">
          <div className="social-icons">
            <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link to="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </Link> 
            <p className="m-0 text-center">
          &copy; Twerple
        </p>
            <Link to="/Privacy">Privacy Policy</Link>
          </div>
        </div>
    </footer>
  );
}

export default Footer;

