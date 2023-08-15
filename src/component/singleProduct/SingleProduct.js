import React, { useContext } from 'react'
import "./SingleProduct.css"
import logo from "../../img/thumbnail-663.jpg"

import { useProductContext } from '../../context/ProductContext';

function SingleProduct() {

  const{single}= useProductContext();
  console.log(single);

    
  
    return (
        <>
        <div className="single-header">
          <div className="row single-row">
            <div className="col-lg-7 single-first">
              <h3 className="fw-bold p-2 ms-3 m-0  ">{single.title}</h3>
              <p className="p-0 ms-4">{single.category} {single.model} {single.drivetrains} . <span className="fw-bold">
              {single.mileage}</span> Miles</p>
            </div>
            <div className="col-lg-4 ms-3">
              <div className="d-flex">
                <div className='mt-1'>
                <img src={logo} alt="deller-logo"></img>
                </div>
                <div className="mt-4 ms-3">
                  <h6 className="m-0 mb-1">SKCO Automotive</h6>
                  <p>Mobile, Alabama</p>
                    
                </div>
               
              </div>
             
              
            </div>
          </div>

          {/* Second part */}

          <div className="row">
            <div className='col-lg-7 slider-img-section'>
              <img src={single.img}></img>
            </div>
            <div className="col-lg-5"></div>
          </div>
          
        </div>
        </>
    )
}

export default SingleProduct
