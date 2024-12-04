import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddUserForm() {
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
      const response = await axios.post("http://localhost:4000/api/create/user", formData);
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
    <div className="lg:w-fit pl-8 pr-8 pt-8 pb-10 shadow-all bg-white rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <label htmlFor="position" className="font-semibold">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Position of the Employee"
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
        </div>

        <div className="flex gap-4 lg:items-end flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
            <label htmlFor="aliasEmail" className="font-semibold">
              Give a Work ID
            </label>
            <input
              type="text"
              name="aliasEmail"
              value={formData.aliasEmail}
              onChange={handleChange}
              placeholder="m@example.com"
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="font-semibold">
              Email ID
              <span className="text-sm block text-gray-500 font-light">
                (Ensure the email ID is active and accessible by the employee)
              </span>
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="m@gmail.com"
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="role" className="font-semibold">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 outline-none lg:w-[300px] w-full"
          >
            <option value="" disabled>
              Role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 font-bold rounded-sm mt-8"
        >
          Add Employee
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddUserForm;
