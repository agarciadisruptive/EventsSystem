import {createContext, useContext, useState} from 'react';
import {createCategoriesRequest, getCategoriesRequest} from '../api/categories'

const CategoryContext = createContext();

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategories must be used without an AuthProvider")
  }
  return context;
}

export function CategoriesProvider({children}) {
    const [categories, setCategories] = useState([]);

    const getCategories = async() => {
      const res = await getCategoriesRequest();
      console.log(res)
    }

    const createCategory = async(category) => {
      const res = await createCategoriesRequest(category);
      console.log(res);
    }
    return (
        <CategoryContext.Provider value={{
          categories, createCategory, getCategories
        }}>{children}</CategoryContext.Provider>
      )
}