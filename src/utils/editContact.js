import axios from "axios";
import { toast } from "react-toastify";
export const editContact = async(id,token,setIsLoading,fetchData,setIsOpen,data)=>{
    await axios.put('https://contactapi.onrender.com/api/contacts/'+id,data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then(function (response) {
      
      
      console.log(response);
      setIsLoading(false);
      if(response.status === 200){
         
          toast.success('Contact Updated', {
              position: "top-center",
              autoClose: 3500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
            setIsOpen(false);
            setTimeout(() => {
                fetchData();
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