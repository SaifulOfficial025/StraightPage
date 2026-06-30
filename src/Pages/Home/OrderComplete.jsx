import React, { useState } from 'react'
import Products from './Products'
import Order from './Order'

export const productData = [
  {
    id: 1,
    title: "Spearmint Tea 1",
    subtitle: "১ মাসের প্যাকেজ",
    originalPrice: "750.00৳",
    price: 690,
    badge: null,
    highlight: false,
    image: "/spearmint-tea.png"
  },
  {
    id: 2,
    title: "Spearmint Tea 2",
    subtitle: "২ মাসের প্যাকেজ | ৩৯০ টাকা ছাড়",
    originalPrice: "1,380.00৳",
    price: 990,
    badge: "Popular",
    highlight: true,
    image: "/spearmint-tea.png"
  },
  {
    id: 3,
    title: "Spearmint Tea 3",
    subtitle: "৩ মাসের প্যাকেজ | ৫৮০ টাকা ছাড়",
    originalPrice: "2,070.00৳",
    price: 1490,
    badge: "Super Deal",
    highlight: true,
    image: "/spearmint-tea.png"
  }
];

const OrderComplete = () => {
  const [selectedProductId, setSelectedProductId] = useState(2);
  const selectedProduct = productData.find(p => p.id === selectedProductId);

  return (
    <div className="w-full bg-gradient-to-b from-[#eaf5ec] to-[#f9fbf9] py-10 font-sans relative">
      {/* Premium accent border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-[#023e1a] to-yellow-400 opacity-90"></div>
      
      <div className="max-w-full mx-auto px-4 md:px-16 mb-2">
        <h1 className="text-xl md:text-3xl font-extrabold text-[#023e1a] tracking-tight flex items-start md:items-center gap-3 drop-shadow-sm">
          <span className="w-1.5 h-6 md:h-7 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-sm mt-1 md:mt-0 flex-shrink-0"></span>
          অর্ডার করতে নিচের ফর্মটি পূরণ করুন
        </h1>
      </div>
      
      {/* Product Selection Component */}
      <Products 
        products={productData} 
        selected={selectedProductId} 
        setSelected={setSelectedProductId} 
      />
      
      {/* Checkout Form Component */}
      <Order selectedProduct={selectedProduct} />
    </div>
  )
}

export default OrderComplete