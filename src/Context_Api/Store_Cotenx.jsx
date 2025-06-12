import { createContext, useEffect, useState } from "react";
import {food_list} from "../assets/assets"
export const StoreContext=createContext(null);
const StoreContextProvider=(proos)=>{
    const [carditem,setcarditem]=useState({});
    const  addtoCart = (itemid) =>{
        if(!carditem[itemid]){
            setcarditem((prev1)=>({...prev1,[itemid]:1}))

        }else{
            setcarditem((prev1)=>({...prev1,[itemid]:prev1[itemid]+1}))
        }
    }
    const removetoCard=(itemid)=>{
        setcarditem((prev1)=>({...prev1,[itemid]:prev1[itemid]-1}))
    }
    useEffect(()=>{
        console.log(carditem,"this is card item");
    },[carditem]);

    
    const contextvalue={
        food_list
        ,carditem
        ,addtoCart
        ,removetoCard,
        setcarditem
    }
    return (
        
        <StoreContext.Provider value={contextvalue}>
        {proos.children}
    </StoreContext.Provider>
    )
}
export default  StoreContextProvider;