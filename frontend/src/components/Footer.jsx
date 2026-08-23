import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full bg-[#FAF6F0] border-t border-[#E8E2DC] text-[#3A3331] font-lora pt-14 pb-8 mt-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12'>
                
                {/* Brand Column */}
                <div className='md:col-span-2 space-y-4'>
                    <div className='flex items-center gap-2.5'>
                        <div className='w-8 h-8 rounded-full bg-[#2E6B47] flex items-center justify-center text-white'>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9m-4.5-9a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
                            </svg>
                        </div>
                        <span className="font-cormorant text-2xl font-bold text-[#2C2523]">
                            Kraft Studio
                        </span>
                    </div>
                    <p className='text-sm text-gray-600 max-w-md leading-relaxed'>
                        Celebrating Indian artisan craftsmanship through handwoven crochet flowers, macrame home decor, and hand-embroidered textiles. Handcrafted with love, woven with tradition.
                    </p>
                </div>

                {/* Navigation Column */}
                <div className='space-y-3 text-sm'>
                    <h4 className="font-cormorant text-lg font-bold text-[#2C2523] uppercase tracking-wider">
                        Explore
                    </h4>
                    <ul className='space-y-2 text-gray-600'>
                        <li><Link to='/collection' className='hover:text-[#8B5A2B] transition-colors'>Craft Collection</Link></li>
                        <li><Link to='/about' className='hover:text-[#8B5A2B] transition-colors'>Our Story</Link></li>
                        <li><Link to='/contact' className='hover:text-[#8B5A2B] transition-colors'>Thoughtful Gifts</Link></li>
                        <li><Link to='/orders' className='hover:text-[#8B5A2B] transition-colors'>Track Order</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className='space-y-3 text-sm'>
                    <h4 className="font-cormorant text-lg font-bold text-[#2C2523] uppercase tracking-wider">
                        Get In Touch
                    </h4>
                    <ul className='space-y-2 text-gray-600'>
                        <li>Crafted in India 🇮🇳</li>
                        <li>support@kraftstudio.in</li>
                        <li>+91 98765 43210</li>
                        <li className='pt-2 flex gap-3 text-gray-700'>
                            <span className='hover:text-[#8B5A2B] cursor-pointer'>Instagram</span>
                            <span>•</span>
                            <span className='hover:text-[#8B5A2B] cursor-pointer'>Pinterest</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-8 border-t border-[#E8E2DC] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4'>
                <p>© {new Date().getFullYear()} Kraft Studio. All rights reserved. Handcrafted with Love.</p>
                <p className='flex gap-4'>
                    <span className='hover:underline cursor-pointer'>Privacy Policy</span>
                    <span className='hover:underline cursor-pointer'>Terms of Service</span>
                    <span className='hover:underline cursor-pointer'>Shipping Info</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
