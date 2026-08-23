import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState('All');
    const [sortType, setSortType] = useState('Featured');

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (category && category !== 'All') {
            productsCopy = productsCopy.filter(item => item.category === category);
        }

        setFilterProducts(productsCopy);
    }

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
                break;
            case 'newest':
                setFilterProducts(fpCopy.sort((a, b) => (b.date - a.date)));
                break;
            default:
                applyFilter();
                break;
        }
    }

    useEffect(() => {
        applyFilter();
    }, [category, search, showSearch, products]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className='w-full bg-white pb-20'>
            
            {/* Hero Collection Banner */}
            <div className='relative w-full h-[360px] sm:h-[440px] overflow-hidden bg-[#3D2518] flex items-center justify-center'>
                {/* Banner Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1600&q=80" 
                    alt="Handcrafted Crochet Tulips Collection" 
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-70 filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/30" />
                
                {/* Overlaid Banner Text */}
                <div className='relative z-10 text-center px-4 max-w-3xl mx-auto'>
                    <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight drop-shadow-md mb-3">
                        Handcrafted Collection
                    </h1>
                    <p className="font-lora italic text-base sm:text-lg text-amber-100/90 font-light tracking-wide">
                        Made with love, woven with tradition
                    </p>
                </div>
            </div>

            {/* Intro Description Paragraphs Section */}
            <div className='max-w-4xl mx-auto px-6 py-12 sm:py-16 text-[#3A3331] font-lora text-sm sm:text-[15px] leading-[1.85] text-left sm:text-justify space-y-6'>
                <p>
                    Welcome to our Handcrafted Collection, where the timeless art of handwoven creations comes to life through the skilled hands of Indian artisans. Immerse yourself in a captivating array of meticulously crafted pieces, each a testament to the rich tradition of craftsmanship from India.
                </p>
                <p>
                    As you explore our collection, you'll discover a treasure trove of vibrant and colorful products — from delicate crochet flowers that bring nature's beauty indoors, to stunning macrame wall hangings that transform your spaces, and intricately embroidered cushion covers that add warmth to your home.
                </p>
                <p>
                    What sets our Craft Collection apart is not just the exquisite craftsmanship, but also the heart and soul poured into each creation. Every thread is carefully woven to create pieces that are not only visually stunning, but also carry with them the warmth and spirit of the artisans who bring them to life.
                </p>
                <p>
                    Shop now and become a part of this exquisite journey, celebrating the art of handcraft and the craftsmanship of Indian artisans.
                </p>
            </div>

            {/* Filter and Sort Control Bar */}
            <div className='border-t border-b border-[#E5DFD9] bg-white py-3.5 px-4 sm:px-8 mb-8'>
                <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-lora'>
                    
                    {/* Left Controls: Filter & Sort */}
                    <div className='flex flex-wrap items-center gap-6 sm:gap-10 text-[#554E4B]'>
                        
                        {/* Filter by category */}
                        <div className='flex items-center gap-2'>
                            <span className='uppercase tracking-widest text-[11px] font-semibold text-gray-500'>FILTER BY</span>
                            <select 
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)}
                                className='bg-transparent text-[#2C2523] font-medium py-1 pr-6 cursor-pointer focus:outline-none border-b border-transparent hover:border-[#43281C] transition-colors'
                            >
                                <option value="All">All products</option>
                                <option value="Crochet Flowers">Crochet Flowers</option>
                                <option value="Macrame">Macrame</option>
                                <option value="Home Decor">Home Decor</option>
                                <option value="Tableware">Tableware</option>
                            </select>
                        </div>

                        {/* Sort by */}
                        <div className='flex items-center gap-2'>
                            <span className='uppercase tracking-widest text-[11px] font-semibold text-gray-500'>SORT BY</span>
                            <select 
                                value={sortType} 
                                onChange={(e) => setSortType(e.target.value)}
                                className='bg-transparent text-[#2C2523] font-medium py-1 pr-6 cursor-pointer focus:outline-none border-b border-transparent hover:border-[#43281C] transition-colors'
                            >
                                <option value="Featured">Featured</option>
                                <option value="low-high">Price: Low to High</option>
                                <option value="high-low">Price: High to Low</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side: Product Count */}
                    <div className='text-right'>
                        <span className="font-lora italic text-[#66605C]">
                            {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'}
                        </span>
                    </div>

                </div>
            </div>

            {/* 4-Column Product Grid */}
            <div className='max-w-7xl mx-auto px-4 sm:px-8'>
                {filterProducts.length === 0 ? (
                    <div className='text-center py-20 text-gray-500 font-lora text-base'>
                        No handcrafted items found matching your filter selection.
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
                        {filterProducts.map((item) => (
                            <ProductItem 
                                key={item._id} 
                                id={item._id} 
                                name={item.name} 
                                price={item.price} 
                                originalPrice={item.originalPrice}
                                tag={item.tag}
                                status={item.status}
                                image={item.image} 
                            />
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Collection
