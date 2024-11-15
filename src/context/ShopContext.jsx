import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContaxt = createContext();

const ShopContaxtProvider = (props) => {
  const currency = "$";
  const delvrey_free = "10";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if(!size){
        toast.error('Select Product Size !')
        return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = ()=>{
    let totalCount = 0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
          try{
            if(cartItems[items][item]>0){
                totalCount +=cartItems[items][item];
            }
          }catch(error){

          }
        }
    }
    return totalCount;
  }

  const updateQuanlity = (itemId,size,quantity) =>{

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  const getCartAmount = ()=>{
     
    let totalAmount = 0;

    for (const items in cartItems) {

      let iteminfo = products.find((product)=>product._id===items);
         for(const item in cartItems[items]){
           try {
             if (cartItems[items][item]>0) {
                 totalAmount += iteminfo.price* cartItems[items][item];
             }
            
           } catch (error) {
            
           }
         }
      
    }
    return totalAmount;



  }


  const value = {
    products,
    currency,
    delvrey_free,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuanlity,
    getCartAmount,
    navigate
  };
  return (
    <ShopContaxt.Provider value={value}>{props.children}</ShopContaxt.Provider>
  );
};

export default ShopContaxtProvider;
