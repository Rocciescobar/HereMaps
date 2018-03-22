import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <div className="bg-dark text-white d-flex justify-content-around py-3 fixed-bottom">      
      <span><Link to='/explorer'><i className="far fa-compass text-aqua fa-lg"></i></Link></span>
      <span><Link to='/'><i className="fas fa-map-marker-alt text-aqua fa-lg"></i></Link></span>
      <span><Link to='/profile'><i className="fas fa-user text-aqua fa-lg"></i></Link></span>  
    </div>
  </div>
)
export default Footer