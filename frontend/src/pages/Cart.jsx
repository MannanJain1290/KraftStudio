import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 font-lora text-[#3A3331]">

      <div className='mb-8 border-b border-[#E8E2DC] pb-4'>
        <h1 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#2C2523]">
          Your Shopping Bag
        </h1>
        <p className='text-xs text-gray-500 uppercase tracking-widest mt-1'>Handcrafted Items Ready For Checkout</p>
      </div>

      {cartData.length === 0 ? (
        <div className='text-center py-20 bg-[#FAF6F0] rounded-sm border border-[#E8E2DC] space-y-4 my-8'>
          <p className="font-cormorant text-2xl text-[#2C2523]">Your shopping bag is empty</p>
          <p className='text-sm text-gray-500'>Discover unique artisan creations in our Craft Collection.</p>
          <button 
            onClick={() => navigate('/collection')} 
            className='bg-[#43281C] text-white px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#2C1910] transition-colors'
          >
            Explore Craft Collection
          </button>
        </div>
      ) : (
        <div>
          <div className='divide-y divide-[#E8E2DC] border-t border-b border-[#E8E2DC]'>
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              if (!productData) return null;

              const itemImage = Array.isArray(productData.image) ? productData.image[0] : productData.image;

              return (
                <div key={index} className='py-5 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-4 sm:gap-6'>
                    <img className='w-16 sm:w-24 aspect-square object-cover rounded-sm border border-gray-200 bg-[#FAF6F0]' src={itemImage} alt={productData.name} />
                    <div>
                      <p className="font-cormorant text-base sm:text-xl font-bold text-[#2C2523]">{productData.name}</p>
                      <div className='flex items-center gap-4 mt-2 text-sm'>
                        <span className='font-bold text-[#2C2523]'>{currency}{Number(productData.price).toFixed(2)}</span>
                        {item.size && item.size !== 'Default' && (
                          <span className='px-2.5 py-0.5 border border-gray-300 bg-[#FAF6F0] text-xs text-gray-600 rounded-xs'>{item.size}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <input 
                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} 
                    className='border border-gray-300 max-w-14 sm:max-w-20 px-2 py-1 text-center font-semibold rounded-xs' 
                    type="number" 
                    min={1} 
                    defaultValue={item.quantity} 
                  />
                  <button 
                    onClick={() => updateQuantity(item._id, item.size, 0)} 
                    className='p-2 text-gray-400 hover:text-red-600 transition-colors justify-self-end'
                    aria-label="Remove item"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              )
            })}
          </div>

          <div className='flex justify-end my-16'>
            <div className='w-full sm:w-[450px] bg-[#FAF6F0] p-6 rounded-sm border border-[#E8E2DC]'>
              <CartTotal />
              <div className='w-full text-end mt-6'>
                <button 
                  onClick={() => navigate('/place-order')} 
                  className='w-full bg-[#43281C] text-white text-xs font-semibold uppercase tracking-widest py-4 hover:bg-[#2C1910] transition-colors shadow-sm'
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Cart
