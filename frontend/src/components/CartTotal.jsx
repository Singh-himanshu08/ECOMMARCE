
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

  const {currency,delivery_fee,getCartAmount,getCartCount} = useContext(ShopContext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />

      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Product Amount</p>
          <p>{currency}{getCartAmount()}.00</p>

        </div>

        <hr />

        <div className='flex justify-between'>
          <p>Shipping Charges</p>
          <p>{currency}{getCartCount() === 0 ? 0 : delivery_fee}</p>

        </div>

        <hr />

         <div className='flex justify-between'>
          <p className='text-green-600 '>Your Total Payable Amount</p>
          <b className='text-green-600 '>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>

        </div>


      </div>


    </div>
  )
}

export default CartTotal



{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!CARD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}



// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';

// const CartTotal = () => {
//   const { currency, delivery_fee,getCartCount, getCartAmount, } = useContext(ShopContext);



//   return (
//     <div className="w-full max-w-md mx-auto bg-green-500 rounded-xl shadow-lg p-6">
      
//       {/* Heading */}
//       <div className="text-2xl mb-4">
//         <Title text1={'Payable'} text2={'Amount'} />
//       </div>

//       {/* Cart Details */}
//       <div className="flex flex-col gap-3 text-sm">
        
//         {/* Total Amount */}
//         <div className="flex justify-between items-center">
//           <p>Total</p>
//           <p>{currency}{getCartAmount()}.00</p>
//         </div>
//         <hr className="border-gray-300" />

//         {/* Shipping */}
//         <div className="flex justify-between items-center">
//           <p>Shipping Charges</p>
//           <p>{currency}{getCartCount()===0 ? 0 : delivery_fee}.00</p>
//         </div>
//         <hr className="border-gray-300" />

//         {/* Total Payable */}
//         <div className="flex justify-between items-center mt-2">
//           <p className="text-yellow-600 font-medium text-shadow-lg text-lg">
//             Your Total Payable Amount
//           </p>
//           <b className="text-red-600 font-bold text-lg text-shadow-lg">
//             {currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
//           </b>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartTotal;

