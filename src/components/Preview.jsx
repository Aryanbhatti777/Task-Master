import React from "react";
import { Link } from "react-router-dom";

const Preview = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16 bg-gray-950 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 break-words leading-tight">
            A simple interface built for productivity
          </h2>

          <p className="text-gray-400 mb-6 text-sm sm:text-base break-words">
            Create, manage, and complete tasks with a fast and user-friendly
            layout.
          </p>

          <Link
            to="/tasks"
            className="inline-block w-full sm:w-auto text-center bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Open Task App
          </Link>
        </div>

        <div className="w-full min-w-0 max-w-full bg-gray-900 border border-white/10 rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Preview</h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-4 min-w-0">
            <input
              type="text"
              placeholder="Add a task..."
              className="w-full min-w-0 flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none text-sm sm:text-base"
              disabled
            />

            <button className="w-full sm:w-auto bg-purple-500 px-5 py-3 rounded-xl text-sm sm:text-base">
              Add
            </button>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 min-w-0">
              <span className="min-w-0 break-words text-sm sm:text-base">
                Complete UI design
              </span>
              <span className="text-green-400 text-sm shrink-0">Done</span>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 min-w-0">
              <span className="min-w-0 break-words text-sm sm:text-base">
                Write project README
              </span>
              <span className="text-yellow-400 text-sm shrink-0">Pending</span>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 min-w-0">
              <span className="min-w-0 break-words text-sm sm:text-base">
                Deploy app
              </span>
              <span className="text-yellow-400 text-sm shrink-0">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;