import React from 'react'

function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-br from-[#021f0d] via-[#05381a] to-[#021f0d] font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full -mt-10">
        {/* Typography */}
        <div className="mb-12 space-y-3 animate-fade-in-up">
            {/* Name */}
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Spearmint
          </h1>
          {/* Title 1 */}
          <h2 className="text-gray-100 text-3xl md:text-5xl font-bold tracking-wide drop-shadow-md">
            Horomone Balance Tea
          </h2>
          {/* Title 2 */}
          <p className="mt-6 text-[#ffc107] text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-relaxed drop-shadow-sm px-4">
            অনিয়মিত পিরিয়ড নিয়মিত করে মাত্র ১ মাসে
          </p>
        </div>
        
        {/* Product Image Showcase */}
        <div className="relative w-full max-w-3xl mx-auto mb-14 group">
          <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out group-hover:-translate-y-2">
            <div className="absolute inset-0 border border-yellow-400/40 rounded-3xl"></div>
            <img 
              src="/spearmint-tea.png" 
              alt="Spearmint Hormone Balance Tea" 
              className="w-full h-auto object-contain rounded-2xl shadow-inner animate-float bg-white"
            />
          </div>
        </div>

        {/* Call to Action Button */}
        <button className="relative overflow-hidden group bg-gradient-to-r from-yellow-400 to-[#ffc107] text-[#021f0d] font-black py-4 px-12 md:px-16 rounded-lg text-xl md:text-2xl shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] active:scale-95 cursor-pointer">
          <span className="relative z-10 flex items-center justify-center gap-3">
            অর্ডার করুন
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
        </button>
      </div>
      
      {/* Custom Styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  )
}

export default Hero