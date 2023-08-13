
const ProductReducer= (state, action)=>{

  switch (action.type) {
    case "SET_LOADING":
      
    return{
        ...state,
        isLoading: true,
    };

    case "SET_API_DATA":

    const trendingData = action.payload.filter((curEle)=>{
      return curEle.trending === true;
      
    });
    console.log(trendingData);

    return{
      ...state,
      isLoading: false,
      products: action.payload,
      trendingProducts:trendingData,
    }


    case "API_ERROR":

    return{
        ...state,
        isLoading: false,
        isError : true
    }
       
  
    default:
        return state;
  }
   

}
export default ProductReducer;