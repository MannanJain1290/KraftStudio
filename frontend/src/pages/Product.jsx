import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        const item = products.find((prod) => prod._id === productId);
        if (item) {
            setProductData(item);
            setImage(Array.isArray(item.image) ? item.image[0] : item.image);
            if (item.sizes && item.sizes.length > 0) {
                setSize(item.sizes[0]);
            }
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 font-lora text-[#3A3331] transition-opacity duration-500">
            {/* Product Section */}
            <div className='flex gap-10 lg:gap-16 flex-col md:flex-row'>

                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse gap-4 sm:flex-row'>
                    {Array.isArray(productData.image) && productData.image.length > 1 && (
                        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-start gap-3 sm:w-1/5 w-full'>
                            {productData.image.map((item, index) => (
                                <img 
                                    onClick={() => setImage(item)} 
                                    src={item} 
                                    key={index} 
                                    className={`w-20 sm:w-full aspect-square object-cover cursor-pointer border rounded-sm ${image === item ? 'border-[#43281C]' : 'border-gray-200'}`} 
                                    alt="" 
                                />
                            ))}
                        </div>
                    )}
                    <div className='w-full flex-1 bg-[#FAF6F0] rounded-sm overflow-hidden border border-[#E8E2DC]'>
                        <img className='w-full h-auto max-h-[520px] object-cover' src={image} alt={productData.name} />
                    </div>
                </div>

                {/* Product Info */}
                <div className='flex-1 space-y-5'>
                    <div>
                        <span className='text-xs uppercase tracking-widest text-gray-500 font-semibold'>{productData.category}</span>
                        <h1 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#2C2523] mt-1">
                            {productData.name}
                        </h1>
                    </div>

                    <div className='flex items-center gap-1.5 text-amber-600 text-sm'>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className='text-xs text-gray-500 pl-1'>(48 artisan reviews)</span>
                    </div>

                    <div className='flex items-baseline gap-3'>
                        <span className="font-cormorant text-3xl font-bold text-[#2C2523]">
                            {currency}{Number(productData.price).toFixed(2)}
                        </span>
                        {productData.originalPrice && (
                            <span className='text-gray-400 line-through text-lg font-normal'>
                                {currency}{Number(productData.originalPrice).toFixed(2)}
                            </span>
                        )}
                        {productData.status === 'SOLD OUT' && (
                            <span className='border border-gray-400 text-gray-500 text-xs px-2.5 py-0.5 rounded uppercase font-semibold'>
                                SOLD OUT
                            </span>
                        )}
                    </div>

                    <p className='text-gray-600 text-sm leading-relaxed border-t border-b border-[#E8E2DC] py-4'>
                        {productData.description}
                    </p>

                    {/* Size / Variant Selector */}
                    {productData.sizes && productData.sizes.length > 0 && (
                        <div className='space-y-2'>
                            <p className='text-xs uppercase font-semibold tracking-wider text-gray-700'>Select Option / Size</p>
                            <div className='flex flex-wrap gap-2'>
                                {productData.sizes.map((item, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => setSize(item)} 
                                        className={`py-2 px-4 text-xs font-medium border rounded-xs transition-all ${
                                            item === size 
                                                ? 'bg-[#43281C] text-white border-[#43281C]' 
                                                : 'bg-white text-gray-700 border-gray-300 hover:border-[#43281C]'
                                        }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className='pt-2'>
                        <button 
                            disabled={productData.status === 'SOLD OUT'}
                            onClick={() => addToCart(productData._id, size || 'Default')} 
                            className={`w-full sm:w-auto px-10 py-3.5 text-sm font-semibold tracking-widest uppercase transition-all shadow-sm ${
                                productData.status === 'SOLD OUT'
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#43281C] text-white hover:bg-[#2C1910] active:scale-[0.99]'
                            }`}
                        >
                            {productData.status === 'SOLD OUT' ? 'Currently Sold Out' : 'ADD TO BAG'}
                        </button>
                    </div>

                    <div className='pt-4 text-xs text-gray-500 space-y-2 border-t border-[#E8E2DC]'>
                        <p className='flex items-center gap-2'>
                            <span className='text-[#2E6B47]'>✓</span> 100% Handcrafted by Skilled Indian Artisans
                        </p>
                        <p className='flex items-center gap-2'>
                            <span className='text-[#2E6B47]'>✓</span> Free Shipping on Orders Above ₹999
                        </p>
                        <p className='flex items-center gap-2'>
                            <span className='text-[#2E6B47]'>✓</span> Carefully packaged in eco-friendly gift wrap
                        </p>
                    </div>
                </div>
            </div>

            {/* Description & Artisan Story */}
            <div className='mt-16 border-t border-[#E8E2DC] pt-10'>
                <div className='flex border-b border-[#E8E2DC] gap-8 text-sm'>
                    <span className="font-cormorant text-lg font-bold text-[#43281C] border-b-2 border-[#43281C] pb-2 cursor-pointer">
                        Artisan Story & Craft Details
                    </span>
                    <span className="font-cormorant text-lg text-gray-500 pb-2 cursor-pointer hover:text-[#43281C]">
                        Care Instructions
                    </span>
                </div>
                <div className='py-6 text-sm text-gray-600 leading-relaxed space-y-4 max-w-4xl'>
                    <p>
                        Every piece at Kraft Studio is individually handcrafted with patience, skill, and cultural heritage passed down through generations. Our artisans use premium threads, organic cotton cords, and sustainable materials to ensure long-lasting quality and exquisite texture.
                    </p>
                    <p>
                        When you purchase from Kraft Studio, you directly support Indian artisan families and help preserve ancient craft traditions in modern homes.
                    </p>
                </div>
            </div>

            {/* Related Products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : <div className='py-20 text-center text-gray-400 font-lora'>Loading Kraft Studio product...</div>
}

export default Product
