import React from 'react'
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function UserGrid({user,ondelete}) {
  return (
    <div>
    {user.length > 0 ? (
      user.map((user) => (
        <div key={user._id} className="relative border p-4 mb-4">
          <div>
            <p>
              Name: <span>{user.name}</span>
            </p>
            <p>
              Position: <span>{user.position}</span>
            </p>
            <p>
              Work Id: <span>{user.aliasEmail}</span>
            </p>
            <p>
              Role: <span className={`${user.role==="admin" ? 'font-bold':""}`}>{user.role}</span>
            </p>
          </div>
          <div className="mt-2">
            <Link to={`admin//get-user/${user._id}`}>
              <button className="text-white bg-black px-4 py-2 font-bold rounded-sm">
                View Tasks
              </button>
            </Link>
          </div>
          <div className="absolute top-2 right-2 flex gap-2">
              <RiDeleteBin5Fill size={26} onClick={()=>ondelete(user._id)} className='cursor-pointer'/>
            <Link to={`/admin/get-user/${user._id}`}>
                  <FaRegEdit size={26} />
                </Link>
          </div>
        </div>
      ))
    ) : (
      <div>No Users Found</div>
    )}
  </div>
  )
}

export default UserGrid
