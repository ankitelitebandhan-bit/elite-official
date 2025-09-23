import React from "react";

import logo from "../assets/logo_png.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full  justify-between items-center top-5 left-0 right-0 px-4 py-3 z-10  ">
      <div className="flex items-center gap-2 text-pink-500 font-semibold text-xl">
        <div className="rounded-full">
          <img src={logo} alt="Logo" className="h-12 sm:h-16 ml-5" />
        </div>
      </div>

      {/* Login Section */}
      <Link
        to="https://www.elitebandhan.com/user-dashboard/login.php"
        className="hover:underline"
      >
        <h2 className="text-[#C77F34] font-semibold text-lg sm:text-xl mr-5">
          Login
        </h2>
      </Link>
    </div>
  );
};

export default Navbar;
