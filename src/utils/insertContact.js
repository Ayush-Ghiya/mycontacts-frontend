import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
export const insertContact = async(data,setIsLoading,fetchData,setIsOpen)=>{

    const token = localStorage.getItem("token");
    await axios.post('https://contactapi.onrender.com/api/contacts',data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then(function (response) {
      console.log(response);
      setIsLoading(false);
      if(response.status === 200){
          
          toast.success('New Contact Created.', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
            
                fetchData();
                setIsOpen(false);
              }, 2000);
            


      }
      })
    .catch(function (error) {
      console.log(error.response);
      setIsLoading(false);
       
      

        toast.error('Please Try Again', {
          position: "top-center",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      
    });
}