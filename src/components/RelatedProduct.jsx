import React, { useContext, useEffect, useState } from 'react'
import { ShopContaxt } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProduct = ({category,subCategory}) => {
    const {products} = useContext(ShopContaxt);
    const [related , setRelated] = useState([]);

    useEffect(()=>{

        if(products.length >0){

          let productsCopy = products.slice();

          productsCopy = productsCopy.filter((item)=>category=== item.category);
          productsCopy = productsCopy.filter((item)=>subCategory=== item.subCategory);
           
          setRelated(productsCopy.slice(0,5));
          
        }

    },[products])
  return (
    <div className=' my-20'>

        <div className=' text-center text-3xl py-2'>

            <Title text1={'RELETED'} text2={'PRODUCTS'}/>

        </div>
        <div className='grid grid-col-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4'>
          {related.map((item,index)=>(

            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>

          ))}
        </div> 

    </div>
  )
}

export default RelatedProduct