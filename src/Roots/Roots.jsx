import React, { use } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Components/Loading/Loading";

const Roots = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {/* header */}
      <div className="sticky   top-0 left-0 right-0 z-50">
        <Navbar></Navbar>
      </div>
      {/* main */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Roots;
