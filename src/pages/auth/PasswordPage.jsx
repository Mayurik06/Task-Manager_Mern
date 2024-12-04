import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'

function PasswordPage() {
const [password,setPassword]=useState("");
const navigate = useNavigate();
const { id } = useParams();

const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
        const response=await axios.post(`http://localhost:4000/api/check-password/${id}`,{password});
        console.log(response)
        toast.success(response.data.message);

        if (response.data.token) {
          sessionStorage.setItem("authToken", response.data.token);
        }
  
        const isAdmin = response.data.role === "admin";
        if (isAdmin) {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
    } catch (error) {
        const errorMessage =
     await error.response?.data?.message || "Something went wrong";
    toast.error(errorMessage);
    }
}

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div>
      {/* <p className="text-2xl font-bold mb-4">Connect with you Team!</p> */}
      <div className="shadow-all p-8">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="email" className="font-semibold">
              Write Your Password
            </label>
            <input
              type="text"
              className="border p-2 outline-none w-[300px]"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-black text-white px-4 py-2 font-bold rounded-sm" type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer position="top-right" autoClose={3000} />
  </div>
  )
}

export default PasswordPage
