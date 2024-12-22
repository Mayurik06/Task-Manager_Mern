import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUserForm from "../../components/AddUserFrom";
import { useParams } from "react-router-dom";

function GetEmployeeById() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    aliasEmail: "",
    email: "",
    role: "",
  });
  const { id } = useParams();


  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/get/userById/${id}`
        );
        setFormData({
          name: response.data.user.name || "",
          position: response.data.user.position || "",
          aliasEmail: response.data.user.aliasEmail || "",
          email: response.data.user.email || "",
          role: response.data.user.role || "",
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    getEmployee();
  }, [id]);

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response=await axios.put(`http://localhost:4000/api/update/user/${id}`,formData);
      if (response.data.success) {
        toast.success("Employee updated successfully!");
      } else {
        toast.error(response.data.message || "Failed to update employee.");
      }
    } catch (error) {
     console.log(error) 
    }
  };


  return (
    <div className="flex flex-col items-center">
<AddUserForm change={handleChange} submit={handleSubmit} value={formData} btnVal="Update"/>
    </div>
  );
}

export default GetEmployeeById;
