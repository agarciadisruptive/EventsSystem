import {useCategories} from '../context/CategoriesContext';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import {useEffect} from 'react';

function CategoriesPage() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {categories, createCategory, getCategories} = useCategories();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createCategory(data);
  });

  useEffect(() => {
    getCategories();
  })

  return (
    <div>
        <div className='m-5'>
            <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">New category</h5>
                <form 
                    className="space-y-4 md:space-y-6 " 
                    onSubmit={onSubmit}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category name</label>
                            <input 
                                type="name" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="name@disruptivestudio.com" 
                                {...register("name", {required:true})}/>
                            {errors.email && (
                                <p className="text-red-500">Email is required</p>
                            )}
                        </div>
                        <button type="submit" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Create
                        </button>
                </form>
            </div>
        </div>
        <div className='m-5'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">All categories</h5>
            
        </div>
    </div>
  )
}

export default CategoriesPage
