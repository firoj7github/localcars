const filterReducer =(state, action)=>{

    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            return{
               ...state,
               filter_products:[...action.payload],
               all_products:[...action.payload]
            };
        case "SINGLE_FILTER_PRODUCT":
            const {item}= action.payload;
            return{
               ...state,
               item:{item},
               
            };
            


            case "Update_Filter_value":
                const {name, value}= action.payload;

                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        [name]:value,
                    }
                };


            case "FILTER_PRODUCTS":
                let {all_products}= state;
                let tempFilterProduct=[...all_products];
                const {condition, trending}= state.filters;
                
                if(condition){
                    tempFilterProduct=tempFilterProduct.filter((curEle)=>{
                       
                        return curEle.condition===condition;
                    })
                    
                }

                return{
                   ...state,
                   filter_products:tempFilterProduct,
                   

                }


               
               
               
            
           
    
        default:
            return state;
    }

}

export default filterReducer;