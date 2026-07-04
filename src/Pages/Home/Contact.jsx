import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'

function Contact() {
  const phoneNumber = "+8801335405435";
  const waNumber = "8801335405435";
  const messengerUsername = "yourpage"; // Replace with your Messenger page username or ID
  
  return (
    <section className="w-full py-16 px-4 font-sans bg-[#f9fbf9] flex flex-col items-center justify-center border-t border-gray-100">
      <div className="max-w-4xl w-full text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#023e1a] mb-4">
          আমাদের সাথে যোগাযোগ করুন
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          যেকোনো তথ্য জানতে বা অর্ডার করতে সরাসরি কল করুন, হোয়াটসঅ্যাপ করুন অথবা মেসেঞ্জারে মেসেজ দিন।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl px-4">
        {/* Phone Button */}
        <a 
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-3 w-full bg-white border-2 border-[#2b5938] text-[#2b5938] hover:bg-[#f0fdf4] transition-colors py-4 px-6 md:px-8  shadow-sm group"
        >
          <div className="bg-[#eaf5ec] p-3 rounded-full group-hover:bg-[#d1fae5] transition-colors">
            <FaPhoneAlt className="text-xl" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">সরাসরি কল করুন</span>
            <span className="block text-lg md:text-xl font-extrabold">{phoneNumber}</span>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20b858] text-white transition-colors py-4 px-6 md:px-8  shadow-sm group border-2 border-[#25D366]"
        >
          <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
            <FaWhatsapp className="text-xl text-white" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-wider">হোয়াটসঅ্যাপ মেসেজ</span>
            <span className="block text-lg md:text-xl font-extrabold">{phoneNumber}</span>
          </div>
        </a>

        {/* Messenger Button */}
        <a 
          href={`https://m.me/${messengerUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-[#006AFF] hover:bg-[#0056cc] text-white transition-colors py-4 px-6 md:px-8  shadow-sm group border-2 border-[#006AFF]"
        >
          <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
            <FaFacebookMessenger className="text-xl text-white" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-wider">ফেসবুক মেসেঞ্জার</span>
            <span className="block text-lg md:text-xl font-extrabold">মেসেজ দিন</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact