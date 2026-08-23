import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-8 py-10 font-lora text-[#3A3331]'>

      {/* Header */}
      <div className='text-center py-6 border-b border-[#E8E2DC] mb-12'>
          <h1 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2C2523] tracking-tight">
            Our Story
          </h1>
          <p className='text-sm text-gray-500 italic mt-2'>Preserving Heritage • Empowering Artisans • Woven With Tradition</p>
      </div>

      {/* Main Story Section */}
      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>
          <div className='w-full md:w-1/2 overflow-hidden rounded-sm border border-[#E8E2DC] bg-[#FAF6F0]'>
            <img className='w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700' src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80" alt="Kraft Studio Artisan Creation" />
          </div>

          <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-700 leading-relaxed text-sm sm:text-base'>
              <h2 className="font-cormorant text-3xl font-bold text-[#2C2523]">Crafted with Heart in the Heart of India</h2>
              <p>
                Kraft Studio was born from a deep appreciation for the timeless art of handwoven creations. In an age of mass manufacturing, we set out to preserve the soul of handcrafted art by connecting master Indian artisans with homes around the world.
              </p>
              <p>
                Each piece in our collection — from delicate everlasting crochet roses and tulips to intricately knotted macrame wall hangings — is handmade using traditional techniques passed down through generations.
              </p>
              <div className='p-6 bg-[#FAF6F0] border-l-4 border-[#43281C] rounded-r-sm space-y-2'>
                <h3 className="font-cormorant text-xl font-bold text-[#2C2523]">Our Artisan Mission</h3>
                <p className='text-xs sm:text-sm text-gray-600 italic'>
                  To empower rural Indian craft communities by providing fair-wage artisan livelihoods, ensuring every thread woven carries dignity, warmth, and artistic mastery into your home.
                </p>
              </div>
          </div>
      </div>

      {/* Values Section */}
      <div className='py-12 border-t border-[#E8E2DC] my-12'>
          <h2 className="font-cormorant text-3xl font-bold text-[#2C2523] text-center mb-10">Why Choose Kraft Studio</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='border border-[#E8E2DC] bg-[#FAF6F0] p-8 rounded-sm space-y-3 text-center'>
                <span className='text-3xl'>🌿</span>
                <h3 className="font-cormorant text-xl font-bold text-[#2C2523]">Sustainable & Organic</h3>
                <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                  Crafted using 100% organic cotton twines, premium non-toxic yarns, and eco-friendly packaging materials.
                </p>
              </div>
              
              <div className='border border-[#E8E2DC] bg-[#FAF6F0] p-8 rounded-sm space-y-3 text-center'>
                <span className='text-3xl'>✨</span>
                <h3 className="font-cormorant text-xl font-bold text-[#2C2523]">100% Artisan Handmade</h3>
                <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                  No factory machines. Every stem, stitch, and knot is crafted individually by skilled hand artisans.
                </p>
              </div>

              <div className='border border-[#E8E2DC] bg-[#FAF6F0] p-8 rounded-sm space-y-3 text-center'>
                <span className='text-3xl'>🎁</span>
                <h3 className="font-cormorant text-xl font-bold text-[#2C2523]">Thoughtfully Packaged</h3>
                <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                  Each creation comes wrapped in elegant gift packaging, complete with personalized handwritten gift notes.
                </p>
              </div>
          </div>
      </div>
      
    </div>
  )
}

export default About
