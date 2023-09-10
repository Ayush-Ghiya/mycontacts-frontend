import React, { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineClose } from "react-icons/ai";
import {
  email_validation,
  contact_name_validation,
  num_validation,
  
} from "@/utils/inputValidations";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./Input";
import { insertContact } from "@/utils/insertContact";
import Loader from "./Loader";
const AddNewContact = ({fetchData}) => {
  const [isOpen, setIsOpen] = useState(false);
const [isLoading, setIsLoading] = useState(false);
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  
    
  const onSubmit = methods.handleSubmit(async(data) => {
    console.log(data);
    setIsLoading(true);
    await insertContact(data,setIsLoading,fetchData,setIsOpen);
    data=null;
    methods.reset();
    setSuccess(true);

  });
  return (
    <>
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
      <button
        className="transition-all duration-300 inline-flex items-center p-3 ml-2 text-xl font-medium dark:bg-blue-950 dark:hover:bg-blue-700   text-white hover:bg-sky-800 bg-sky-600 rounded-full hover:shadow-xl"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <AiOutlinePlusSquare className="" />
      </button>
      {isOpen && (
        <div className="fixed backdrop-blur-md z-10 inset-0 overflow-y-auto ">
          <div className=" flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0  ">
              <div
                className=" absolute inset-0 bg-gray-900 opacity-75"
                onClick={() => setIsOpen(!isOpen)}
              ></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

            <div className=" inline-block align-bottom bg-white dark:bg-slate-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              
              <div className="my-10">
              <FormProvider {...methods}>
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="container"
            >
                <Input {...contact_name_validation}/>
              <Input {...email_validation} />
              <Input {...num_validation} />
              <div className=" px-4 py-3 sm:px-6 flex gap-2 mb-4">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className="dark:bg-sky-950 dark:hover:bg-sky-900 inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-sky-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-sky-700 focus:shadow-outline-sky transition ease-in-out duration-150 sm:text-sm sm:leading-5"

                        onClick={onSubmit}
                    
                  >
                    {!isLoading && "Insert 👍"} {isLoading && <Loader/>}
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 dark:bg-gray-900 dark:hover:bg-gray-800 bg-gray-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </form>
          </FormProvider>
                
              </div>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewContact;
