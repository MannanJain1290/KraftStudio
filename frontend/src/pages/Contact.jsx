import React from 'react'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-8 py-10 font-lora text-[#3A3331]'>
      
      <div className='text-center py-6 border-b border-[#E8E2DC] mb-12'>
          <h1 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2C2523] tracking-tight">
            Thoughtful Gifts & Custom Orders
          </h1>
          <p className='text-sm text-gray-500 italic mt-2'>Have a custom order in mind? We craft custom bouquets, wedding favors & wall hangings.</p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 items-center mb-20'>
        <div className='w-full md:w-1/2 overflow-hidden rounded-sm border border-[#E8E2DC] bg-[#FAF6F0]'>
          <img className='w-full h-[420px] object-cover' src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=80" alt="Kraft Studio Thoughtful Gifts" />
        </div>
        
        <div className='flex flex-col justify-center items-start gap-6 md:w-1/2'>
          <div>
            <h2 className="font-cormorant text-3xl font-bold text-[#2C2523]">Kraft Studio Workshop</h2>
            <p className='text-sm text-gray-500 mt-1'>Artisan Craft Studio & Design Headquarters</p>
          </div>
          
          <div className='space-y-3 text-sm text-gray-700 leading-relaxed border-t border-b border-[#E8E2DC] py-4 w-full'>
            <p className='flex items-center gap-3'>
              <span className='text-[#43281C] font-semibold w-24'>Studio Location:</span>
              <span>Craft Colony, Sector 4, New Delhi, India 🇮🇳</span>
            </p>
            <p className='flex items-center gap-3'>
              <span className='text-[#43281C] font-semibold w-24'>Email Us:</span>
              <span className='text-[#8B5A2B] font-medium'>support@kraftstudio.in</span>
            </p>
            <p className='flex items-center gap-3'>
              <span className='text-[#43281C] font-semibold w-24'>WhatsApp/Call:</span>
              <span>+91 98765 43210</span>
            </p>
          </div>

          <div className='space-y-2'>
            <h3 className="font-cormorant text-xl font-bold text-[#2C2523]">Custom Orders & Bulk Gifting</h3>
            <p className='text-xs text-gray-600 max-w-lg'>
              Looking for custom color combinations, corporate artisan gift boxes, or bulk wedding return favors? Reach out via email or WhatsApp and our design team will assist you!
            </p>
          </div>

          <a 
            href="mailto:support@kraftstudio.in" 
            className='bg-[#43281C] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#2C1910] transition-colors shadow-sm'
          >
            Request Custom Craft Quote
          </a>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
