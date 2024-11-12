import React, { useContext, useEffect, useState } from "react";
import { ShopContaxt } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSaller = () => {
  const { products } = useContext(ShopContaxt);
  const [bestSaller, setBestSaller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);

    setBestSaller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className=" my-10">
      <div className=" text-center py-8 text-3xl">
        <Title text1={"BAST"} text2={"SALLER"} />
        <p className="w3/4 m-auto text-gray-600 text-xs sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis
          totam corrupti earum, doloremque neque e
        </p>
      </div>
      {/* Redering Product */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6 ">
        {bestSaller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSaller;
