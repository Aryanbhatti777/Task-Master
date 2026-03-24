import React from "react";
import { Link } from "react-router-dom";

const Preview = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A simple interface built for productivity
          </h2>
          <p className="text-gray-400 mb-6">
            Create, manage, and complete tasks with a fast and user-friendly layout.
          </p>

          <Link
            to="/tasks"
            className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Open Task App
          </Link>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-3xl p-6 shadow-xl">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a task..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
            <button className="bg-purple-500 px-5 rounded-xl hover">Add</button>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>Complete UI design</span>
              <span className="text-green-400">Done</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>Write project README</span>
              <span className="text-yellow-400">Pending</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>Deploy app</span>
              <span className="text-yellow-400">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;