import { deleteContact } from "@/utils/deleteContact";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone,AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Loader from "./Loader";
import { ToastContainer } from "react-toastify";
import { editContact } from "@/utils/editContact";

const ContactItem = ({name,phone,email,id,fetchData}) => {
  const handleChildClick = (e) => {
    e.stopPropagation();
    console.log("child Clicked");
  };
  
  const [contactName, setContactName] = useState(name);
  const [contactEmail, setContactEmail] = useState(email);
  const [contactPhone, setContactPhone] = useState(phone);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  

  
  
  
  const handleDelete =async() =>{
    setIsLoading(true);
    const token = localStorage.getItem("token");
    deleteContact(id,token,setIsLoading,fetchData,setIsOpen);
  }
  const handleEdit =async() =>{
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const data = {
      name : contactName,
      email : contactEmail,
      phone : contactPhone
    }
    console.log(data);
    editContact(id,token,setIsLoading,fetchData,setIsOpen,data);
  }
  return (
    <React.Fragment >
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
      <div key={id}
        className="mt-2 mx-2 p-2  cursor-default  flex justify-between border-2 dark:border transition-all duration-150 focus:bg-gray-200  hover:bg-gray-200 border-gray-100 rounded-xl shadow-sm dark:border-slate-700 dark:shadow-slate-600 dark:text-white  dark:hover:bg-slate-700"
        
      >
        <div className="flex items-center justify-between  hover:cursor-pointer  focus:bg-gray-200 transition-all duration-300 w-1/4 md:w-full rounded-xl " onClick={() => setIsOpen(!isOpen)}>
          <h3 className="font-medium text-xl capitalize p-4">{name}</h3>  
        </div>
        <div className="flex gap-2 items-center justify-center mr-2 w-2/4 md:w-auto">
            <a
              onClick={handleChildClick}
              href={`tel:${phone}`}
              className="transition-all duration-300 px-3 py-2 ml-2 text-xl font-medium border dark:border-slate-400  border-gray-800 hover:border-sky-600 hover:bg-sky-600 hover:text-white focus:bg-sky-600  rounded-sm focus:shadow-xl focus:text-white "
            >
              <AiOutlinePhone />
            </a>
            <a
              onClick={handleChildClick}
              href={`mailto:${email}`}
              className="transition-all duration-300 px-3 py-2 ml-2 text-xl font-medium border dark:border-slate-400   border-gray-800 hover:border-sky-600 hover:bg-sky-600 hover:text-white focus:bg-sky-600  rounded-sm focus:shadow-xl focus:text-white"
            >
              <AiOutlineMail className="" />
            </a>
          </div>
      </div>
      {isOpen && (
        <div className="fixed backdrop-blur-md z-10 inset-0 overflow-y-auto " >
            
          <div className=" flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          
            <div className="fixed inset-0  ">
              <div className=" absolute inset-0 bg-gray-900 opacity-75" onClick={()=>setIsOpen(!isOpen)}></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

            <div className=" inline-block align-bottom bg-white dark:bg-slate-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
            <AiOutlineClose className="dark:text-white absolute right-4 top-4 text-xl cursor-pointer" onClick={()=>setIsOpen(!isOpen)}/>
                <div className={`m-10 ${!editOpen && "w-[80vw]"}`}>

                
              <div className="relative mb-4 ">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-100 mr-4"
                >
                  Name
                </label>
                {editOpen ? 
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-800 dark:shadow-slate-600 dark:border-slate-600 dark:shadow-sm dark:text-white"
                />: 
                <p className="inline-block  bg-white rounded text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-700   dark:shadow-slate-600 dark:text-white">{contactName}</p>}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-100 mr-4"
                >
                  Email
                </label>
                {editOpen ? 
                <input
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-800 dark:shadow-slate-600 dark:border-slate-600 dark:shadow-sm dark:text-white"
                />: 
                <p className="inline-block  bg-white rounded text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-700   dark:shadow-slate-600 dark:text-white">{contactEmail}</p>
                }
              </div>
              <div className="relative mb-4 ">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-100 mr-4"
                >
                  Phone
                </label>
                {editOpen ? 
                <input
                onChange={(e) => setContactPhone(e.target.value)}
                value={contactPhone}
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-800 dark:shadow-slate-600 dark:border-slate-600 dark:shadow-sm dark:text-white"
                />: 
                <p className=" inline-block  bg-white rounded text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out dark:bg-slate-700   dark:shadow-slate-600 dark:text-white">{contactPhone}</p>}
              </div>
              </div>

              <div className=" px-4 py-3 sm:px-6 flex gap-2 mb-4">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  {editOpen ?<button
                    type="button"
                    className="dark:bg-sky-950 dark:hover:bg-sky-900 inline-flex justify-center items-center gap-2  w-full rounded-md border border-transparent px-4 py-2 bg-sky-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-sky-700 focus:shadow-outline-sky transition ease-in-out duration-150 sm:text-sm sm:leading-5 "
                    onClick={() => {
                      handleEdit();
                    }}
                  >
                    {!isLoading && "Edit Done ✅"} {isLoading && <Loader/>}
                  </button> : <button
                    type="button"
                    className="dark:bg-sky-950 dark:hover:bg-sky-900 inline-flex items-center gap-2 justify-center w-full rounded-md border border-transparent px-4 py-2 bg-sky-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-sky-400 focus:outline-none focus:border-sky-700 focus:shadow-outline-sky transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => {
                      setEditOpen(!editOpen);
                    }}
                  >
                    <FiEdit/> Edit 
                  </button>}
                  
                  
                </span>
                <span>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 dark:bg-red-900 dark:hover:bg-red-800 bg-red-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-400 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={()=>handleDelete()}
                  >
                     {!isLoading && "Delete"} {isLoading && <Loader/>}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ContactItem;

{
  /* <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                     Delete Modal Title
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur amet labore.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */
}
