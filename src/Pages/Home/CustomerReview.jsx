import React from 'react'
import { FaStar } from 'react-icons/fa'

function CustomerReview() {
  const reviews = [1, 2, 3]; // Mock data for 3 review cards

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
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
          {reviews.map((item) => (
            <div 
              key={item} 
              className="flex-shrink-0 w-full sm:w-[45%] md:w-[31%] snap-center rounded-xl border border-gray-300 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden p-2 md:p-3"
            >
              {/* As requested: only one image per card */}
              <img 
                src="/review.png" 
                alt={`Customer Review ${item}`} 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
        
        {/* Carousel Indicators (Static Mockup) */}
        <div className="flex justify-center items-center gap-2.5 mt-2">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
      
      {/* Hide Scrollbar Style */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default CustomerReview