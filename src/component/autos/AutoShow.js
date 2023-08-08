import React from 'react'

function AutoShow(auto) {
    console.log(auto);
    
    const {name, img}=auto;
    return (
        
             <div className="card">
     
      <div className="card-body">
        <img src={img} alt="img"/>
        <h5 className="card-title">{name}</h5>
        
      </div>
      
    </div>

       
    )
}

export default AutoShow
