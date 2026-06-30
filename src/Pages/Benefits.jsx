import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

function Benefits() {
  const benefitsList = [
    "Spearmint Tea অ্যান্ড্রোজেন হরমোন কমাতে সাহায্য করে, যা বিশেষ করে PCOS থাকা মেয়েদের জন্য দারুণ উপকার",
    "অতিরিক্ত মুখের লোম কমায়।",
    "ব্রণ দূর করে ও ত্বকের উজ্জ্বলতা বাড়ায়।",
    "মানসিক প্রশান্তি ও ভালো ঘুমে সহায়ক।",
    "হজমের সমস্যা দূর করে।"
  ]

  return (
    <section className="w-full max-w-7xl mx-auto my-12 px-4 font-sans">
      <div className="border border-[#023e1a] border-b-4 border-b-[#ffc107] bg-white">
        {/* Header */}
        <div className="bg-[#023e1a] text-white text-center py-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md">স্পিয়ারমিন্ট টি এর উপকারিতা</h2>
        </div>
        
        {/* List */}
        <div className="flex flex-col">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 px-4 md:px-6 py-4 hover:bg-green-50 transition-colors duration-200 ${
                index !== benefitsList.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex-shrink-0 text-[#a3c93a]">
                <FaCheckCircle className="text-2xl drop-shadow-sm" />
              </div>
              <p className="text-gray-900 text-lg md:text-xl font-bold">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits