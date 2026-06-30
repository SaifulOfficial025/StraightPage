import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

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

      <div className="mt-8 flex flex-col items-center gap-3">
        {/* <a 
          href="https://wa.me/8801756018512" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-[#25D366] transition-colors font-medium text-base"
        >
          <FaWhatsapp className="text-xl text-[#25D366]" /> WhatsApp: <span className="font-bold">+8801756018512</span>
        </a> */}
        
        <p className="text-sm text-gray-500 mt-2">
          ওয়েবসাইট ডেভেলপার: <a href="https://wa.me/8801756018512" target="_blank" rel="noopener noreferrer" className="text-[#2b5938] font-semibold hover:text-[#1f4229] hover:underline transition-colors">Md. Saiful Islam Rimon</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer