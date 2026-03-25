import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      task: input.trim(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setInput("");
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

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
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded-xl hover"
              onClick={handleTask}
            >
              Add
            </button>
          </div>

          <div className="space-y-3">
            {tasks.length === 0 ? (
              <p className="text-gray-400">No tasks added yet.</p>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
                >
                  <span
                    className={`flex-1 ${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.task}
                  </span>

                  <div className="flex gap-3 ml-4">
                    <button
                      className={`${
                        task.completed ? "text-green-400" : "text-yellow-400"
                      }`}
                      onClick={() => toggleComplete(task.id)}
                    >
                      {task.completed ? "Undo" : "Complete"}
                    </button>

                    <button
                      className="text-red-400"
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;