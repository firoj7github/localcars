import { createContext, useState } from "react";



export const SingleContext = createContext(null);



export const SingleProvider=({ children })=> {
    const [single, setSingle]= useState({});
   
    
    return (
        <SingleContext.Provider value={{
            single,
            setSingle
        }}>
         {children}
        </SingleContext.Provider>
    )
}

export default SingleProvider;