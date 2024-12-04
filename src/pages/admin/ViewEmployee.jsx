import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function ViewEmployee() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/get/user");
        setUsers(response.data.users);
        console.log(users);
      } catch (error) {
        console.log("error", error);
      }
    };
    getEmployee();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <div className="flex items-center border-b w-full lg:w-[300px]">
          <IoIosSearch size={26} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 outline-none bg-transparent"
          />
        </div>

        <div className="overflow-x-auto">
          {users ? (
            <table className="min-w-full border border-gary-300">
              <caption className="p-4 font-semibold text-lg text-gray-700">
                Employee Information and Performance Tracking
              </caption>

              <thead className="bg-gary-100">
                <tr className="bg-black text-white">
                  <td className="py-2 px-4 border-b text-left">Name</td>
                  <td className="py-2 px-4 border-b text-left">Position</td>
                  <td className="py-2 px-4 border-b text-left">Work ID</td>
                  <td className="py-2 px-4 border-b text-left">Role</td>
                  <td className="py-2 px-4 border-b text-left">
                    Track Performance
                  </td>
                  <td className="py-2 px-4 border-b text-left"></td>
                  <td className="py-2 px-4 border-b text-left"></td>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.position}</td>
                    <td className="py-2 px-4 border-b">{user.aliasEmail}</td>
                    <td className="py-2 px-4 border-b">{user.role}</td>
                    <td className="py-2 px-4 border-b">
                      <Link to={`/${user._id}`}>
                        <button className="text-white bg-black px-4 py-2 font-bold rounded-sm">
                          Track Performance
                        </button>
                      </Link>
                    </td>
                    <td>
                    <Link to={`/${user._id}`}>
                      <RiDeleteBin5Fill size={26}/>
                    </Link>  
                    </td>
                    <td>
                      <Link to={`/${user._id}`}>
                      <FaRegEdit size={26}/>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No Users Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
