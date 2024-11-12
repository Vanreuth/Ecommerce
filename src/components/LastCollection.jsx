import React, { useContext, useEffect, useState } from 'react'
import { ShopContaxt } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LastCollection = () => {
  const {products } = useContext(ShopContaxt);
  const [latestProduct, setLatestProduct] = useState([]);

     useEffect(() =>{
      setLatestProduct(products.slice(0,10));
     },[])


  return (
    <div className=' my-10'>
      <div className=' text-center py-8 text-3xl'>

        <Title text1={'LATEAST'} text2={'COLLECTIONS'} />
        <p className='w3/4 m-auto text-gray-600 text-xs sm:text-sm md:text-base'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis totam corrupti earum, doloremque neque e
        </p>

      </div>
     {/* Redering Product */}
      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6 '>
        {
          latestProduct.map((item, index) =>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>

    </div>
  )
}

export default LastCollection