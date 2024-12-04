import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:4000/api/setPassword/${id}`,
        { password, confirmPassword },
        { withCredintials: true }
      );

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
      error.response?.data?.message || "Something went wrong";
    toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 shadow-all p-8">
        <p className="text-2xl font-bold">Set Password</p>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="border outline-none w-[300px] p-2 shadow-sm"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirm passowrd">Confirm Password</label>
          <input
            type="text"
            className="border outline-none w-[300px] p-2 shadow-sm"
            value={confirmPassword}
            name="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="bg-black text-white px-4 py-2 font-bold rounded-sm" type="submit">
          Login
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default SetPassword;
