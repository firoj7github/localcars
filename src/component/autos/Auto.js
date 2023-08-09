import React from 'react'
import { useFilterContext } from '../../context/FilterContext'
import AutoShow from './AutoShow';
import "./Autos.css"


function Auto() {
    const{ filter_products, all_products}= useFilterContext();
    
    const getUniqueData=(data, property)=>{
    let newCondition= data.map((curElement)=>{
        return curElement[property];
    });
        newCondition=["all", ...new Set(newCondition)]
        console.log(newCondition);
    }

    // we need unique condition

    const onlyConditiondata = getUniqueData(all_products, "condition");

   
    return (
        <div className="auto-all">
            <div className="ad-section mb-5 mt-5">
              
            </div>
            <div className="row  m-0 p-0 ms-5">
              <div className="col-lg-4 filter-section me-4  mb-2">
                {/* condition filter start */}
                 <p className='condition'>Condition</p> 
                 <div></div>
                {/* condition filter close */}

              </div>
              <div className="col-lg-8 p-0 m-0">
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
