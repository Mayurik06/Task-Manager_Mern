import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Fix import: No brackets for jwt-decode

function PrivateRoute({ children, requiredRole }) {
  const token = sessionStorage.getItem("authToken");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const decodedToken = jwtDecode(token);

    // Check if token has expired
    const currentTime = Date.now() / 1000; // Get current time in seconds
    if (decodedToken.exp < currentTime) {
      console.error("Token has expired");
      sessionStorage.removeItem("authToken");
      return <Navigate to="/" />;
    }

    // Validate role if specified
    if (requiredRole && decodedToken.role !== requiredRole) {
      return <Navigate to={decodedToken.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} />;
    }

    return children; // Render children if all checks pass
  } catch (error) {
    console.error("Invalid token", error);
    sessionStorage.removeItem("authToken");
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
