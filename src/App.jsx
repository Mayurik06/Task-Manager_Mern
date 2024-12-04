import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import SetPassword from "./pages/auth/SetPassword";
import PasswordPage from "./pages/auth/PasswordPage";

function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/password-page/:id" element={<PasswordPage/>}/>
      <Route path="/set-password/:id" element={<SetPassword/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/user/*" element={<PrivateRoute requiredRole="user"><UserRoutes /></PrivateRoute>} />
        <Route path="/admin/*" element={<PrivateRoute requiredRole="admin"><AdminRoutes /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
