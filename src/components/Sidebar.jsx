import React from "react";
import { GoTasklist } from "react-icons/go";
import { AiOutlineDashboard } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import { LiaEnvelopeOpenSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Sidebar({ children, role }) {
  const AdminMenus = [
    {
      title: "Dashboard",
      src: "/admin/dashboard",
      icon: <AiOutlineDashboard />,
    },
    { title: "Add Employee", src: "/admin/add-user", icon: <FiUserPlus /> },
    { title: "View Employees", src: "/admin/get-user", icon: <SlPeople /> },
    { title: "Assign Tasks", src: "/admin/assign-task", icon: <BiTask /> },
    {
      title: "Leave Management",
      src: "/admin/leave-management",
      icon: <LiaEnvelopeOpenSolid />,
    },
  ];
  const EmployeeMenus = [
    {
      title: "Dashboard",
      src: "/user/dashboard",
      icon: <AiOutlineDashboard />,
    },
    { title: "Your Tasks", src: "/user/tasks", icon: <BiTask /> },
    {
      title: "Apply Leave",
      src: "/user/apply-leave",
      icon: <LiaEnvelopeOpenSolid />,
    },
  ];
  const menus = role === "admin" ? AdminMenus : EmployeeMenus;

  return (
    <div className="relative">
      <div className="lg:h-screen lg:w-64 w-full lg:p-5 p-4 lg:pt-8 fixed bottom-0 lg:left-0 lg:top-0 lg:shadow-right shadow-top rounded-lg lg:rounded-none bg-white z-50">
        <div
          className={`lg:flex gap-x-4 items-center justify-start p-2 duration-200 hidden border-b`}
        >
          <GoTasklist className="cursor-pointer duration-500 text-3xl" />
          <span className="font-medium text-xl duration-300">TaskIt</span>
        </div>
        <ul className="flex lg:flex-col items-center justify-evenly lg:items-start lg:pt-4">
          {menus.map((menu, index) => (
            <Link to={menu.src} className="w-full"  key={index}>
              <li
                className="cursor-pointer hover:bg-gray-200 px-2 lg:py-4 py-2 rounded-md lg:w-full"
              >
                <div className="flex flex-col lg:flex-row items-center lg:gap-4">
                  <span className="text-3xl">{menu.icon}</span>
                  <span className="text-[10px] text-center lg:text-left lg:text-[16px]">
                    {menu.title}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="lg:ml-[300px] lg:mr-10 m-4 flex-1">{children}</div>
    </div>
  );
}

export default Sidebar;
