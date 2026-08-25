import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [showShopDropdown, setShowShopDropdown] = useState(false);
    const [showCraftDropdown, setShowCraftDropdown] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const location = useLocation();

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <header className='w-full sticky top-0 z-50 bg-white border-b border-[#E8E2DC] shadow-sm'>
            {/* Top Announcement Bar */}
            <div className='bg-[#A2B07B] text-[#000000] py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#341F16]'>
                <span>Handcrafted with Love — Free Shipping on Orders Above ₹999 | </span>
                <Link to='/collection' className='underline underline-offset-4 decoration-[#E6C594] hover:text-[#890B23] transition-colors font-semibold'>Shop Now</Link>
            </div>

            {/* Main Header */}
            <div className='max-w-7xl mx-auto px-4 sm:px-8 py-1 flex items-center justify-between'>
                
                {/* Brand Logo */}
                <Link to='/' className='flex items-center group'>
                    <img 
                        src={assets.ks_logo} 
                        alt="Kraft Studio" 
                        className='h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300'
                    />
                </Link>

                {/* Navigation Links (Desktop) */}
                <nav className='hidden md:flex items-center gap-8 text-[15px] font-lora text-[#383230]'>
                    
                    <NavLink to='/about' className='hover:text-[#8B5A2B] transition-colors py-1'>
                        Our Story
                    </NavLink>

                    {/* Shop Dropdown */}
                    <div className='relative' onMouseEnter={() => setShowShopDropdown(true)} onMouseLeave={() => setShowShopDropdown(false)}>
                        <NavLink to='/collection' className='flex items-center gap-1 hover:text-[#8B5A2B] transition-colors py-1'>
                            <span>Shop</span>
                            <svg className='w-3.5 h-3.5 opacity-70' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                            </svg>
                        </NavLink>

                        {showShopDropdown && (
                            <div className='absolute top-full left-0 w-52 bg-white border border-[#E8E2DC] shadow-lg rounded-sm py-2 z-50 text-sm animate-fadeIn'>
                                <Link to='/collection' className='block px-4 py-2 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]'>All Handmade Items</Link>
                                <Link to='/collection' className='block px-4 py-2 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]'>Crochet Flowers</Link>
                                <Link to='/collection' className='block px-4 py-2 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]'>Macrame Wall Hangings</Link>
                                <Link to='/collection' className='block px-4 py-2 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]'>Embroidered Cushions</Link>
                            </div>
                        )}
                    </div>

                    {/* Craft Collection Dropdown (Active tab in screenshot) */}
                    <div className='relative' onMouseEnter={() => setShowCraftDropdown(true)} onMouseLeave={() => setShowCraftDropdown(false)}>
                        <NavLink 
                            to='/collection' 
                            className={`flex items-center gap-1.5 py-1 relative font-medium transition-colors ${
                                location.pathname === '/collection' || location.pathname === '/' 
                                    ? 'text-[#2C2523] border-b-2 border-[#43281C]' 
                                    : 'hover:text-[#8B5A2B]'
                            }`}
                        >
                            <span>Craft Collection</span>
                            <svg className='w-3.5 h-3.5 opacity-70' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                            </svg>
                        </NavLink>

                        {showCraftDropdown && (
                            <div className='absolute top-full left-0 w-56 bg-white border border-[#E8E2DC] shadow-lg rounded-sm py-2 z-50 text-sm animate-fadeIn'>
                                <Link to='/collection' className='block px-4 py-2 hover:bg-[#FAF6F0] hover:text-[#8B5A2B] font-medium text-[#43281C]'>Handcrafted Collection</Link>
                                <Link to='/collection' className='block px-4 py-2 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]'>Artisanal Tulips & Roses</Link>
                                <Link to='/collection' className='block px-4 py-2 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]'>Boho Macrame Decor</Link>
                                <Link to='/collection' className='block px-4 py-2 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]'>Indian Artisan Gifts</Link>
                            </div>
                        )}
                    </div>

                    <NavLink to='/contact' className='hover:text-[#8B5A2B] transition-colors py-1'>
                        Thoughtful Gifts
                    </NavLink>
                </nav>

                {/* Header Action Icons */}
                <div className='flex items-center gap-5 sm:gap-6'>
                    {/* Search Icon */}
                    <button 
                        onClick={() => { setShowSearch(true); navigate('/collection'); }}
                        className='p-1.5 text-[#383230] hover:text-[#8B5A2B] transition-colors rounded-full hover:bg-[#FAF6F0]'
                        aria-label="Search"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    {/* User Profile */}
                    <div className='group relative'>
                        <button 
                            onClick={() => token ? null : navigate('/login')}
                            className='p-1.5 text-[#383230] hover:text-[#8B5A2B] transition-colors rounded-full hover:bg-[#FAF6F0]'
                            aria-label="User Account"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                        
                        {token && (
                            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-3 z-50'>
                                <div className='flex flex-col gap-1.5 w-40 py-2.5 px-4 bg-white border border-[#E8E2DC] shadow-lg rounded-sm text-sm text-gray-700'>
                                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#8B5A2B] py-1'>My Profile</p>
                                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#8B5A2B] py-1'>Orders</p>
                                    <hr className='border-[#E8E2DC] my-1' />
                                    <p onClick={logout} className='cursor-pointer text-red-600 hover:text-red-700 py-1'>Logout</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Shopping Bag Icon with Badge */}
                    <Link to='/cart' className='relative p-1.5 text-[#383230] hover:text-[#8B5A2B] transition-colors rounded-full hover:bg-[#FAF6F0]'>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {getCartCount() > 0 && (
                            <span className='absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#43281C] text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm'>
                                {getCartCount()}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Icon */}
                    <button 
                        onClick={() => setVisible(true)}
                        className='p-1.5 text-[#383230] hover:text-[#8B5A2B] md:hidden'
                        aria-label="Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Navigation */}
            <div className={`fixed top-0 right-0 bottom-0 z-50 bg-white transition-all duration-300 shadow-2xl ${visible ? 'w-4/5 max-w-xs' : 'w-0 overflow-hidden'}`}>
                <div className='flex flex-col text-gray-700 h-full'>
                    <div onClick={() => setVisible(false)} className='flex items-center justify-between p-4 border-b border-[#E8E2DC] bg-[#FAF6F0] cursor-pointer'>
                        <img src={assets.ks_logo} alt="Kraft Studio" className='h-14 w-auto object-contain' />
                        <svg className='w-5 h-5 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </div>
                    <div className='flex flex-col py-4 font-lora text-base'>
                        <NavLink onClick={() => setVisible(false)} className='py-3 px-6 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]' to='/'>Home</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-3 px-6 hover:bg-[#FAF6F0] hover:text-[#8B5A2B] font-semibold text-[#43281C]' to='/collection'>Craft Collection</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-3 px-6 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]' to='/about'>Our Story</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-3 px-6 hover:bg-[#FAF6F0] hover:text-[#8B5A2B]' to='/contact'>Thoughtful Gifts</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
