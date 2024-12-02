import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import SetPassword from "./pages/auth/SetPassword";

function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/set-password/:id" element={<SetPassword/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
