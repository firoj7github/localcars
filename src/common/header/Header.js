import React from 'react'
import "./Header.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Header() {
    return (
       <nav className="nav-first">
        <ul>
            <li className="about-item">About</li>
            <li className="faq-item">FAQS</li>
            <li className='login-item'>Login</li>
            <li>Register</li>
            <li>Profile</li>
           
        </ul>
        <Link to="http://localcarz.azimdenim.com/dealer/register?fbclid=IwAR3k6AxxuU5XXUt6a_kb3IWLBHeJUXvq_TEC-3JUpxdGtcuDPbEUo-4HqrY" target='_blank' className="header-button text-decoration-none pt-2">Become a Dealer</Link>
       

       </nav>
    )
}

export default Header
