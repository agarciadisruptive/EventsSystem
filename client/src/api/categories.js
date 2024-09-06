import axios from './axios'

export const getCategoriesRequest = () => axios.get('/categories');
export const getCategoryRequest = (id) => axios.get(`/categories/${id}`);
export const createCategoriesRequest = (category) => axios.get('/categories', category);
export const updateCategoriesRequest = (category) => axios.get('/categories', category);
export const deleteCategoriesRequest = (category) => axios.get(`/categories/${id}`);