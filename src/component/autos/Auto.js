import React, { useEffect, useState } from 'react'
import { useFilterContext } from '../../context/FilterContext'
import AutoShow from './AutoShow';
import "./Autos.css"


function Auto() {

   
    const{ filter_products, 
      all_products,
      filters:{condition},
      updateFilterValue,
    }= useFilterContext();
    console.log(filter_products)




    const initialProducts =  useFilterContext();
  const searchParams = new URLSearchParams(document.location.search);
  const category = searchParams.get("category") || "";
  const model = searchParams.get("model") || "";
  const zipCode = searchParams.get("zipCode") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const [filterProductsList, setFilterProductsList] = useState([...initialProducts.filter_products]);

  useEffect(() => {
    async function getProducts() {
      let filter_products = [...initialProducts.filter_products]; 
      if (category) {
        filter_products = filter_products.filter((prod) => {
          return prod.category === category;
        });
      } 
      if (model) {
        filter_products = filter_products.filter((prod) => {
          return prod.model === model;
        });
      } 
      if (zipCode) {
        filter_products = filter_products.filter((prod) => {
          return prod.zipCode === zipCode;
        });
      } 
      if (minPrice) { 
        filter_products = filter_products.filter((prod) => { 
          return Number(prod.price) > Number(minPrice);
        });
      } 
      if (maxPrice) { 
        filter_products = filter_products.filter((prod) => {
          return Number(prod.price) < Number(maxPrice); 
        });
      } 
      setFilterProductsList([]);
      setFilterProductsList(filter_products);
    }
    getProducts();
  }, [initialProducts]);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const getUniqueData=(data, property)=>{
    let newCondition= data.map((curElement)=>{
        return curElement[property];
    });
      return  newCondition=["all", ...new Set(newCondition)]
       
    }

    // we need unique condition

    const onlyConditiondata = getUniqueData(all_products, "condition");

    

   
    return (
        <div className="auto-all">
            <div className="ad-section mb-5 mt-5">
              
            </div>
            <div className="row  m-0 p-0 ">
              <div className="col-lg-4 filter-section me-4  mb-2">
                {/* condition filter start */}
                 <p className='condition'>Condition</p> 
                 <div className="d-flex flex-column p-2">
                  {
                    onlyConditiondata.map((curCon, index)=>{
                        return <button
                        key={index}
                        type='radio'
                        name="condition"
                        value={curCon}
                        onClick={updateFilterValue}
                        className="condition-button"

                        >
                          {curCon}
                        </button>
                    })
                  }
                 </div>
                 <div></div>
                {/* condition filter close */}

              </div>
              <div className="col-lg-8  p-0 m-0">
               {
                filterProductsList.map((auto, id)=>{
                    return <AutoShow key={auto.id} {...auto}/>
                })
               }
              </div>
            </div>

        </div>
    )
}

export default Auto
