import React from 'react'

function AwarenessLine() {
  const data = {
    title: "অর্ডার করার পূর্বে অনুগ্রহ করে সতর্কতা অবলম্বন করুন! ⚠️",
    points: [
      "আপনার নাম এবং মোবাইল নম্বরটি সচল ও সঠিক আছে কিনা নিশ্চিত করুন। নম্বর ভুল হলে আমরা অর্ডার কনফার্ম করতে পারব না।",
      "ডেলিভারি ঠিকানাটি বিস্তারিত ও নির্ভুলভাবে লিখুন (যেমন: জেলা, থানা, বাসা নং, রোড নং বা পরিচিত স্থান)।",
      "আপনার নির্বাচিত প্যাকেজটি সঠিকভাবে সিলেক্ট করা হয়েছে কিনা তা পুনরায় চেক করুন।",
      "আমাদের প্রতিনিধি অর্ডার কনফার্ম করার জন্য আপনাকে ফোন দিলে কল রিসিভ করে অর্ডারটি নিশ্চিত করুন।"
    ]
  }

  return (
    <div className="w-full bg-[#fdf2f2] py-8 px-4 border-t border-red-200/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-red-50 to-rose-50 p-6 md:p-8 rounded-2xl border border-red-200 shadow-sm">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-white border border-red-300 flex items-center justify-center flex-shrink-0 shadow-sm text-red-600 animate-pulse">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-black text-red-800 mb-4 tracking-wide">
              {data.title}
            </h2>

            {/* Points List */}
            <ul className="space-y-2.5">
              {data.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm md:text-base text-gray-800 font-semibold leading-relaxed">
                  <span className="text-red-600 font-black mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwarenessLine