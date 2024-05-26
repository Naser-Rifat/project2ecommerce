import React, { useState, useEffect } from 'react';
import ProductDetails from './components/productdetails';
import { getAllProducts, getProductDetails } from '@/utils/api';



/**
 * Retrieves the static paths for the product pages.
 *
 * @return {Promise<{ paths: { params: { id: string } }[]; fallback: 'blocking' }>} The static paths and fallback value.
 */

export async function getStaticPaths() {
  const products = await getAllProducts();
  return {
    paths: products?.map((product: { id: { toString: () => any; }; }) => ({
      params: { id: product?.id.toString() }
    })),
    fallback: 'blocking'
  };
  
}

/**
 * Retrieves a product by its ID.
 *
 * @param {string | number} id - The ID of the product.
 * @return {Promise<Product>} A promise that resolves to the product object.
 */
export async function getProduct(id: string | number) {
  const product = await getProductDetails(id);
  return product
}

/**
 * Retrieves all product details.
 *
 * @return {Promise<Product[]>} A promise that resolves to an array of product objects.
 */
const getAllProductsDetails = async () => {  
  const products = await getAllProducts()
  return products;
};

/**
 * Retrieves the details of a product based on the provided ID.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string | number} params.id - The ID of the product.
 * @return {Promise<JSX.Element>} The JSX element representing the product details.
 */
 const ProductDetail= async ({ params }: { params: { id: string | number } }) => {
  const allProducts =  await getAllProductsDetails()
  const products = params?.id ? await getProduct(params?.id ):null

  return (
   <ProductDetails allProducts={allProducts} product={products} />
  );
};

export default ProductDetail;
