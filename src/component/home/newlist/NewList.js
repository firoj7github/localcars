import React from 'react'
import img1 from"../../../img/2021-nissan-versa-sv-4dr-car-173199609.jpg"
import img2 from"../../../img/2019-mitsubishi-mirage-g4-es-4dr-car-949074954.jpg"
import img3 from"../../../img/2014-ram-1500-big-horn-crew-cab-pickup-871832008.jpg"
import img4 from"../../../img/2017-ram-promaster-city-cargo-van-tradesman-mi-1132999780.jpg"
import { useFilterContext } from '../../../context/FilterContext'
import NewListShow from './NewListShow'

function NewList() {

  const{ all_products }= useFilterContext();
    return (
        <div>
          
            <div class="trending-car mt-3">
            <div class="mt-5">
            <h3 className="trending-header"><i class="fa fa-car me-2 text-danger"></i>NEWLY LISTED CARS</h3>
            <p className="trending-para">Check out the newest listings to hit the market.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {
                all_products.slice(3,7).map((list,id)=>{
                   return <NewListShow
                    key={list.id}
                    {...list }
                   />
                   
                })
              }

  
</div>
        </div>
        </div>
    )
}

export default NewList