import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getCategories = async () => {
  try {
    const response = await api.get('/products/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getProductsByCategory = async (category: string) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductDetails = async (productId: string | number) => {
  try {
    const response = await api.get(`/products/${productId}/`);
    console.log(response)
    return response?.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};