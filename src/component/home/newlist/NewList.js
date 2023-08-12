import React from 'react'
import img1 from"../../../img/2021-nissan-versa-sv-4dr-car-173199609.jpg"
import img2 from"../../../img/2019-mitsubishi-mirage-g4-es-4dr-car-949074954.jpg"
import img3 from"../../../img/2014-ram-1500-big-horn-crew-cab-pickup-871832008.jpg"
import img4 from"../../../img/2017-ram-promaster-city-cargo-van-tradesman-mi-1132999780.jpg"

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
        <h5 className="card-title">2021-nissan-versa-sv-4dr-car</h5>
        <p className="card-text">Boasts 40 Highway MPG and 32 City MPG! This Nissan Versa boasts a Regular Unleaded I-4 1.6 L/98 engine powering this Variable transmission.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img2}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">2019-mitsubishi-mirage-g4-es-4dr</h5>
        <p className="card-text">Scores 41 Highway MPG and 35 City MPG! This Mitsubishi Mirage G4 delivers a Regular Unleaded I-3 1.2 L/73 engine powering this Variable transmission.</p>
      </div>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img3}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">2014-ram-1500-big-horn-crew-cab-pickup</h5>
        <p className="card-text">Boasts 21 Highway MPG and 15 City MPG! This Ram 1500 boasts a Regular Unleaded V-8 5.7 L/345 engine powering this Automatic transmission.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img4}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">2017-ram-promaster-city-cargo-van-tradesman</h5>
        <p className="card-text">Scores 41 Highway MPG and 35 City MPG! This Mitsubishi Mirage G4 delivers a Regular Unleaded I-3 1.2 L/73 engine powering this Variable transmission.</p>
      </div>
      
    </div>
  </div>
</div>
        </div>
        </div>
    )
}

export default NewList