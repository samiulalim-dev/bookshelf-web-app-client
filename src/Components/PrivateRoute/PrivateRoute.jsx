import React, { use } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { users, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!users) {
    return <Navigate to="/logIn" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
