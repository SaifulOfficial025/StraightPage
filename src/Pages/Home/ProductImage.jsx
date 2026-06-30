import React from 'react'

function ProductImage() {
  return (
    <section className="w-full py-16 px-4 font-sans bg-white flex flex-col items-center justify-center">
      
      {/* Product Image Showcase */}
      <div className="relative w-full max-w-4xl mx-auto mb-8">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-10"></div>
        <img 
          src="/spearmint-tea.png" 
          alt="Spearmint Tea" 
          className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content Section */}
      <div className="text-center space-y-6 z-20">
        {/* Caption */}
        <p className="text-xl md:text-2xl font-extrabold text-[#023e1a] tracking-wide drop-shadow-sm">
          একমাত্র BSTI অনুমোদিত সেরা চা
        </p>
        
        {/* Order Button */}
        <button className="bg-gradient-to-r from-yellow-400 to-[#ffc107] text-black font-extrabold py-4 px-16 md:px-24 rounded-lg text-xl md:text-2xl shadow-[0_10px_30px_rgba(255,193,7,0.4)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,193,7,0.6)] active:scale-95 active:translate-y-1 cursor-pointer">
          অর্ডার করুন
        </button>
      </div>

    </section>
  )
}

export default ProductImage