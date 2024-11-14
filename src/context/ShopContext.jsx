import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContaxt = createContext();

const ShopContaxtProvider = (props)=>{

    const currency = "$";
    const delvrey_free = "10";
    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);

    const value = {
        products,currency,delvrey_free,search,setSearch,showSearch,setShowSearch

    }
    return (
        <ShopContaxt.Provider value={value}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopContaxtProvider;