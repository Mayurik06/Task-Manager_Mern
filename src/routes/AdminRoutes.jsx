import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddUser from "../pages/admin/AddUser";
import LeaveManagement from "../pages/admin/LeaveManagement";
import AssignTask from "../pages/admin/AssignTask";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ViewEmployee from "../pages/admin/ViewEmployee";
import GetEmployeeById from "../pages/admin/getEmployeeById";

function AdminRoutes() {
  const location = useLocation();

  const getHeading = (pathname) => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/admin/dashboard":
        return "Dashboard";
      case "/admin/add-user":
        return "Add User";
      case "/admin/leave-management":
        return "Leave Management";
      case "/admin/assign-task":
        return "Assign Task";
      case "/admin/get-user":
        return "Employees";
      case "/admin/get-user/:id":
        return "Update Employee";
      default:
        return "";
    }
  };

  const heading = getHeading(location.pathname);
  return (
    <Sidebar role="admin">
      <Header heading={heading} />
      <div className="mt-16 lg:mt-24 mb-28 lg:mb-0">
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/assign-task" element={<AssignTask />} />
          <Route path="/get-user" element={<ViewEmployee />} />
          <Route path="/get-user/:id" element={<GetEmployeeById />} />
        </Routes>
      </div>
    </Sidebar>
  );
}

export default AdminRoutes;
