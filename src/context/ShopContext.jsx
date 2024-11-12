import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContaxt = createContext();

const ShopContaxtProvider = (props)=>{

    const currency = "$";
    const delvrey_free = "10";

    const value = {
        products,currency,delvrey_free

    }
    return (
        <ShopContaxt.Provider value={value}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopContaxtProvider;