import Navbar from "@/components/navbar";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import ContactItem from "@/components/contactItem";
import { useEffect, useState } from "react";
import AddNewContact from "@/components/addNewContact";
import { isLoggedIn } from "@/utils/requireAuth";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "@/components/Loader";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [responseData, setResponseData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    await axios
      .get("https://contactapi.onrender.com/api/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setResponseData(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
    
    fetchData();
  }, []);
  
  const filteredContacts = error ? {} :responseData?.data.filter((contact) => {
    const content = contact.name + contact.email + contact.phone;
    return content.toLowerCase().includes(search.toLowerCase());
  });



    
  
    console.log(responseData)
    
  
  return (
    <div className="h-screen overflow-hidden dark:bg-slate-900">
      <Navbar />
      <div className="h-[90vh] flex items-start justify-center mt-36">
        <div className="md:w-2/4 w-[95vw]  border-2 dark:border-slate-800 rounded-md bg-gray-200 dark:bg-slate-900 shadow-md flex flex-col h-max max-h-[70vh]">
          <div className="flex w-full justify-center mt-5 ">
            <div className="flex items-center">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <BiSearchAlt className="text-gray-600 text-xl dark:text-gray-400" />
                </div>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  id="voice-search"
                  className="border border-gray-300 placeholder:font-medium dark:bg-slate-900 dark:placeholder:text-gray-400  dark:border-gray-600 dark:shadow-slate-800  text-gray-900 placeholder:text-gray-400 text-sm rounded-lg focus:outline-none w-full pl-10 p-2.5
                  focus:shadow-lg transition-shadow duration-300 "
                  placeholder="Search..."
                  required
                />
              </div>
            </div>
            <AddNewContact fetchData={fetchData}/>
          </div>
          <div className={`mt-5 h-max w-full overflow-auto ${(isLoading) && "flex justify-center"} bg-white dark:bg-slate-800`}>
            {(isLoading)  && <Loader/>}
            {(!isLoading) &&
            filteredContacts.map((contact) => (
              <ContactItem
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                id={contact._id}
                fetchData={fetchData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
