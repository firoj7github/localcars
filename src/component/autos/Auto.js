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

    const onlyConditiondata = getUniqueData(all_products, "Transmission");

    

   
    return (
        <div className="auto-all">
            <div className="ad-section mb-5 mt-5">
              
            </div>
            <div className="row  m-0 p-0 ">
              <div className="col-lg-4 filter-section me-4  mb-2">
                <h5 className='fw-bold mt-2 mb-3'>FILTER RESULT</h5>
                {/* condition filter start */}
                <p className='condition m-0'>Transmission</p> 
                <div className='condition-all'>
               
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
                </div>
                 
                 <div></div>
                {/* condition filter close */}
                <p className='condition mt-4'> Price Filter</p> 
                <div>
  <input className='price-filter' type="range" id="volume" name="volume" min="0" max="16" />
  <label for="volume"></label>
</div>
                <p className='condition'> Mileage Filter</p> 
                <div>
  <input className='price-filter' type="range" id="volume" name="volume" min="0" max="11" />
  <label for="volume"></label>
</div>
                <p className='condition'> Year Filter</p> 
                <div>
  <input className='price-filter' type="range" id="volume" name="volume" min="0" max="11" />
  <label for="volume"></label>
</div>


    <p className="condition mt-4 m-0 mb-2">Exterior Color</p>

    <div className="color-all">
      
      <button className='black-button'></button>
      <button className='red-button'></button>
      <button className='yellow-button'></button>
      <button className='green-button'></button>
      <button className='gray-button'></button>
      
      <button className='beguni-button'></button>
      <button className='white-button'></button>
      <button className='purple-button'></button>
      <button className='sky-button'></button>
      <button className='loyol-button'></button>
      
      
      
      
    </div>
               

              </div>
              <div className="col-lg-8  p-0 m-0">
               {
                filterProductsList.map((auto, id)=>{
                    return <AutoShow key={auto.id} 
                    {...auto }
                    
                    
                    />
                })
               }
              </div>
            </div>

        </div>
    )
}

export default Auto
