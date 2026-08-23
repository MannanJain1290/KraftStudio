import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price, originalPrice, tag, status }) => {
    const { currency } = useContext(ShopContext);

    // Format price with 2 decimals e.g., Rs. 325.00
    const formattedPrice = Number(price).toFixed(2);
    const formattedOriginalPrice = originalPrice ? Number(originalPrice).toFixed(2) : null;

    return (
        <Link 
            onClick={() => scrollTo(0, 0)} 
            className='group text-[#2C2523] cursor-pointer flex flex-col h-full bg-white transition-all duration-300' 
            to={`/product/${id}`}
        >
            {/* Image Wrapper */}
            <div className='relative overflow-hidden bg-[#FAF6F0] aspect-[1/1.08] w-full rounded-sm'>
                
                {/* Badge Tag (SALE / NEW) */}
                {tag === 'SALE' && (
                    <span className='absolute top-2.5 left-2.5 bg-[#A93226] text-white text-[10px] font-bold px-2 py-0.5 tracking-widest uppercase z-10 shadow-xs'>
                        SALE
                    </span>
                )}
                {tag === 'NEW' && (
                    <span className='absolute top-2.5 left-2.5 bg-[#D97736] text-white text-[10px] font-bold px-2 py-0.5 tracking-widest uppercase z-10 shadow-xs'>
                        NEW
                    </span>
                )}

                {/* Product Image */}
                <img 
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out' 
                    src={Array.isArray(image) ? image[0] : image} 
                    alt={name} 
                />
            </div>

            {/* Product Details */}
            <div className='pt-3 pb-1 flex flex-col flex-grow justify-between'>
                <div>
                    <h3 className="font-lora text-[15px] font-normal text-[#2C2523] group-hover:text-[#8B5A2B] transition-colors leading-snug line-clamp-2">
                        {name}
                    </h3>
                </div>

                <div className='mt-1.5 flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <span className="font-lora font-bold text-[#2C2523] text-sm">
                            {currency}{formattedPrice}
                        </span>
                        {formattedOriginalPrice && (
                            <span className="font-lora text-gray-400 line-through text-xs font-normal">
                                {currency}{formattedOriginalPrice}
                            </span>
                        )}
                    </div>

                    {/* Status Badge (SOLD OUT) */}
                    {status === 'SOLD OUT' && (
                        <div className='mt-1'>
                            <span className='inline-block border border-gray-400 text-gray-500 text-[10px] font-semibold tracking-wider px-2 py-0.5 uppercase rounded-xs'>
                                SOLD OUT
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default ProductItem
