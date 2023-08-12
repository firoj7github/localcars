import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css";
import award from "../../img/image004-removebg-preview.png"
function Footer() {
    return (
        <div>
            <div className="container-fluid p-0 mt-5">
              
         
         <footer className="text-center bg-black text-lg-start text-white">
         <div className="ms-5">
                <h3 className="pt-3">ABOUT LOCALCARZ.COM®</h3>
                <p>For over 5 years, Localcarz.com® has simply been one of the fastest and easiest ways to buy or sell new and used cars online. With millions of vehicles listed from thousands of State-Verified Auto Dealers nationwide, finding your perfect vehicle is a snap. Our goal has always been to make the car buying experience better, faster and more fun! Shopping for your next vehicle on Carsforsale.com® is as easy as search, click and done! Shop millions of new and used cars for sale & find yours.</p>
              </div>
          
           <div className="footer-container  p-4 pb-0">
             
             <section className="">
              
               <div className="row">
                
                 <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                   <h3 className="text-uppercase mb-4 font-weight-bold">
                     Our Company
                   </h3>
                   <p>
                     Localcarz is one of the best car buying and selling website in USA.Find your car in localcarz anytime anywhere.
                   </p>
                 </div>
               
       
                 <hr className="w-100 clearfix d-md-none" />
       
               
                 <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                   <h3 className="text-uppercase mb-4 font-weight-bold">ABOUT</h3>
                   <p>
                     <Link className="text-white text-decoration-none">Home</Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">About Us</Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">Contract Us</Link>
                   </p>
                   
                 </div>
                
       
                 <hr className="w-100 clearfix d-md-none" />
       
                
                 <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                   <h3 className="text-uppercase mb-4 font-weight-bold">
                  RESOURCES
                   </h3>
                   <p>
                     <Link className="text-white text-decoration-none">Find Car Dealers</Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">Vehicle History Report</Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">Free Bill of Sale</Link>
                   </p>
                   
                 </div>
       
                 
                 <hr className="w-100 clearfix d-md-none" />
       
                
                 <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                   <img className="award" src={award} alt=""/>
                 </div>
                
               </div>
              
             </section>
             
       
             <hr className="my-3"/>
       
            
             <section className="p-3 pt-0">
               <div className="row d-flex align-items-center">
                
                 <div className="col-md-7 col-lg-8 text-center text-md-start">
                 
                   <div className="p-3">
                     © 2023 Copyright:
                     <span className="text-white" 
                        > Localcarz.com</span
                       >
                   </div>
                  
                 </div>
                
       
                
                 <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  
                   <Link
                      className="btn btn-outline-light btn-floating m-1"
                    
                      role="button"
                      ><i className="fab fa-facebook-f"></i
                     ></Link>
       
                  
                   <Link
                      className="btn btn-outline-light btn-floating m-1"
                      
                      role="button"
                      ><i className="fab fa-twitter"></i
                     ></Link>
       
                  
                   <Link
                      className="btn btn-outline-light btn-floating m-1"
                      
                      role="button"
                      ><i className="fab fa-google"></i
                     ></Link>
       
                  
                   <Link
                      className="btn btn-outline-light btn-floating m-1"
                     
                      role="button"
                      ><i className="fab fa-instagram"></i
                     ></Link>
                 </div>
                 
               </div>
             </section>
             
           </div>
          
         </footer>
       
       </div>
        </div>
       
 
        
        
       


    )
}

export default Footer;