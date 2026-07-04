import React from 'react'

function Products({ products, selected, setSelected }) {
  const formatPrice = (price) => {
    return price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '৳';
  };

  return (
    <section className="w-full max-w-full mx-auto py-12 px-4 md:px-16 font-sans">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 tracking-wide">
        প্রোডাক্ট সিলেক্ট করুন
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div 
            key={product.id}
            onClick={() => setSelected(product.id)}
            className={`relative flex items-center p-4 border  cursor-pointer transition-all duration-200 ${
              product.highlight 
                ? 'border-[#ff9800]/40 bg-[#fff8ef] hover:bg-[#fff3e0]' 
                : 'border-gray-200 bg-white hover:bg-gray-50'
            } ${selected === product.id ? 'ring-1 ring-green-600 shadow-md' : 'shadow-sm'}`}
          >
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-0 right-0 bg-[#2b5938] text-white text-[10px] md:text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-sm">
                {product.badge}
              </div>
            )}
            
            {/* Radio Button */}
            <div className="mr-4 flex-shrink-0">
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                selected === product.id ? 'border-[#2b5938]' : 'border-gray-300'
              }`}>
                {selected === product.id && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2b5938]"></div>
                )}
              </div>
            </div>

            {/* Product Image */}
            <div className="w-16 h-16 flex-shrink-0 bg-white border border-gray-100 rounded p-1 mr-4 shadow-sm">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-gray-800 font-bold text-sm md:text-base">
                {product.title} &times; 1
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-0.5">
                {product.subtitle}
              </p>
              <div className="mt-2 text-sm md:text-base">
                <span className="line-through text-gray-400 mr-2 text-xs md:text-sm">
                  {product.originalPrice}
                </span>
                <span className="font-extrabold text-gray-900">
                  {formatPrice(product.price)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products