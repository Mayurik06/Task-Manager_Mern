import React, { useState } from "react";
import AddUserFrom from "../../components/AddUserFrom";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    aliasEmail: "",
    email: "",
    role: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/create/user",
        formData
      );
      toast.success(response.data.message || "User created successfully");
      setFormData({
        name: "",
        aliasEmail: "",
        email: "",
        role: "",
        position: "",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to create user";
      toast.error(errorMessage);
    }
  };

  return (
  
      <div className="flex flex-col items-center">
        <AddUserFrom submit={handleSubmit} change={handleChange} value={formData} btnVal="Add Employee"/>
      </div>
  );
}
