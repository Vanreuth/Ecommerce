import React, { useContext, useEffect, useState } from 'react'
import { ShopContaxt } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const Collection = () => {
  const { products } = useContext(ShopContaxt);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relavent');


  const toggleCategory = (e) => {
    const value = e.target.value;
  
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };
  const toggleSubCategory = (e) => {
    const value = e.target.value;
  
    if (category.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const applyFifter = ()=>{
    let productCopy = products.slice();
    if(category.length >0){
      productCopy = productCopy.filter(item =>category.includes(item.category))

    }
    if(subCategory.length >0){
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProduct(productCopy);
  }


  const sortPrice =()=>{
     let fpCopy = filterProduct.slice();
     switch(sortType){
       case 'low-high':
        setFilterProduct(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
       case 'high-low':
        setFilterProduct(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
        default:
          applyFifter();
        break;
        
     }
  }


  

   useEffect(()=>{
    setFilterProduct(products);
   },[])

   useEffect(()=>{
      applyFifter();
   },[category,subCategory])

   useEffect(()=>{
     sortPrice();
   },[sortType])

  
  return (
    <div className=' flex flex-col sm:flex-row border-t gap-1 sm:gap-10 pt-10'>

      {/* fifter option */}

      <div className='min-w-60'>

        <p onClick={()=> setShowFilter(!showFilter)} className= ' my-2 text-xl flex items-center cursor-pointer gap-2'>FIFTERS
          <img className={`h-3 sm:hidden' ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={` border border-gray-300 py-3 pl-5 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           <div className=' flex flex-col gap-2 text-sm font-light text-gray-700 '>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
            </p>
           </div>
        </div>
        {/* Sub Category */}

        <div className={` border border-gray-300 py-3 pl-5 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
           <p className='mb-3 text-sm font-medium'>TYPE</p>
           <div className=' flex flex-col gap-2 text-sm font-light text-gray-700 '>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className=' flex gap-2'>
              <input className=' w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
           </div>
        </div>


      </div>

      {/* left-Sife */}

      <div className=' flex-1'>

        <div className=' flex justify-between text-base sm:text-2xl mb-4'>

          <Title text1={'ALL'} text2={'COLLECTION'}/>
          {/* product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className=' border-2 border-gray-300 text-sm'>
             <option value="relavent">Sort by: Relavent</option>
             <option value="low-high">Sort by: Low to High</option>
             <option value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/* Map Product */}

        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>

          {
            filterProduct.map((item,index)=>(

              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>

            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Collection