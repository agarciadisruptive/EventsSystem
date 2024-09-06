import {useAuth} from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import {useEffect} from 'react';

function RegisterPage() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {signup, isAuthenticated, errors: registerErrors} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
      <ul className="mt-1.5 list-disc list-inside">
        {registerErrors.map((error, i) => (
          <li className="flex p-4 bg-gray-800 text-red-400" key={i}>{error}</li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Events System    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Register
          </h1>
          <form 
            className="space-y-4 md:space-y-6" 
            onSubmit={onSubmit}>
              <div>
                <label className="">Username</label>
                <input 
                  type="text" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  {...register("username", {required:true})}/>
                {errors.username && (
                  <p className="text-red-500">Username is required</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input 
                  type="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="name@disruptivestudio.com" 
                  {...register("email", {required:true})}/>
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  {...register("password", {required:true})}/>
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
              </p>
          </form>
        </div>
      </div>
    </div>
    </section>
  )
}

export default RegisterPage