import React from 'react'
import img1 from"../../../img/2021-ram-3500-big-horn-4x4-crew-cab8-box.jpg"
import img2 from"../../../img/2023-nissan-rogue-sv-awd-4dr-crossover.jpg"
import img3 from"../../../img/2019-jeep-wrangler-unlimited-sahara-leather-navi-cold-weather-active-safety.jpg"
import img4 from"../../../img/2018-bmw-x3-m40i-awd-4dr-suv.jpg"

function NewList() {
    return (
        <div>
          
            <div class="trending-car mt-3">
            <div class="mt-5">
            <h3 className="trending-header"><i class="fa fa-car me-2 text-danger"></i>NEWLY LISTED CARS FOR SALE</h3>
            <p className="trending-para">Check out the newest listings to hit the market.</p>
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

export default NewList