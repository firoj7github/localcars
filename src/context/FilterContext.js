
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducers/filterReducer"



const FilterContext= createContext();

const initialState={
    filter_products:[],
    all_products:[],
    filters:{
       condition:"all",
    },
    item:{
        
    }
    
}

export const FilterContextProvider=({children})=>{

    const {products}= useProductContext();
    
 

    const [state, dispatch]= useReducer(reducer, initialState);

    // update the filters values

    const updateFilterValue=(event)=>{
        let name= event.target.name;
        let value = event.target.value;

        return dispatch({type:"Update_Filter_value", payload:{name, value}});

    }

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
       
    
      },[products, state.filters])



  useEffect(()=>{
    dispatch({type:"FILTER_PRODUCTS"})
    dispatch({type:"TRENDING_PRODUCTS"})
    dispatch({type:"LOAD_FILTER_PRODUCT", payload:products})

  },[products])


  

   

    return (
        <FilterContext.Provider value={{ 
            ...state,
            updateFilterValue,
           
           
           
            }}>
            {children}
        </FilterContext.Provider>
    );

};

export const useFilterContext=()=>{
    return useContext(FilterContext);
};