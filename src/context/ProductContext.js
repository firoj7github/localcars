import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/productReducer"


const AppContext= createContext();
const API="http://localhost:3000/product.json";

const initialState={
    isLoading: false,
    isError: false,
    products:[],
    trendingProducts:[],
}


const AppProvider=({children})=>{

    const [single, setSingle]= useState({});
   

    const [state, dispatch]= useReducer(reducer, initialState);

    const getProducts= async(url)=>{
        dispatch({type:"SET_LOADING"});
        try {
            const res =await axios.get(url);
            const products= await res.data;
            dispatch({type:"SET_API_DATA", payload: products})
    
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    }
    useEffect(()=> {
        getProducts(API);
       },[])
    return ( <AppContext.Provider value={{ 
        ...state,
        single,
        setSingle

    
    }}>
        {children}
    </AppContext.Provider>
  );
};

// custom hooks

const useProductContext=()=>{
    return useContext(AppContext);
}


export {AppProvider, AppContext, useProductContext};