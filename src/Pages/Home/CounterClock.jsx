import React, { useState, useEffect } from 'react'

export const OFFER_END_TIME_KEY = 'straightpage_offer_end_time';

function CounterClock() {
  const [timeLeft, setTimeLeft] = useState(12 * 3600 + 47 * 60 + 33);

  useEffect(() => {
    let endTime = localStorage.getItem(OFFER_END_TIME_KEY);
    
    if (!endTime) {
      const durationInSeconds = 12 * 3600 + 47 * 60 + 33;
      endTime = Date.now() + durationInSeconds * 1000;
      localStorage.setItem(OFFER_END_TIME_KEY, endTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.floor((parseInt(endTime) - now) / 1000);
      setTimeLeft(diff > 0 ? diff : 0);
    };

    updateTimer(); // Initial call
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <section className="w-full py-10 md:py-16 px-4 bg-[#023e1a] flex justify-center items-center font-sans">
      <div className="relative w-full max-w-3xl bg-gradient-to-b from-[#697e5d] to-[#4e6244] border border-white/10 rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col items-center text-center overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white/5 rounded-[2rem] pointer-events-none"></div>

        {/* Badge */}
        <div className="bg-[#b3beac] text-red-600 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wide py-1.5 sm:py-2 px-4 sm:px-5 rounded-full mb-6 sm:mb-8 inline-flex items-center gap-1.5 sm:gap-2 shadow-sm z-10">
          <span className="text-base sm:text-lg leading-none">🔥</span> LIMITED TIME OFFER
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mb-8 sm:mb-10 tracking-wide z-10 drop-shadow-md px-2">
          <span className="text-[#ffc107]">ফ্রি ডেলিভারি</span> অফার শেষ হতে বাকি
        </h2>

        {/* Counter */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mb-8 sm:mb-10 z-10 w-full px-2">
          {/* Hours */}
          <div className="bg-[#9ba98f] rounded-xl sm:rounded-2xl w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex flex-col justify-center items-center shadow-inner border border-black/5 shrink-0">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-none">{formatTime(hours)}</span>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 mt-0.5 sm:mt-1">ঘন্টা</span>
          </div>
          
          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-black/80 pb-3 sm:pb-5 md:pb-6 shrink-0">:</span>

          {/* Minutes */}
          <div className="bg-[#9ba98f] rounded-xl sm:rounded-2xl w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex flex-col justify-center items-center shadow-inner border border-black/5 shrink-0">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-none">{formatTime(minutes)}</span>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 mt-0.5 sm:mt-1">মিনিট</span>
          </div>

          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-black/80 pb-3 sm:pb-5 md:pb-6 shrink-0">:</span>

          {/* Seconds */}
          <div className="bg-[#9ba98f] rounded-xl sm:rounded-2xl w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex flex-col justify-center items-center shadow-inner border border-black/5 shrink-0">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-none">{formatTime(seconds)}</span>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 mt-0.5 sm:mt-1">সেকেন্ড</span>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base font-semibold tracking-wide z-10 drop-shadow-sm px-4">
          অফারটি শেষ হওয়ার আগেই দ্রুত অর্ডার করুন
        </p>
      </div>
    </section>
  )
}

export default CounterClock