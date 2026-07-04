import React, { useState, useEffect } from 'react'

function OfferPriceDisplay() {
  const products = [
    {
      id: 1,
      title: "Spearmint Tea - ১ মাসের প্যাকেজ",
      subtitle: "হরমোনাল ব্যালেন্স ও সুস্থতার যাত্রা শুরু করুন",
      originalPrice: "৭৫০৳",
      price: "৬৯০৳",
      saveAmount: "৬০৳ ছাড়",
      badge: "Regular Pack",
      image: "/spearmint-tea.png",
      popular: false
    },
    {
      id: 2,
      title: "Spearmint Tea - ২ মাসের প্যাকেজ",
      subtitle: "৩৯০ টাকা ক্যাশ ডিসকাউন্ট ও ফ্রি ডেলিভারি",
      originalPrice: "১,৩৮০৳",
      price: "৯৯০৳",
      saveAmount: "৩৯০৳ ছাড়",
      badge: "Popular Pack",
      image: "/spearmint-tea.png",
      popular: true
    },
    {
      id: 3,
      title: "Spearmint Tea - ৩ মাসের প্যাকেজ",
      subtitle: "৫৮০ টাকা মেগা ডিসকাউন্ট ও ফ্রি ডেলিভারি",
      originalPrice: "২,০৭০৳",
      price: "১,৪৯০৳",
      saveAmount: "৫৮০৳ ছাড়",
      badge: "Mega Deal",
      image: "/spearmint-tea.png",
      popular: false,
      mega: true
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [products.length]);

  const handleOrderClick = () => {
    // Scroll to checkout form
    const orderSection = document.querySelector('section.w-full.max-w-full.mx-auto.py-12');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ProductCard = ({ product, isMobile }) => {
    return (
      <div 
        className={`relative flex flex-col justify-between bg-white rounded-2xl md:rounded-3xl p-3.5 sm:p-5 transition-all duration-300 h-full text-left ${
          product.popular 
            ? 'border-2 border-yellow-400 shadow-[0_15px_30px_rgba(2,31,13,0.1)]' 
            : product.mega
            ? 'border-2 border-emerald-500 shadow-[0_15px_30px_rgba(2,31,13,0.06)]'
            : 'border border-yellow-100 shadow-[0_10px_20px_rgba(2,31,13,0.03)]'
        } ${!isMobile && product.popular ? 'md:-translate-y-4 md:scale-105 z-10' : ''} ${
          !isMobile ? 'hover:-translate-y-2' : ''
        }`}
      >
        {/* Top Badges Row */}
        <div className="flex justify-between items-center w-full gap-2 mb-3">
          {product.badge ? (
            <span className={`text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-sm ${
              product.popular 
                ? 'bg-gradient-to-r from-yellow-400 to-[#ffc107] text-[#021f0d]' 
                : product.mega
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                : 'bg-gray-500 text-white'
            }`}>
              {product.badge}
            </span>
          ) : (
            <div />
          )}
          
          <span className="bg-red-500 text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full animate-pulse shadow-sm">
            {product.saveAmount}
          </span>
        </div>

        {/* Product Image & Info */}
        <div className="flex flex-col items-center text-center mt-2">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-3 sm:mb-4 bg-green-50/30 rounded-xl md:rounded-2xl p-2.5 sm:p-4 flex items-center justify-center border border-green-100/50 shadow-inner group">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <h3 className="text-gray-900 text-sm sm:text-base md:text-lg font-black mb-1 tracking-wide leading-tight">
            {product.title}
          </h3>
          <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4 px-1 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Price section */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="line-through text-gray-400 text-xs sm:text-sm font-bold">
              {product.originalPrice}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-black text-red-600 drop-shadow-sm">
              {product.price}
            </span>
          </div>

          <button 
            onClick={handleOrderClick}
            className={`w-full py-2.5 sm:py-3.5 px-4 font-black rounded-xl text-xs sm:text-sm md:text-base transition-all duration-300 active:scale-95 cursor-pointer shadow-md flex items-center justify-center gap-2 ${
              product.popular
                ? 'bg-gradient-to-r from-yellow-400 to-[#ffc107] text-[#021f0d] hover:shadow-[0_10px_25px_rgba(250,204,21,0.4)]'
                : product.mega
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-[0_10px_25px_rgba(16,185,129,0.3)]'
                : 'bg-gradient-to-r from-[#023e1a] to-[#046129] text-white hover:shadow-[0_10px_25px_rgba(2,62,26,0.3)]'
            }`}
          >
            <span>অর্ডার করুন</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 font-sans border-y border-yellow-400/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-14">
          <span className="inline-flex items-center gap-1.5 bg-[#021f0d] text-yellow-400 font-black text-sm px-4 py-1.5 rounded-full animate-bounce shadow-md">
            🔥 সীমিত সময়ের ধামাকা অফার!
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#021f0d] tracking-tight drop-shadow-md">
            আমাদের বিশেষ প্যাকেজসমূহ
          </h2>
          <p className="text-[#021f0d]/80 text-base md:text-lg max-w-xl mx-auto font-bold">
            আপনার প্রয়োজন অনুযায়ী সেরা প্যাকেজটি বেছে নিন এবং পেয়ে যান আকর্ষণীয় ছাড়!
          </p>
        </div>

        {/* Desktop View (Grid) */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isMobile={false} />
          ))}
        </div>

        {/* Mobile View (Auto-scrolling Carousel) */}
        <div className="md:hidden relative w-full overflow-hidden px-2">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0 px-2 pb-4">
                <ProductCard product={product} isMobile={true} />
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-[#021f0d] w-6' : 'bg-[#021f0d]/30 w-2.5'
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

export default OfferPriceDisplay