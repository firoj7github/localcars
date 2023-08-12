import React from 'react'
import "./Trending.css"
import img1 from"../../../img/2014-gmc-sierra-1500-sle-crew-cab-pickup-1619638028.jpg"
import img2 from"../../../img/2018-jeep-compass-trailhawk-sport-utility-164778574.jpg"
import img3 from"../../../img/2019-chevrolet-equinox-ls-sport-utility-2107783355.jpg"
import img4 from"../../../img/2023-mitsubishi-outlander-es-sport-utility-1416567842.jpg"

function Trending() {
    return (
        <div>
            
            
            <div class="trending-car mt-3">
            <div class="mt-5">
            <h3 className="trending-header"><i class="fa fa-fire me-2 text-danger"></i>TRENDING CAR NEWS & EXPERT REVIEWS</h3>
            <p className="trending-para">Stay informed with our expert, in-depth car reviews and breaking auto news.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
  <div className="col">
    <div className="card h-100">
      <img src={img1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">2014-gmc-sierra-1500-sle-crew-cab-pickup</h5>
        <p className="card-text">KBB.com Brand Image Awards. Scores 23 Highway MPG and 16 City MPG! This GMC Sierra 1500 delivers a Gas/Ethanol V8 5.3L/325 engine powering this Automatic transmission.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img2}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">2018-jeep-compass-trailhawk-sport</h5>
        <p className="card-text">Scores 25 Highway MPG and 17 City MPG! This Ram 1500 Classic delivers a Regular Unleaded V-6 3.6 L/220 engine powering this Automatic transmission.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img3}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">2019-chevrolet-equinox-ls-sport</h5>
        <p className="card-text">Chevrolet Brand Image Awards. Scores 23 Highway MPG and 16 City MPG! This GMC Sierra 1500 delivers a Gas/Ethanol V8 5.3L/325 engine powering this Automatic transmission.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img4}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">2023-mitsubishi-outlander-es-spor</h5>
        <p className="card-text">Jeep 25 Highway MPG and 17 City MPG! This Ram 1500 Classic delivers a Regular Unleaded V-6 3.6 L/220 engine powering this Automatic transmission.</p>
      </div>
      
    </div>
  </div>
</div>
        </div>
        </div>
        
    )
}

export default Trending