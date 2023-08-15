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
                <p>LocalCarz.com is an independent company that works side by side with consumers, sellers, and dealers for transparency and fairness in the marketplace.Local Carz Vehicle products are based only on information supplied to Local Carz. Local Carz does not have the complete history of every vehicle. Use the Local Carz search as one important tool, along with a vehicle inspection and test drive, to make a better decision about your next used car.</p>
              </div>
          
           <div className="footer-container  p-4 pb-0">
             
             <section className="">
              
               <div className="row">
                
                 <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                 <h5 className="text-uppercase mb-4 font-weight-bold">ABOUT CLASSIFIEDS</h5>
                 <p>
                     <Link className="text-white text-decoration-none">Home</Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">Search</Link>
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
                   <h5 className="text-uppercase mb-4 font-weight-bold">HELP & CONTRACT</h5>
                   <p>
                     <Link className="text-white text-decoration-none">News</Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">Favorites</Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">Terms of Use</Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">Privacy Policy</Link>
                   </p>
                   
                 </div>
                
       
                 <hr className="w-100 clearfix d-md-none" />
       
                
                 <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                   <h5 className="text-uppercase mb-4 font-weight-bold">
                   MORE HELPFUL LINKS
                   </h5>
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
       
                
                 <div className="col-md-4 col-lg-2 col-xl-3 mx-auto mt-3">
                 <h5 className="text-uppercase mb-4 font-weight-bold">
                 RESOURCES
                   </h5>

                   <p>
                     <Link className="text-white text-decoration-none"></Link>
                   </p>
                   <p>
                     <Link className="text-white text-decoration-none">Best Cars To Buy</Link>
                   </p>
                  
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
                     to="https://www.facebook.com/localcarzcom"
                      role="button"
                      target="_blank"
                      ><i className="fab fa-facebook-f"></i
                     ></Link>
       
                  
                   <Link
                      className="btn btn-outline-light btn-floating m-1"
                      to="https://twitter.com/i/flow/login?redirect_after_login=%2Flocalcarz"
                      target="_blank"
                      role="button"
                      ><i className="fab fa-twitter"></i
                     ></Link>
       
                  
                   <Link
                      className="btn btn-outline-light btn-floating m-1"
                      to="https://www.pinterest.com/localcarz/?invite_code=3bb629501b8949fe870a6f680a91d14f&sender=1033717058128452304"
                      target="_blank"
                      role="button"
                      ><i className="fab fa-pinterest"></i
                     ></Link>
       
                  
                   <Link
                      className="btn btn-outline-light btn-floating m-1"
                      to="https://www.instagram.com/localcarzcom/?fbclid=IwAR2eN64mKf473ym7PtmDIpvVM-ZZECE9n0qtIIO2gNMg3EA6IdKonpl7h-c"
                      target="_blank"
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