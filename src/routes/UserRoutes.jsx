import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../pages/user/Dashboard";
import Task from "../pages/user/Task";
import Leave from "../pages/user/Leave";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function UserRoutes() {
    const location = useLocation();

    const getHeading = (pathname) => {
      switch (pathname) {
        case '/':
          return 'Home';
        case '/user/dashboard':
          return 'Dashboard';
        case '/user/tasks':
          return 'Tasks';
        case '/user/apply-leave':
          return 'Leave Management';
        default:
          return 'Page Not Found';
      }
    };

    const heading = getHeading(location.pathname);


  return (
    <Sidebar role="user">
      <Header heading={heading} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/apply-leave" element={<Leave />} />
      </Routes>
    </Sidebar>
  );
}

export default UserRoutes;
