import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        { aliasEmail:email }
      );

      const message = response.data.message;
      const id=response.data.id;
      console.log(id);
      if(message==="redirect"){
        navigate(`/password-page/${id}`)
      }else if(message==="reset"){
        toast.success("A password reset link has been sent to your email address. Please check your inbox to proceed.");
      }

    } catch (error) {
      const errorMessage =
      error.response?.data?.message || "Something went wrong";
    console.log("error", errorMessage);
    toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <p className="text-2xl font-bold mb-4">Connect with you Team!</p>
        <div className="shadow-all p-8">
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="email" className="font-semibold">
                Continue with your work id
              </label>
              <input
                type="text"
                placeholder="m@example.com"
                className="border p-2 outline-none w-[300px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-black text-white px-4 py-2 font-bold rounded-sm">
                Connect
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Login;
