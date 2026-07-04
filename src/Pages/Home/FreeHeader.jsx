import React from 'react'

function FreeHeader() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-[#021f0d] py-4 shadow-sm border-b border-yellow-500/20 z-50">
      <div className="animate-marquee whitespace-nowrap flex items-center font-sans justify-center">
        {/* Set 1 */}
        <div className="flex items-center">
          <span className="flex items-center gap-2 font-black text-xl sm:text-xl md:text-4xl tracking-wide">
            🚚 ফ্রী ডেলিভারি ! ফ্রী ডেলিভারি 
          </span>
        </div>
      </div>

      {/* <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 16s linear infinite;
        }
      `}</style> */}
    </div>
  )
}

export default FreeHeader