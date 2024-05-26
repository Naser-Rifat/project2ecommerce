"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";



/**
 * Renders the details of a product, including its thumbnail image, rating, title, brand, category, description, and price.
 * Also displays a list of all products.
 *
 * @param {ProductDetailsProps} props - An object containing an array of all products and the current product.
 * @return {JSX.Element} A React component that renders the product details and all products.
 */


function ProductDetails({ allProducts, product }: ProductDetailsProps) {

  const [thumbnailImage,setThumbnailImage] = useState <string  | undefined> ()
  const discountPrice =
    (Number(product?.price) * Number(product?.discountPercentage)) / 100;
  const originalPrice = Number(product?.price - discountPrice);


  const handleImage = (image: string | undefined) => setThumbnailImage(image);

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="flex flex-col md:flex-row   rounded-lg shadow-md p-4">
        <div className="md:w-1/2 mb-4 md:mb-0 ">
          <Image
            src={thumbnailImage || product?.thumbnail }
            alt={product?.title}
            width={500}
            height={500}
            className="rounded-lg bg-white"
          />
          <div className="flex space-x-2 my-10">
            {product?.images.map((img, index) => (
              <div
                key={index}
                className="w-20 h-20   drop-shadow-sm bg-zinc-100 rounded-md cursor-pointer "
                onClick={()=>handleImage(img)}
              >
                <Image
                  src={img}
                  alt={product?.title}
                  width={100}
                  height={100}

                  className="rounded-lg w-full h-full object-fit"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">{product?.rating}★</span>
            <span className="text-gray-600 ml-2">
              ({product?.reviewsCount} User Reviews)
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
          <ul className="my-2 space-y-1 ">
            <li>
              Brand: <span>{product?.brand}</span>
            </li>
            <li>
              Category: <span>{product?.category}</span>
            </li>
          </ul>

          <div className="mb-4">
            <span className="text-2xl font-bold text-green-500">
              ${originalPrice.toFixed(2)}
            </span>
            <span className="text-gray-500 line-through ml-2">
              ${product?.price?.toFixed(2)}
            </span>
            <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold ml-2 px-2.5 py-0.5 rounded">
              {product?.discountPercentage}% OFF
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6  pt-4">
        <h3 className="text-lg rounded-tr font-semibold py-5 border-l border-t border-e border-light  pl-10 ">
          Product Description
        </h3>
        <div className="mb-4 p-10 border  border-light">
          <p className="text-gray-600 rounded-br ">{product?.description}</p>
        </div>{" "}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 uppercase">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allProducts?.slice(0, 12).map((item) => (
           <Link key={item.id} href={`/product/${item?.id}`}>
            <div
              
              className=" border border-light drop-shadow-sm p-4 rounded-lg flex gap-4 items-center"
            >
              <div className="w-40 h-20">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mb-2 rounded-lg w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-sm">${item.price}</p>
              </div>
            </div>
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
