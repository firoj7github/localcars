import React from 'react'
import { useFilterContext } from '../../context/FilterContext'
import AutoShow from './AutoShow';

function Auto() {
    const{ filter_products}= useFilterContext();
   
    return (
        <div className="container">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-8">
               {
                filter_products.map((auto, id)=>{
                    return <AutoShow key={auto.id} {...auto}/>
                })
               }
              </div>
            </div>

        </div>
    )
}

export default Auto
