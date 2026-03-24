import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-gray-950 text-white border-b border-white/10">
      <h1 className="text-2xl font-bold text-purple-400">Task Master</h1>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-purple-400 transition m-auto">
          Home
        </Link>
        <Link
          to="/tasks"
          className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition"
        >
          Open App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;