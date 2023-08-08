import React from 'react'
import "./Trending.css"
import img1 from"../../../img/hero-61-768x461.jpg"
import img2 from"../../../img/hero-50-768x461.jpg"
import img3 from"../../../img/hero-43-768x461.jpg"
import img4 from"../../../img/hero-36-768x461.jpg"

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
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img2}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img3}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img4}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
</div>
        </div>
        </div>
        
    )
}

export default Trending