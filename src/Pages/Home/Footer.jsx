import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-white py-16 px-4 font-sans flex flex-col items-center border-t border-gray-100">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
        যে কোন সমস্যায় কল করুন
      </h3>
      
      <div className="w-full max-w-[80rem]">
        <a 
          href="tel:+8801805441475" 
          className="block w-full bg-[#2b5938] hover:bg-[#1f4229] transition-colors text-white text-center py-4 md:py-5 rounded-sm text-xl md:text-2xl font-bold tracking-wider shadow-sm"
        >
          +8801805441475
        </a>
      </div>
    </footer>
  )
}

export default Footer