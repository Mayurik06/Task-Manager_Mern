import React, { useState } from "react";
import { GoTasklist } from "react-icons/go";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { LiaEnvelopeOpenSolid } from "react-icons/lia";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const ArrowIcon = open ? IoIosArrowDropleft : IoIosArrowDropright;
  const role = "admin";
  const AdminMenus = [
    {
      title: "Dashboard",
      src: "/admindashboard",
      icon: <AiOutlineDashboard />,
    },
    { title: "Add Employee", src: "/createEmployee", icon: <IoPeople /> },
    { title: "Assign Tasks", src: "/assigntask", icon: <BiTask /> },
    {
      title: "Leave Management",
      src: "/leavemanagement",
      icon: <LiaEnvelopeOpenSolid />,
    },
  ];
  const EmployeeMenus = [
    { title: "Dashboard", src: "/dashboard", icon: <AiOutlineDashboard /> },
    { title: "Your Tasks", src: "/Task", icon: <BiTask /> },
    { title: "Apply Leave", src: "/leaves", icon: <LiaEnvelopeOpenSolid /> },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-30"
        } duration-300 p-5 pt-8 h-screen relative shadow-right`}
      >
        <ArrowIcon
          size={26}
          className={`absolute cursor-pointer -right-3 top-9`}
          onClick={() => setOpen(!open)}
        />
        <div className={`flex gap-x-4 items-center justify-start p-2 duration-200 ${open && 'border-b-2'}`}>
          <GoTasklist className="cursor-pointer duration-500 text-3xl" />
          {open && <span className="font-medium text-xl duration-300">TaskIt</span>}
        </div>
        <ul className="pt-6">
          {role === "user" &&
            EmployeeMenus.map((menu, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-200 px-2 py-4 rounded-md">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{menu.icon}</span>
                 {open &&  <span>{menu.title}</span>}
                </div>
              </li>
            ))}

            {role === "admin" &&
            AdminMenus.map((menu, index) => (
              <li key={index} className={`cursor-pointer hover:bg-gray-200 px-2 py-4 rounded-md`}>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{menu.icon}</span>
                 {open &&  <span className="duaration-300">{menu.title}</span>}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        Home page
      </div>
    </div>
  );
}

export default Sidebar;
