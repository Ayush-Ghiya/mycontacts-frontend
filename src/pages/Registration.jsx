import { Input } from "@/components/Input";
import Navbar from "@/components/navbar";
import {
  email_validation,
  name_validation,
  password_validation,
} from "@/utils/inputValidations";
import Link from "next/link";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios');
const Registration = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const registerUser = async(data)=>{
    axios.post('https://contactapi.onrender.com/api/users/register', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const onSubmit = methods.handleSubmit(async(data) => {
    console.log(data);
    await registerUser(data);
    methods.reset();
    setSuccess(true);
    {success && (
      toast.success('Registration Successful  🚀', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    )}
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

      <div className="h-[90vh] flex items-center justify-center mt-10">
        <div className="md:w-2/5 w-[80vw]  pt-6 border-2 rounded-md shadow-md flex flex-col h-[70vh] dark:border-slate-800 dark:bg-slate-900 dark:shadow-xl">
          <h2 className="text-gray-900 dark:text-white text-2xl mb-1 font-medium title-font text-center">
            Lets Get Started
          </h2>
          <p className="leading-relaxed mb-5 dark:text-gray-400  text-gray-600 text-center">
            Save Your contacts Easily
          </p>
          <FormProvider {...methods}>
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="container"
            >
              <Input {...name_validation} />
              <Input {...email_validation} />
              <Input {...password_validation} />
              <div className="mt-5 mx-8 md:mx-12">
                <button
                  onClick={onSubmit}
                  className="dark:bg-blue-950 dark:hover:bg-blue-800 transition-colors duration-300  w-full  text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg"
                >
                  Lets Go&nbsp;&nbsp;&nbsp;🚀
                </button>
                
              </div>
            </form>
          </FormProvider>
          <p className="text-xs text-gray-500 mt-3 text-center dark:text-gray-400">
            Already Registered?{" "}
            <Link className="text-blue-700 cursor-pointer" href="/login">
              Login now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
