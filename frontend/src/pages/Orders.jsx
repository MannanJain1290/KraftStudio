import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const Orders = () => {
  const { backendUrl, token, currency, navigate } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    let allOrdersItem = []

    // 1. First check local storage orders
    const localOrders = JSON.parse(localStorage.getItem('kraft_local_orders') || '[]');
    localOrders.forEach((order) => {
      order.items?.forEach((item) => {
        allOrdersItem.push({
          ...item,
          status: order.status || 'Order Placed',
          paymentMethod: order.paymentMethod || 'Cash on Delivery',
          date: order.date || Date.now()
        })
      })
    })

    // 2. Fetch from backend if online & logged in
    if (token && backendUrl) {
      try {
        const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
        if (response.data.success) {
          response.data.orders.forEach((order) => {
            order.items.forEach((item) => {
              allOrdersItem.push({
                ...item,
                status: order.status,
                payment: order.payment,
                paymentMethod: order.paymentMethod,
                date: order.date
              })
            })
          })
        }
      } catch (error) {
        console.log(error)
      }
    }

    setOrderData(allOrdersItem.reverse())
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-8 py-10 font-lora text-[#3A3331] min-h-[65vh]'>
        <div className='mb-8 border-b border-[#E8E2DC] pb-4 flex items-center justify-between'>
            <div>
              <h1 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#2C2523]">My Orders</h1>
              <p className='text-xs text-gray-500 uppercase tracking-widest mt-1'>Track Your Handcrafted Deliveries</p>
            </div>
            <button 
              onClick={loadOrderData}
              className='text-xs font-semibold uppercase tracking-wider text-[#43281C] hover:underline'
            >
              Refresh Orders ↻
            </button>
        </div>

        {orderData.length === 0 ? (
          <div className='text-center py-20 bg-[#FAF6F0] rounded-sm border border-[#E8E2DC] space-y-4 my-8'>
            <p className="font-cormorant text-2xl text-[#2C2523]">No orders placed yet</p>
            <p className='text-sm text-gray-500'>When you order handcrafted items, they will appear here.</p>
            <button 
              onClick={() => navigate('/collection')} 
              className='bg-[#43281C] text-white px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#2C1910] transition-colors'
            >
              Explore Craft Collection
            </button>
          </div>
        ) : (
          <div className='divide-y divide-[#E8E2DC] border-t border-b border-[#E8E2DC]'>
              {orderData.map((item, index) => {
                const itemImage = Array.isArray(item.image) ? item.image[0] : item.image;
                return (
                  <div key={index} className='py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
                      <div className='flex items-start gap-4 sm:gap-6'>
                          <img className='w-20 sm:w-24 aspect-square object-cover rounded-sm border border-gray-200 bg-[#FAF6F0]' src={itemImage} alt={item.name} />
                          <div className='space-y-1'>
                            <h3 className="font-cormorant text-lg sm:text-xl font-bold text-[#2C2523]">{item.name}</h3>
                            <div className='flex flex-wrap items-center gap-3 text-sm text-gray-700 pt-1'>
                              <span className='font-bold text-[#2C2523]'>{currency}{Number(item.price).toFixed(2)}</span>
                              <span>•</span>
                              <span>Quantity: {item.quantity}</span>
                              {item.size && item.size !== 'Default' && (
                                <>
                                  <span>•</span>
                                  <span className='px-2 py-0.5 border border-gray-300 bg-[#FAF6F0] text-xs text-gray-600 rounded-xs'>{item.size}</span>
                                </>
                              )}
                            </div>
                            <p className='text-xs text-gray-500 pt-1'>Date: <span className='text-gray-700 font-medium'>{new Date(item.date).toDateString()}</span></p>
                            <p className='text-xs text-gray-500'>Payment: <span className='text-gray-700 font-medium'>{item.paymentMethod || 'COD'}</span></p>
                          </div>
                      </div>
                      <div className='md:w-1/3 flex items-center justify-between md:justify-end gap-6'>
                          <div className='flex items-center gap-2 bg-[#FAF6F0] px-3 py-1.5 border border-[#E8E2DC] rounded-xs'>
                              <span className='w-2 h-2 rounded-full bg-emerald-600 animate-pulse'></span>
                              <span className='text-xs font-semibold uppercase tracking-wider text-[#2C2523]'>{item.status || 'Order Placed'}</span>
                          </div>
                          <button onClick={() => alert(`Tracking updates for "${item.name}": Handcrafted by our artisan team. Status: ${item.status || 'Order Placed'}`)} className='border border-[#43281C] text-[#43281C] hover:bg-[#43281C] hover:text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors'>Track Order</button>
                      </div>
                  </div>
                )
              })}
          </div>
        )}
    </div>
  )
}

export default Orders
