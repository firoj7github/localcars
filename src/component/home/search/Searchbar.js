import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import "./Searchbar.css";
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
// import { useFilterContext } from '../../../context/FilterContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const CATEGORY_API = "http://localhost:3000/productCategory.json";
const MODEL_API = "http://localhost:3000/productModel.json";


let initialFilterData = {
  "category": "",
  "model": "",
  "minPrice":"",
  "maxPrice":"",
  "zipCode": ""
}; 



function Searchbar() {
//   const [value, setValue]=useState(null);
//  console.log(value);
  
   
//   const{ all_products}= useFilterContext();
    
//   const getUniqueModel=(data, property)=>{
//   let newModel= data.map((curElement)=>

//   {
    
//     if(curElement.category === value){
//       return curElement[property];
//     }else{
//       // return curElement[property];
//     }
      
//   });
//   newModel=[...new Set(newModel)]
//       console.log(newModel);
//   }

//   // we need unique condition

//   const onlyConditiondata = getUniqueModel(all_products, "model");



    const[showtab, setShowtab]= useState(1);
 
  const handletab = (e)=>{
   setShowtab(e);
     }


     const makes = [
        { value: 'item', label: 'item' },
        { value: 'item', label: 'item' },
        { value: 'itema', label: 'item' }
      ]
    //  const models = [
    //     { value: 'i5', label: 'i5' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]
     const prices = [
        { value: 'item', label: 'item' },
        { value: 'item', label: 'item' },
        { value: 'item', label: 'item' }
      ]
    
     const area = [
        { value: 'item', label: 'item' },
        { value: 'item', label: 'item' },
        { value: 'item', label: 'item' }
      ]

      // codeeeeeeeeeeeeee
      const navigate = useNavigate();
 
  const [filterData, setFilterData] = useState(initialFilterData);
  const [categories, setCategories] = useState([]);
  const [models, setModels] = useState([]);
  const [modelByCategory, setModelByCategory] = useState([]);
  const refModelByCategory = useRef();
  // const [zipCode, setZipCode] = useState([]);
  // const [minPrice, setMinPrice] = useState([]);
  // const [maxPrice, serMaxPrice] = useState([]);

  const getModels = async(url) => { 
    try {
      const res = await axios.get(url); 
      let newModelArr = [];
      const models =  await res.data; 
      await models.map((item) => {
        const newObject = {
          "id": item.id,
          "category_id": item.category_id,
          "value": item.name,
          "label": item.name
        };
        newModelArr.push(newObject);
      });

      setModels(newModelArr);
      setModelByCategory(newModelArr);
      // console.log("new model", res.data);

    } catch (error) {
      return error;
    }
  }
  const getCategories = async(url) => { 
    try {
      const res = await axios.get(url); 
      let newArr = [];
      const categories =  await res.data; 
      await categories.map((item) => {
        const newObject = {
          "id": item.id,
          "value": item.name,
          "label": item.name
        };
        newArr.push(newObject);
      });

      setCategories(newArr);
      console.log("first", res.data);

    } catch (error) {
      return error;
    }
  }
  useEffect(()=> {
    getCategories(CATEGORY_API);
    getModels(MODEL_API);
   },[])
  const handleFilterChange = (data, e) => { 
    let eValue = e.value; 
    // filterData[data] = eValue.replaceAll(/$/g,"") || '';
    if(data === 'minPrice' || data === 'maxPrice') {
      filterData[data] = e.value.replace("$","") || '';
      return;
    }
    filterData[data] = eValue || '';
    if(data === "category"){ 
      var filterModels = models.filter(function(item){
        return item.category_id === e.id;
      })
      setModelByCategory(filterModels);  
      refModelByCategory.current.setValue("");
    }

  }
 const handleSearchCar = () => {
  console.log("filterData",filterData); 
  let url = "";

  // Object.keys(filterData).forEach

  
  for (const [key, value] of Object.entries(filterData)) {
    if(key === "category"){
      url += (`?${key}=${value}`);
    }else {
      if(value) {
        url += (`&${key}=${value}`)
      }
    }
  }
  navigate('/autos'+ url);
  // route push here 

  console.log("url", url);
 }


 const minPrice = [
  { value: "$1000", label: "$1000" },
  { value: "$2000", label: "$2000" },
  { value: "$3000", label: "$3000" },
  { value: "$4000", label: "$4000" },
  { value: "$5000", label: "$5000" },
  { value: "$6000", label: "$6000" },
  { value: "$8000", label: "$8000" },
  { value: "$10000", label: "$10000" },
  { value: "$12000", label: "$12000" },
  { value: "$15000", label: "$15000" },
  { value: "$20000", label: "$20000" },
  { value: "$25000", label: "$25000" },
  { value: "$30000", label: "$30000" },
  { value: "$40000", label: "$40000" },
];
const maxPrice = [
  { value: "$1000", label: "$1000" },
  { value: "$2000", label: "$2000" },
  { value: "$3000", label: "$3000" },
  { value: "$4000", label: "$4000" },
  { value: "$5000", label: "$5000" },
  { value: "$6000", label: "$6000" },
  { value: "$8000", label: "$8000" },
  { value: "$10000", label: "$10000" },
  { value: "$12000", label: "$12000" },
  { value: "$15000", label: "$15000" },
  { value: "$20000", label: "$20000" },
  { value: "$25000", label: "$25000" },
  { value: "$30000", label: "$30000" },
  { value: "$40000", label: "$40000" },
  { value: "$50000", label: "$50000" },
  { value: "$75000", label: "$75000" },
];
    
    return (
        <div className="dropdown-manage">
            
            
            <div className="col-sm-12  dropdown-button"> 
            <ul className="nav  mb-3 mt-1" id="pills-tab" role="tablist">
           <li className="nav-item" role="presentation">
           <button className= {showtab===1? "nav-link nav-manages active": "nav-link nav-manages" }  onClick={()=>handletab(1)}>Make/Model</button>
           </li>
           <li className="nav-item" role="presentation">
             <button className={ showtab===2 ? "nav-link active ms-1": "nav-link nav-manage ms-1"}  onClick={()=>handletab(2)}>Body Style</button>
           </li>
 
           <li className="nav-item" role="presentation">
             <button className={ showtab===3 ? "nav-link active ms-1": "nav-link nav-manage ms-1"}  onClick={()=>handletab(3)}>Payment</button>
           </li>
       </ul>


       <div className="tab-content text-dark" id="pills-tabContent">
 
    {/* start tab 1*/} 
            
            
            <form  className= { showtab===1 ? "tab-pane  show active":"tab-pane fade show"} > 
            <div className="d-flex orginal mt-2">
            {/* <select className=" select-manage ms-3" placeholder="All Makes"  
            onChange={(e)=>setValue(e.target.value)}   
            
         
            >
              <option>acura</option>
              <option>achhh</option>
              <option>lcura</option>
              <option>kcura</option>
              <option>ocura</option>
            </select> */}


             <Select
                className="select select-manage ms-3"
                placeholder="All Makes"
                options={categories}
                onChange={(e) => handleFilterChange('category', e)}
              />
              
               
           
              <Select 
              isDisabled={!filterData.category}
              ref={refModelByCategory}
              options={modelByCategory} 
                onChange={(e) => handleFilterChange('model', e)}
              className=" select-manage ms-3" placeholder="All Models"  />
          
          
          
          
          <div className="d-flex">
          <Select className="select-manage2  ms-3" placeholder="Min Price" 
          options={minPrice}
          onChange={(e) => handleFilterChange('minPrice', e)}
          />
          <p className="ms-4 mt-2">TO</p>
          <Select className="select-manage2  ms-4" placeholder="Max Price" 
          options={maxPrice} 
          onChange={(e) => handleFilterChange('maxPrice', e)} 
          />
          </div>
        
      </div>
            
            
            
            <div className="d-flex orginal2">
            <div className="d-flex">
            <Select className="select-manage2 ms-3 " placeholder="50 miles" options={area} />
            <p className="ms-4 mt-2">OF</p>
          <Select disablead className="select-manage2 ms-4" placeholder="Zip Code" options={area} />
              </div>
            
          <Button className="ms-4 select-button" variant="danger" onClick={handleSearchCar}><h5><i className="fa fa-search me-2 fs-5"></i>FIND YOURS</h5></Button>
          
            </div>
            
          

           </form>
    {/* close tab 1*/} 
 
 
          {/* start tab 2*/} 
           <form  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} > 
           
           <div className="d-flex orginal mt-2">
            <Select className=" select-manage ms-3" placeholder="All Body Style" options={makes} />
          <Select className=" select-manage ms-3" placeholder="Max Mileage" options={models} />
          
          
          <div className="d-flex">
          <Select className="select-manage2  ms-3" placeholder="Min Price" options={prices} />
          <p className="ms-4 mt-2">TO</p>
          <Select className="select-manage2  ms-4" placeholder="Max Price" options={prices} />
          </div>
          </div>
        
        
        <div className="d-flex orginal2">
            <Select className="select-manage2 ms-3 " placeholder="250 Miles" options={makes} />
            <p className="ms-4 mt-2">OF</p>
          <Select className="select-manage2 ms-4" placeholder="Zip Code" options={models} />
          <Button className="ms-4 select-button" variant="danger"><h5><i className="fa fa-search me-2 fs-5"></i>FIND YOURS</h5></Button>
          
            </div>
           </form>
           {/* close tab 2*/} 
 
 
            {/* start tab 3*/} 
            <form  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} > 
             <div className="d-flex orginal mt-2">
            <Select className=" select-manage ms-3" placeholder="All Makes" options={makes} />
          <Select className=" select-manage ms-3" placeholder="All Models" options={models} />
          
          
          <div className="d-flex">
          <Select className="select-manage2  ms-3" placeholder="Min Price" options={prices} />
          <p className="ms-4 mt-2">TO</p>
          <Select className="select-manage2  ms-4" placeholder="Max Price" options={prices} />
          </div>
        
          
        
          
            </div>
            <div className="d-flex orginal2">
            <Select className="select-manage2 ms-3 " placeholder="250 Miles" options={makes} />
            <p className="ms-4 mt-2">OF</p>
          <Select className="select-manage2 ms-4" placeholder="Zip Code" options={models} />
          <Button className="ms-4 select-button" variant="danger"><h5><i className="fa fa-search me-2 fs-5"></i>FIND YOURS</h5></Button>
          
            </div>
           </form>
           {/* close tab 3*/} 
 
 
      </div>
            
            </div>









               
                
            
               

           </div> 
        
    )
}

export default Searchbar
