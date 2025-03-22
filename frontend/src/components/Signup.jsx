import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';


function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

   const { register, handleSubmit, formState: { errors } } = useForm();
   
     const onSubmit = async (data) => {

      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      };
       //console.log(data);
       document.getElementById("my_modal_3").close(); // Close modal after successful login

       await axios
       .post(`${import.meta.env.VITE_API_URL}/user/signup`, userInfo)
       .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
     };

  return (
    <>
    <div className="flex h-screen items-center justify-center">
    <div className=" shadow-2xl p-7 rounded-md w-[600px]">
        <div className="model-box">

              {/* <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link> */}

            <form onSubmit={handleSubmit(onSubmit)} method="dialog" className='relative'>
            {/* if there is a button in form, it will close the modal */}
            <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            <h3 className="font-bold text-lg">Signup</h3>
             
            {/* name */}
            <div className="mt-4 space-y-2">
                <span>Name</span>
                <br/>
                <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div> 

            {/* email */}
            <div className="mt-4 space-y-2">
                <span>Email</span>
                <br/>
                <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
                />
                <br />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* password */}
            <div className="mt-4 space-y-2">
                <span>Password</span>
                <br/>
                <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"{...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p >
                Have Account?{" "}
                <Link
                  
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                >
                  Login
                </Link>{" "}
                <Login />
              </p>
            </div>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup
