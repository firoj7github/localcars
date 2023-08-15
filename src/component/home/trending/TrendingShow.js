import React from 'react'
import { NavLink } from 'react-router-dom';
import { useProductContext } from '../../../context/ProductContext';

function TrendingShow(trend) {

    const{setSingle}= useProductContext();
  
  const handlesingle=((item)=>{
    setSingle(item);
  })
    const {img, des, title, price, mileage } = trend;
    return (
        <NavLink to="/auto" onClick={()=>handlesingle(trend)} className="col text-decoration-none">
        <div className="card h-100 ">
          <img src={img} height="210px" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{des}</p>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-bold'>${price}</h6>
                <h6 className='fw-bold'>{mileage} Miles</h6>
            </div>
          </div>
          
        </div>
      </NavLink>
    )
}

export default TrendingShow
