import { Input } from "@/components/Input";
import Navbar from "@/components/navbar";
import { FormProvider, useForm } from "react-hook-form";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  email_validation,
  password_validation,
} from "@/utils/inputValidations";
import {  ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Loader from "@/components/Loader";
import { loginUser } from "@/utils/loginUser";
import { useRouter } from "next/router";
import { isLoggedIn, requireAuth } from "@/utils/requireAuth";
const login = () => {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/");
    }
  }, [router])
  
  const methods = useForm();
  
  const [responseData, setResponseData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const onSubmit = methods.handleSubmit(async(data) => {
    await setIsLoading(true);
    console.log(data);
    await loginUser(data,setIsLoading,router);    
    methods.reset();
  });
  
  return (
    <div className="h-screen overflow-hidden dark:bg-slate-900">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      
      <div className="h-[90vh]  flex items-center justify-center mt-10">
        <div className="md:w-2/5 w-[80vw]  pt-6 border-2 rounded-md shadow-md flex flex-col h-[60vh] dark:border-slate-800 dark:bg-slate-900 dark:shadow-xl">
          <h2 className="text-gray-900 dark:text-white text-2xl mb-1 font-medium title-font text-center">
            Login Now
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400 text-center">
            Save Your contacts Easily
          </p>
          
          <FormProvider {...methods}>
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="container"
            >
              <Input {...email_validation} />
              <Input {...password_validation} />
              <div className="mt-5 mx-8 md:mx-12">
                
                <button
                  onClick={onSubmit}
                  className="dark:bg-blue-950 dark:hover:bg-blue-800 transition-colors duration-300 w-full  text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg flex justify-center items-center gap-2"
                >
                  {!isLoading && "Login"} {isLoading && <Loader/>}
                </button>
                
              </div>
            </form>
          </FormProvider>

          <p className="text-xs text-gray-500 mt-3 text-center dark:text-gray-400">
            Not Registered Yet?{" "}
            <Link className="text-blue-700 cursor-pointer" href="/Registration">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};



export default login;
