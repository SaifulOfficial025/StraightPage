import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

function Why() {
  const reasonsList = [
    "আমাদের কাছে পাবেন সম্পূর্ণ A grade কোয়ালিটির স্পিয়ারমিন্ট টি।",
    "সবচেয়ে ভালোটাই ইম্পোর্ট করা হয়েছে আলহামদুলিল্লাহ।",
    "সম্পূর্ণ কালার ফ্রি, প্রিজারভেটিভস ফ্রি।",
    "পণ্য হাতে পেয়ে মূল্য পরিশোধ করতে পারবেন।",
    "পছন্দ না হলে ফেরত বা পরিবর্তন করতে পারবেন।"
  ]

  return (
    <section className="w-full max-w-7xl mx-auto my-12 px-4 font-sans">
      <div className="border border-[#023e1a] border-b-4 border-b-[#ffc107] bg-white">
        {/* Header */}
        <div className="bg-[#023e1a] text-white text-center py-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md">কেনো Nevo থেকেই অর্ডার করবেন?</h2>
        </div>
        
        {/* List */}
        <div className="flex flex-col">
          {reasonsList.map((reason, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 px-4 md:px-6 py-4 hover:bg-green-50 transition-colors duration-200 ${
                index !== reasonsList.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex-shrink-0 text-[#a3c93a]">
                <FaCheckCircle className="text-2xl drop-shadow-sm" />
              </div>
              <p className="text-gray-900 text-lg md:text-xl font-bold">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why