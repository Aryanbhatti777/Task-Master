import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
    setTasks(parsedTasks);
  }, []);

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.filter((task) => !task.completed).length;
  const percentage =
    tasks.length === 0 ? 0 : (completedCount / tasks.length) * 100;

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-xs sm:text-sm mb-4">
            Smart Task Management
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Organize your day with{" "}
            <span className="text-purple-400">Task Master</span>
          </h1>

          <p className="text-gray-300 mt-5 text-base sm:text-lg">
            Manage daily tasks, track progress, and stay productive with a clean
            and modern task management app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/tasks"
              className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition text-center"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="border border-gray-700 hover:border-purple-400 px-6 py-3 rounded-xl font-semibold transition text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl">
          <div className="bg-gray-900 rounded-2xl p-4 sm:p-5 max-h-[320px] sm:max-h-[400px] md:max-h-[450px] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 gap-3">
              <h2 className="text-lg sm:text-xl font-semibold">Today's Tasks</h2>
              <span className="text-xs sm:text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full whitespace-nowrap">
                {pendingCount} Pending
              </span>
            </div>

            <div className="space-y-4 pb-7">
              {tasks.length === 0 ? (
                <div className="bg-gray-800 p-4 rounded-xl text-gray-400 text-sm">
                  No tasks added yet
                </div>
              ) : (
                tasks.map((task) => (
                  <div
                    className="bg-gray-800 p-4 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                    key={task.id}
                  >
                    <span
                      className={`break-words text-sm sm:text-base ${
                        task.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {task.task}
                    </span>

                    <span
                      className={`text-xs sm:text-sm ${
                        task.completed ? "text-green-400" : "text-yellow-400"
                      }`}
                    >
                      {task.completed ? "Done" : "Pending"}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="sticky bottom-0 left-0 right-0 bg-gray-900 pt-3 pb-4">
              <div className="flex justify-between items-center mb-2 gap-3">
                <p className="text-xs sm:text-sm text-gray-400">Progress</p>
                <p className="text-xs sm:text-sm text-gray-400 text-right">
                  {completedCount}/{tasks.length} completed
                </p>
              </div>

              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-purple-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;