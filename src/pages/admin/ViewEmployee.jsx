import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { IoIosSearch } from "react-icons/io";
import UserTable from "../../components/UserTable";
import UserGrid from "../../components/UserGrid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteUser from "../../components/DeleteUserf";
import PaginationCom from "../../components/PaginationCom";

function ViewEmployee() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    const token = sessionStorage.getItem("authToken"); 
    if (token) {
     const decoded = jwtDecode(token);
      setLoggedInUserId(decoded.id); 
    }

    const getEmployee = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/get/user");
        setUsers(response.data.users);
      } catch (error) {
        console.log("error", error);
      }
    };
    getEmployee();
  }, []);

  const filterUser = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.aliasEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filterUser.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filterUser.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
 setCurrentPage(value);
  };

  const handleDeleteClick = (id) => {
    if (id === loggedInUserId) {
      toast.error("You cannot delete your own account.");
      return;
    }

    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/delete/user/${selectedUserId}`
      );
      if (response.status === 200) {
        toast.success("User deleted successfully");
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== selectedUserId)
        );
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user. Please try again.");
    } finally {
      setIsModalOpen(false);
      setSelectedUserId(null);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  return (
    <div className="mx-auto px-4 z-10">
      <ToastContainer />
      <div className="mb-4">
        {/* Search Input */}
        <div className="flex items-center border-b w-full lg:w-[300px] mb-4">
          <IoIosSearch size={26} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>

        {/* Responsive User Data Display */}
        <div className="overflow-x-auto">
          {/* Table for Large Screens */}
          <div className="hidden md:block">
            <UserTable user={currentUsers} ondelete={handleDeleteClick} />
          </div>

          <div className="flex flex-col gap-4 md:hidden">
            <UserGrid user={filterUser} ondelete={handleDeleteClick} />
          </div>
        </div>

        {/* Pagination */}
        <div className="md:flex items-center justify-center mt-8 hidden">
          <PaginationCom totalPage={totalPages} currentPage={currentPage} handleChange={handlePageChange}/>
        </div>
      </div>

      {/* Confirmation Modal */}
     <DeleteUser close={handleModalClose} confirm={handleDeleteConfirm} isOpen={isModalOpen}/>
    </div>
  );
}

export default ViewEmployee;
