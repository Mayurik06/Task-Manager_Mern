import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import AssingTaskFrom from "../../components/AssingTaskFrom";
import axios from "axios";
import { toast } from "react-toastify";

function AssignTask() {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    priority: "",
    assignTo: null,
    dueDate: "",
    description: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setTaskDetails((prev) => {
          return { ...prev, assingBy: decoded.aliasEmail };
        });
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserSelect = (user) => {
    setTaskDetails((prev) => ({
      ...prev,
      assignTo: user.aliasEmail,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/create/task",
        taskDetails
      );
      if (response.data.success) {
        toast.success("Task Assinged Successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error creating task");
    }
  };

  return (
    <div>
      <AssingTaskFrom
        taskDetails={taskDetails}
        handleInputChange={handleInputChange}
        handleUserSelect={handleUserSelect}
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default AssignTask;
