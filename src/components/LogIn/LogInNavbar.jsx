import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInNavbar = () => {
  return (
    <nav className="p-5 bg-white shadow flex items-center justify-center relative z-50">
      <div className="flex justify-between items-center">
        <Link to="/">
          <span className="text-2xl text-blue-800 font-bold font-[Poppins] cursor-pointer">
            OUTFITS
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default LogInNavbar;
