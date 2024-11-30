import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import AdminDashboard from '../pages/admin/AdminDashboard';
import AddUser from '../pages/admin/AddUser';
import LeaveManagement from '../pages/admin/LeaveManagement';
import AssignTask from '../pages/admin/AssignTask';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';


function AdminRoutes() {
    const location = useLocation();

    const getHeading = (pathname) => {
      switch (pathname) {
        case '/':
          return 'Home';
        case '/admin/dashboard':
          return 'Dashboard';
        case '/admin/add-user':
          return 'Add User';
        case '/admin/leave-management':
          return 'Leave Management';
        default:
          return 'Page Not Found';
      }
    };

    const heading = getHeading(location.pathname);
  return (
    <Sidebar role="admin">
    <Header heading={heading}/>
          <Routes>
        <Route path='/dashboard' element={<AdminDashboard/>} />
        <Route path='/add-user' element={<AddUser/>} />
        <Route path='/leave-management' element={<LeaveManagement/>} />
        <Route path='/assign-task' element={<AssignTask/>} />
      </Routes>
    </Sidebar>

  )
}

export default AdminRoutes
