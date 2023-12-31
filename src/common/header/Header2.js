import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import icon from "../../img/images.png"
import { Link } from 'react-router-dom';
import logo from "../../img/logo.png"


function Header2() {
    return (
    //     
    <nav className="navbar navbar-expand-lg nav-total">
  <div className="container-fluid">
    <a className="navbar-brand navbar-logo" href="#">
      <h1 className="fw-bold">
        <img className="logo" src={logo} alt=""/>
      </h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav responsive-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/autos" className="nav-link" href="#">Autos</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" href="#">News</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" href="#">SEARCH</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" href="#">Favorites</Link>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Recently Added</a>
        </li>
        
        

        
        
      </ul>
      {/* <div className="d-flex service-call">
      
          <img className="service-icon" src={icon}></img>
          <p className="mt-1 fw-bold">
            <span className="call"> 24 Hours</span>
            <br/>
            <span className="number"> Best Service</span>
          </p>
        
      </div> */}
      
    </div>
  </div>
</nav>
    
    )
}

export default Header2
