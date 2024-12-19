import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function UserTable({ user, ondelete }) {
  return (
    <div>
      {user.length > 0 ? (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="bg-black text-white">
              <td className="py-2 px-4 border-b text-left">Name</td>
              <td className="py-2 px-4 border-b text-left">Position</td>
              <td className="py-2 px-4 border-b text-left">Work ID</td>
              <td className="py-2 px-4 border-b text-left">Role</td>
              <td className="py-2 px-4 border-b text-left">
                Tasks
              </td>
              <td className="py-2 px-4 border-b text-left"></td>
              <td className="py-2 px-4 border-b text-left"></td>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.position}</td>
                <td className="py-2 px-4 border-b">{user.aliasEmail}</td>
                <td className={`py-2 px-4 border-b ${user.role==="admin" ? 'font-bold':""}`}>{user.role}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/admin/get-user/${user._id}`}>
                    <button className="text-white bg-black px-4 py-2 font-bold rounded-sm">
                     View Tasks
                    </button>
                  </Link>
                </td>
                <td>
                  <RiDeleteBin5Fill
                    size={26}
                    onClick={() => ondelete(user._id)}
                    className="cursor-pointer"
                  />
                </td>
                <td>
                  <Link to={`/admin/get-user/${user._id}`}>
                    <FaRegEdit size={26} />
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
  );
}

export default UserTable;
