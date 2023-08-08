import React from 'react'
import "./Header.css"
import Button from 'react-bootstrap/Button';

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
        <button className="header-button ">Become a Dealer</button>
       

       </nav>
    )
}

export default Header
