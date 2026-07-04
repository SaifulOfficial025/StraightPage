import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'

function CustomerReview() {
  const reviews = [1, 2, 3]; // Mock data for 3 review cards
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="w-full font-sans bg-white pb-16">
      {/* Header Section */}
      <div className="bg-[#023e1a] text-center py-12 px-4">
        <p className="text-sm md:text-base text-gray-200 mb-3 tracking-wide">
          হাজার হাজার মানুষের পছন্দের শীর্ষে Nevo Spearmint Tea
        </p>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white flex justify-center items-center gap-3 md:gap-5 drop-shadow-md">
          <FaStar className="text-[#ff9800] text-3xl md:text-4xl lg:text-5xl drop-shadow-lg" />
          সম্মানিত কাস্টমার রিভিউ
          <FaStar className="text-[#ff9800] text-3xl md:text-4xl lg:text-5xl drop-shadow-lg" />
        </h2>
        
        <p className="text-sm md:text-base text-green-200 mt-4 tracking-wide">
          যা একমাত্র নেভো স্পিয়ারমিন্ট টি এর ই আছে
        </p>
      </div>

      {/* Reviews Carousel/Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        
        {/* Desktop View (Grid) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {reviews.map((item) => (
            <div 
              key={item} 
              className="rounded-xl border border-gray-300 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden p-2 md:p-3"
            >
              <img 
                src="/review.png" 
                alt={`Customer Review ${item}`} 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Mobile View (Auto-scrolling Carousel) */}
        <div className="md:hidden relative w-full overflow-hidden px-2">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviews.map((item) => (
              <div key={item} className="w-full flex-shrink-0 px-2 pb-4">
                <div className="rounded-xl border border-gray-300 shadow-sm bg-white overflow-hidden p-2">
                  <img 
                    src="/review.png" 
                    alt={`Customer Review ${item}`} 
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-[#023e1a] w-5' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default CustomerReview