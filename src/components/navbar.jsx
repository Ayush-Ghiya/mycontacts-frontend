import React from "react";
import { FaPowerOff } from "react-icons/fa";
import DarkModeSwitcher from "./darkModeSwitcher";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const handleLogout=()=>{

    
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <div className="fixed w-full top-0 flex flex-row flex-wrap items-center justify-between h-[10vh] border-b-sky-700 border-b-2  bg-sky-600 shadow-md shadow-gray-500 text-white mb-2 dark:shadow-slate-950 dark:shadow-md dark:bg-blue-950 dark:border-b-slate-950">
      <h1 className="ml-4 text-xl font-bold">MyContacts</h1>
      <div className="flex flex-wrap items-center gap-4 mr-4  justify-center font-thin">
          <DarkModeSwitcher/>
        <button 
        className="flex items-center justify-center ml-2 text-xl rounded-full p-3 hover:bg-slate-900 transition-colors duration-300" 
        title="Logout"
        onClick={()=>handleLogout()}
        >
          <FaPowerOff />
        </button>
        
        
      </div>
    </div>
  );
};

export default Navbar;
