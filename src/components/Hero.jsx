import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm mb-4">
            Smart Task Management
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Organize your day with{" "}
            <span className="text-purple-400">Task Master</span>
          </h1>

          <p className="text-gray-300 mt-5 text-lg">
            Manage daily tasks, track progress, and stay productive with a clean
            and modern task management app.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/tasks"
              className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="border border-gray-700 hover:border-purple-400 px-6 py-3 rounded-xl font-semibold transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl">
          <div className="bg-gray-900 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Today's Tasks</h2>
              <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                3 Pending
              </span>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>Finish React project</span>
              <span className="text-yellow-400 text-sm">Pending</span>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>Design landing page</span>
              <span className="text-green-400 text-sm">Done</span>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>Push code to GitHub</span>
              <span className="text-yellow-400 text-sm">Pending</span>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">Progress</p>
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-3 w-1/3 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;