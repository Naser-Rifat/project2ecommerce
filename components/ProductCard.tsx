import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ProductCard = ({ product }: { product: Product | null | undefined }) => {
  if (!product) {
    return (
      <div className="bg-gray rounded-lg shadow-md p-4 flex items-center justify-center">
        <span className="text-gray-600 text-lg">No data available</span>
      </div>
    );
  }

  const { id, thumbnail, price, title, rating, reviewsCount } = product;

  return (
   <Link href={`/product/${id}`}>
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={200}
        className="rounded-lg"
        loading="lazy"
      />
      <div className="mt-4">
        <div className="flex items-center">
          <span className="text-yellow-500">{rating}★</span>
          <span className="text-gray-600 ml-2">({reviewsCount} Reviews)</span>
        </div>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-green-500 font-bold mt-2">${price}</p>
      </div>
     
    </div>
   </Link>
  );
};

export default ProductCard;
