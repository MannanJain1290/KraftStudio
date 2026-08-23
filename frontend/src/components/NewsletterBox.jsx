import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center py-12 px-4 my-12 bg-[#FAF6F0] rounded-sm border border-[#E8E2DC] font-lora max-w-5xl mx-auto'>
      <h3 className='font-cormorant text-3xl font-bold text-[#2C2523]'>Join the Kraft Studio Circle</h3>
      <p className='text-gray-600 text-sm mt-2 max-w-lg mx-auto'>
        Subscribe to receive early access to new handcrafted collections, artisan stories, and 10% off your first order.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-2/3 md:w-1/2 flex items-center gap-0 mx-auto mt-6 border border-[#E8E2DC] bg-white rounded-sm overflow-hidden shadow-xs'>
        <input className='w-full sm:flex-1 px-4 py-3.5 outline-none text-sm text-[#2C2523] bg-transparent' type="email" placeholder='Enter your email address' required/>
        <button type='submit' className='bg-[#43281C] text-white text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#2C1910] transition-colors shrink-0'>JOIN NOW</button>
      </form>
    </div>
  )
}

export default NewsletterBox
