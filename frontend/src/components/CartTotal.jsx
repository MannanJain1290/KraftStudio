import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    const subtotal = getCartAmount();
    const shipping = subtotal === 0 ? 0 : delivery_fee;
    const total = subtotal + shipping;

    return (
        <div className='w-full font-lora text-[#2C2523]'>
            <h2 className="font-cormorant text-2xl font-bold text-[#2C2523] mb-4">Order Summary</h2>

            <div className='space-y-3 text-sm'>
                <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Subtotal</span>
                    <span className='font-medium'>{currency}{subtotal.toFixed(2)}</span>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Shipping</span>
                    <span className='font-medium'>
                        {subtotal === 0
                            ? '—'
                            : subtotal >= 999
                                ? <span className='text-emerald-600 font-semibold'>FREE</span>
                                : `${currency}${delivery_fee.toFixed(2)}`
                        }
                    </span>
                </div>

                {subtotal > 0 && subtotal < 999 && (
                    <p className='text-[11px] text-gray-400 italic'>
                        Add {currency}{(999 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                )}

                <div className='border-t border-[#E8E2DC] pt-3 mt-1 flex justify-between items-center'>
                    <span className='font-cormorant text-lg font-bold'>Total</span>
                    <span className='font-cormorant text-xl font-bold text-[#43281C]'>
                        {currency}{(subtotal >= 999 ? subtotal : total).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
