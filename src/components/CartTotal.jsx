import React, { useContext } from "react";
import { ShopContaxt } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delvrey_free, getCartAmount } = useContext(ShopContaxt);
  return (
    <div className=" w-full ">
      <div className=" text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className=" flex flex-col gap-2 mt-2 text-sm">
        <div className=" flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <div className=" flex justify-between">
          <p>Shipping Free</p>
          <p>
            {currency}{delvrey_free}.00
          </p>
        </div>
        <div className=" flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount()===0 ? 0 : getCartAmount()+delvrey_free}.00
          </b>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartTotal;
