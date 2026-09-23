import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
//import {ProductItem} from './ProductItem'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]) ;

    useEffect(()=>{
      setLatestProducts(products.slice(0,10))
    },[products])

  
    
  return (
    <div className='my-10'>
    <div className='text-center py-8 text-3xl font-semibold tracking-wide drop-shadow-md'>


        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 font-medium m-auto text-xs sm:text-sm md:text-base text-gray-700 drop-shadow-sm'>
 Discover the latest trends, premium styles, and hand-picked collections designed to elevate your everyday look.


        </p>

       

      </div>
      {/*RENDERING PRODUCTS*/ }
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 drop-shadow-sm'>

        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }

      </div>

    </div>
  )
}

export default LatestCollection