import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn === false) return;
  <Navigate path="/" replace />;

  return children;
};

export default ProtectedRoute;
