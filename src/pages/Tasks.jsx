import React from "react";
import Navbar from "../components/Navbar";

const Tasks = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
        <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-2xl border border-white/10">
          <h1 className="text-3xl font-bold mb-6 text-purple-400">My Tasks</h1>

          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Enter a task..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />
            <button className="bg-purple-500 hover:bg-purple-600 px-5 rounded-xl">
              Add
            </button>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>Sample task 1</span>
              <button className="text-red-400">Delete</button>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>Sample task 2</span>
              <button className="text-red-400">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;