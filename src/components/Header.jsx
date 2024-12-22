import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Header({ heading }) {
  const [showMenu, setShowMenu] = useState(false);
  const [username, setUsername] = useState("");
const navigate=useNavigate();

  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.name || "User"); // Replace "username" with the actual field from your token
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [token]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const logout = async () => {
    try {
 
      const response = await axios.post("http://localhost:4000/api/logout");

      if (response.status === 200) {
        sessionStorage.removeItem("authToken");
        console.log("User logged out successfully");
      navigate("/")
      } else {
        console.error("Logout failed:", response.data);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="fixed lg:left-72 left-0 lg:right-8 top-0 right-0 px-4 lg:pt-4 lg:px-0 backdrop-blur-md transition-all duration-300 z-50">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <GoTasklist size={26} className="lg:hidden cursor-default" />
          <span className="lg:text-3xl text-xl font-bold cursor-default">{heading}</span>
        </div>
        <div>
          <CgProfile size={26} onClick={toggleMenu} />

          {showMenu && (

            <div className="absolute flex flex-col right-6 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10 p-2">
              <div className="p-4 text-gray-700">
                <span className="block font-semibold cursor-pointer">Hey, {username}</span>
              </div>
              <button
                className=" text-black px-4 py-2 font-bold rounded-sm"
                onClick={logout}
              >
                Logout
              </button>
            </div>
           
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
