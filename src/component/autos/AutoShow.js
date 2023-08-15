import React, { useContext, useState } from 'react'
import { PiEngineFill } from 'react-icons/pi';
import { CiDumbbell } from 'react-icons/ci';
import {SlCalender } from 'react-icons/sl';
// import {IoIosCall} from 'react-icons/io';
// import {BsFillChatFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {NavLink } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';



function AutoShow(auto) {

  const{setSingle}= useProductContext();
  
  const handlesingle=((item)=>{
    setSingle(item);
  })
  
  // const handlesingle=(item)=>{
  //   setSingle(item);
  // }

 

  
   
    
    const {title,deller, location, img, drivetrains, model, body, price, area, engine}=auto;
    return (
      <div>

       
          {/* cart option start */}
        <NavLink to="/auto" onClick={()=>handlesingle(auto)} className="card total-card">
     
     <div className="card-body">
       <div className="row">
         <div className="col-lg-5  col-sm-12">
           <img className="car-img" src={img} alt=""/>
         </div>
         <div className="col-lg-7 col-sm-12">
         <h4 className='fw-bold m-0 mb-1 tit'>{title}</h4>
           <p className='m-0 mb-1'>{drivetrains} {model} {body}</p>
           <div className='row'>
             <div className="col-lg-8">
             <h3 className="price m-0 mb-1"> <sup className="doller ">$</sup> <span className="fw-bold  me-2">{price}</span> </h3>
           <h6> <span className="area">{area}</span> miles</h6>


           <div className='row show-control'>
             <div className="col-lg-4 show-1 d-flex">
               <div>
               <h6 className="text-danger"><PiEngineFill></PiEngineFill></h6>
               </div>
               <div className="border-start ms-1 ps-1 part-first">
                 <p className="engine m-0 text-danger">Engine:</p>
                 <p className="engine">{engine}</p>
               </div>
             </div>
             <div className="col-lg-4 show-2 d-flex">
             <div>
               <h6 className="text-danger"><CiDumbbell/></h6>
               </div>
               <div className="border-start ms-1 ps-1 part-first">
                 <p className="engine m-0 text-danger">Drivetrain:</p>
                 <p className="engine">{drivetrains}</p>
               </div>
             </div>
             <div className="col-lg-4 show-3 d-flex">
             <div>
               <h6 className="text-danger ms-3"><SlCalender/></h6>
               </div>
               <div className="border-start ms-1 ps-1 part-first">
                 <p className="engine m-0 text-danger">Days:</p>
                 <p className="engine">5</p>
               </div>
             </div>
            
           </div>
             </div>
             <div className="col-lg-5"></div>
           </div>
           
           
           
         </div>
        
       </div>
       
     </div>

     <div class="card-footer">
     <small class="text-muted">
       <div className='d-flex justify-content-between'>
        <div>
         <h6 className="text-success">{deller}</h6>
         <p className="m-0 ms-1">{location}</p>
        </div>
        <div>
         {/* <button className='call-button '>< IoIosCall/><span className='ms-1'>Call</span></button>
         <button className="text-button ms-2">< BsFillChatFill/><span className='ms-1'>Text</span></button> */}
         <button className="email-button ms-2"><span className='ms-1'>Check Availability</span></button>
        </div>
       </div>
     </small>
   </div>
     
   </NavLink>

   {/* cart option close */}
       

        

    
      </div>
        
             

       
    )
}

export default AutoShow
