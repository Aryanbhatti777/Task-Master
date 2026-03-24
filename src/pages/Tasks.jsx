import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Tasks = () => {

  let [Tasks, setTasks] = useState([])
  let [input, setInput] = useState("")

  useEffect(
    () =>{
      const saved = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(saved)
    },[]
  )
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(Tasks));
}, [Tasks]);

  let HandleTask = () => {
    if(input.trim() === "") return

    let newtask = {
      id: Date.now(),
      task: input.trim()
    }

    let updatedTask = [...Tasks, newtask]
    setTasks(updatedTask)
    localStorage.setItem("tasks", JSON.stringify(updatedTask))
    setInput("")
  }

  let HandleDelete = (id) => {
    let refresh = Tasks.filter((task)=> task.id !== id)
    setTasks(refresh)
    localStorage.setItem("tasks", JSON.stringify(refresh));
  }


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
              onChange={(e)=> setInput(e.target.value)}
              value={input}
            />
            <button className="bg-purple-500 hover:bg-purple-600 px-5 rounded-xl hover" onClick={HandleTask}>
              Add
            </button>
          </div>
          {
            Tasks.map(
              (task) => {
                return (
                  <div className="space-y-3" key={task.id}>
            <div className="bg-gray-800 p-4 rounded-xl flex justify-between">
              <span>{task.task}</span>
              <button className="text-red-400" onClick={HandleDelete(task.id)}>Delete</button>
            </div>
          </div>
                )
              }
            )
          }

          
        </div>
      </div>
    </>
  );
};

export default Tasks;