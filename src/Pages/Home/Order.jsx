import React, { useState, useEffect } from 'react'
import { FaLock } from 'react-icons/fa'
import { OFFER_END_TIME_KEY } from './CounterClock'

function Order({ selectedProduct }) {
  const [shippingMethod, setShippingMethod] = useState('charge'); // 'charge' or 'free'
  const [isOfferActive, setIsOfferActive] = useState(false);

  useEffect(() => {
    const checkOffer = () => {
      const endTime = localStorage.getItem(OFFER_END_TIME_KEY);
      if (endTime && Date.now() < parseInt(endTime)) {
        setIsOfferActive(true);
        setShippingMethod('free');
      } else {
        setIsOfferActive(false);
      }
    };
    
    checkOffer(); // Check immediately
    const interval = setInterval(checkOffer, 1000);
    return () => clearInterval(interval);
  }, []);

  const subtotal = selectedProduct ? selectedProduct.price : 0;
  const shippingCost = shippingMethod === 'free' ? 0 : 100;
  const total = subtotal + shippingCost;

  // Helper to format currency
  const formatPrice = (price) => {
    return price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <section className="w-full max-w-full mx-auto py-12 px-4 md:px-16 font-sans">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Column: Billing Details */}
        <div className="w-full lg:w-[55%]">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Billing details</h2>
          
          <div className="space-y-4 mb-8">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                আপনার সম্পূর্ণ নাম লিখুন <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="আপনার নাম"
                className="w-full border border-gray-300 rounded-sm p-3 text-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors"
              />
            </div>
            
            {/* Address Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                সম্পূর্ণ ঠিকানা লিখুন <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="House number and street name"
                className="w-full border border-gray-300 rounded-sm p-3 text-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors"
              />
            </div>
            
            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                আপনার ফোন নাম্বার <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel" 
                placeholder="ফোন নাম্বার"
                className="w-full border border-gray-300 rounded-sm p-3 text-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors"
              />
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-4 mt-10">Shipping</h2>
          
          <div className="border border-gray-200 rounded-sm">
            {/* Delivery Charge */}
            <div className={`flex items-center justify-between p-4 border-b border-gray-200 bg-white transition-opacity ${isOfferActive ? 'opacity-50' : ''}`}>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="shipping" 
                  value="charge"
                  checked={shippingMethod === 'charge'}
                  onChange={() => setShippingMethod('charge')}
                  disabled={isOfferActive}
                  className="w-4 h-4 text-green-700 accent-green-700 cursor-pointer disabled:cursor-not-allowed"
                />
                <span className="ml-3 text-sm text-gray-700">ডেলিভারি চার্জ</span>
              </label>
              <span className="text-sm font-medium text-gray-700">100.00৳</span>
            </div>
            
            {/* Free Delivery */}
            <div className="flex flex-col p-4 bg-white">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="shipping"
                  value="free"
                  checked={shippingMethod === 'free'}
                  onChange={() => setShippingMethod('free')}
                  disabled={!isOfferActive}
                  className="w-4 h-4 text-green-700 accent-green-700 cursor-pointer disabled:cursor-not-allowed"
                />
                <span className="ml-3 text-sm text-gray-700">ফ্রি ডেলিভারি</span>
              </label>
              
              {/* Auto-selected message */}
              {isOfferActive && shippingMethod === 'free' && (
                <div className="ml-7 mt-2 inline-block">
                  <span className="text-xs font-bold text-[#2b5938] bg-green-50 border border-green-200 px-2 py-1 rounded-sm shadow-sm inline-flex items-center gap-1">
                    <span className="text-yellow-500">⚡</span> অফার চলাকালীন ফ্রি ডেলিভারি অটো-সিলেক্টেড!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right Column: Your Order */}
        <div className="w-full lg:w-[45%]">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Your order</h2>
          
          {selectedProduct && (
            <div className="w-full">
              {/* Table Header */}
              <div className="flex justify-between items-center pb-3 border-b border-dashed border-gray-300">
                <span className="text-sm font-bold text-gray-700">Product</span>
                <span className="text-sm font-bold text-gray-700">Subtotal</span>
              </div>
              
              {/* Product Item */}
              <div className="flex justify-between items-center py-4 border-b border-dashed border-gray-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-gray-200 rounded p-1 flex-shrink-0 bg-white">
                    <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm text-gray-700">{selectedProduct.title}</span>
                </div>
                <div className="text-sm text-gray-700">
                  × 1 <span className="ml-1 font-bold">{formatPrice(subtotal)}৳</span>
                </div>
              </div>
              
              {/* Subtotal */}
              <div className="flex justify-between items-center py-4 border-b border-dashed border-gray-300">
                <span className="text-sm text-gray-700 font-bold">Subtotal</span>
                <span className="text-sm text-gray-700 font-bold">{formatPrice(subtotal)}৳</span>
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-center py-4">
                <span className="text-sm text-gray-800 font-bold">Total</span>
                <span className="text-sm text-[#2b5938] font-bold text-lg">{formatPrice(total)}৳</span>
              </div>
              
              {/* Payment Method */}
              <div className="bg-gray-50 border border-gray-100 p-6 mb-6 mt-2">
                <div className="text-sm text-gray-800 font-medium mb-4">Cash On Delivery</div>
                <div className="bg-[#e9ecef] text-gray-600 p-4 text-sm relative rounded-sm">
                  <div className="absolute top-[-8px] left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#e9ecef]"></div>
                  পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন (শর্ত প্রযোজ্য)
                </div>
              </div>
              
              {/* Submit Button */}
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 text-gray-900 font-extrabold py-4 rounded-sm flex items-center justify-center gap-2 text-base md:text-lg shadow-md">
                <FaLock className="text-sm text-gray-800" /> অর্ডার করুন {formatPrice(total)}৳
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Order