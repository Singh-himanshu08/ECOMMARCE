
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.filter(item => item.category === category);

      // ---- Handle subCategory (string or array) ----
      productsCopy = productsCopy.filter(item => {
        const itemSub = item.subCategory;

        // If both item.subCategory and prop.subCategory are arrays
        if (Array.isArray(itemSub) && Array.isArray(subCategory)) {
          return itemSub.some(sc => subCategory.includes(sc));
        }

        // If item.subCategory is array but prop.subCategory is string
        if (Array.isArray(itemSub) && typeof subCategory === "string") {
          return itemSub.includes(subCategory);
        }

        // If item.subCategory is string but prop.subCategory is array
        if (typeof itemSub === "string" && Array.isArray(subCategory)) {
          return subCategory.includes(itemSub);
        }

        // Both are strings
        return itemSub === subCategory;
      });

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
