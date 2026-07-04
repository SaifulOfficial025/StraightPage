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
      <div className="text-center space-y-6 z-20 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Caption */}
        <p className="text-xl md:text-2xl font-extrabold text-[#023e1a] tracking-wide drop-shadow-sm">
          একমাত্র BSTI অনুমোদিত সেরা চা
        </p>
        
        {/* Order Button */}
        <button className="relative w-full max-w-2xl md:max-w-4xl overflow-hidden group bg-gradient-to-r from-yellow-400 to-[#ffc107] text-[#021f0d] font-black py-5 px-6 text-xl md:text-2xl shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] active:scale-95 cursor-pointer mx-4">
          <span className="relative z-10 flex items-center justify-center gap-3">
            অর্ডার করতে চাই 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
        </button>
      </div>

      {/* Custom Styles for animations */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>

    </section>
  )
}

export default ProductImage