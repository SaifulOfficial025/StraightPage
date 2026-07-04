import React from 'react'

function OrderDirection() {
  const steps = [
    {
      number: "০১",
      title: "প্যাকেজটি নির্বাচন করুন",
      description: "প্রথমে আপনার পছন্দ অনুযায়ী প্রয়োজনীয় প্যাকেজটি সিলেক্ট করুন।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2b5938]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "০২",
      title: "অর্ডার ফর্মটি পূরণ করুন",
      description: "অর্ডার ফর্মটিতে আপনার নাম, মোবাইল নাম্বার এবং সম্পূর্ণ ঠিকানা সঠিকভাবে লিখুন।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2b5938]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      number: "০৩",
      title: "অর্ডার সম্পন্ন করুন",
      description: "সবশেষে নিচে থাকা 'অর্ডার করতে চাই' বা 'অর্ডার সম্পন্ন করুন' বাটনে ক্লিক করুন।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2b5938]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "০৪",
      title: "ডেলিভারি ও পেমেন্ট",
      description: "পণ্য হাতে পেয়ে দেখে বুঝে মূল্য পরিশোধ (Cash on Delivery) করুন।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2b5938]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 font-sans border-y border-yellow-400/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#021f0d] tracking-tight">
            সহজ ১ মিনিটে অর্ডার করার নিয়ম
          </h2>
          <p className="text-[#021f0d]/85 text-base md:text-lg max-w-xl mx-auto font-bold">
            নিচের সহজ ধাপগুলো অনুসরণ করে আজই আপনার অর্ডার সম্পন্ন করুন।
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Arrow/Line Connector for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-6 right-6 h-0.5 border-t-2 border-dashed border-[#021f0d]/20 -translate-y-12 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex flex-col items-center text-center bg-white border border-yellow-200/30 rounded-3xl p-6 shadow-[0_15px_30px_rgba(2,31,13,0.06)] hover:shadow-[0_20px_45px_rgba(2,31,13,0.12)] transition-all duration-300 group z-10 hover:-translate-y-1"
            >
              {/* Step Badge & Number */}
              <div className="absolute -top-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#021f0d] to-[#043d1c] text-yellow-400 flex items-center justify-center font-black text-lg shadow-md border-4 border-white group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-amber-50/50 border border-amber-100/30 flex items-center justify-center mb-6 mt-4 shadow-sm group-hover:bg-amber-100/30 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Step Info */}
              <h3 className="text-[#021f0d] text-xl font-extrabold mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm font-bold leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderDirection