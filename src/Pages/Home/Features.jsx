import React from 'react'

function Features() {
  const featuresList = [
    "Feature 1",
    "Feature 2 ",
    "Feature 3"
  ]

  return (
    <section className="w-full max-w-4xl mx-auto my-8 px-4 font-sans">
      <div className=" rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        {featuresList.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center gap-4 p-4 rounded-xl hover: transition-all duration-300 group  hover:border-green-100/50"
          >
            {/* Green Checkbox Circle */}
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10b981] flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300 mt-0.5">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={3.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Feature Text */}
            <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features