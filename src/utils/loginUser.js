import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const loginUser = async(data,setIsLoading,router)=>{
    
    axios.post('https://contactapi.onrender.com/api/users/login', data)
    .then(function (response) {
      
      
      console.log(response);
      setIsLoading(false);
      if(response.status === 200){
          localStorage.setItem("token",response.data.accessToken);
          toast.success('Login Successful', {
              position: "top-center",
              autoClose: 3500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
            setTimeout(() => {
            
              router.push('/')
            }, 2000);


      }
      })
    .catch(function (error) {
      console.log(error.response);
      setIsLoading(false);
       if(error.response.status === 401){
        toast.error("Please enter Correct details or Register Again", {
          position: "top-center",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }else{

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
      }
    });
  }