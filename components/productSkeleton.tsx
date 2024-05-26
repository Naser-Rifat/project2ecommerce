import React from 'react'

function ProductSkeleton() {
  return (
  <div className="animate-pulse flex flex-col items-center space-y-4 p-4 bg-gray-200 rounded-lg">
    <div className="w-32 h-32 bg-gray-300 rounded"></div>
    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
  </div>
  )
}

export default ProductSkeleton
