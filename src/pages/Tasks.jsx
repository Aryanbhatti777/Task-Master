import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { LocalNotifications } from "@capacitor/local-notifications";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [reminderTime, setReminderTime] = useState("");

  useEffect(() => {
    const init = async () => {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }

      try {
        const perm = await LocalNotifications.checkPermissions();
        if (perm.display !== "granted") {
          await LocalNotifications.requestPermissions();
        }

        await LocalNotifications.createChannel({
          id: "task-reminder-channel-v1",
          name: "Task Reminders",
          description: "Reminder notifications for tasks",
          sound: "sound.wav",
          importance: 5,
          visibility: 1,
        });
      } catch (error) {
        console.log("Permission / channel error:", error);
      }
    };

    init();
  }, []);

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const getNextNotificationId = () => {
    const saved = Number(localStorage.getItem("nextNotificationId") || "1");
    const next = saved + 1;
    localStorage.setItem("nextNotificationId", String(next));
    return saved;
  };

  const scheduleReminder = async (notificationId, taskText, reminderDate) => {
    try {
      await LocalNotifications.schedule({
        notifications: [
          {
            id: notificationId,
            title: "Task Reminder",
            body: taskText,
            channelId: "task-reminder-channel-v1",
            schedule: {
              at: reminderDate,
              allowWhileIdle: true,
            },
          },
        ],
      });

      console.log("Reminder scheduled successfully");
      return true;
    } catch (error) {
      console.log("Schedule error:", error);
      alert("Reminder could not be scheduled");
      return false;
    }
  };

  const handleTask = async () => {
    if (input.trim() === "") return;

    const trimmedTask = input.trim();
    let reminderDate = null;
    let notificationId = null;

    if (reminderTime) {
      reminderDate = new Date(reminderTime);

      if (isNaN(reminderDate.getTime())) {
        alert("Invalid date/time");
        return;
      }

      if (reminderDate <= new Date()) {
        alert("Please choose a future time");
        return;
      }

      const perm = await LocalNotifications.checkPermissions();
      if (perm.display !== "granted") {
        const requested = await LocalNotifications.requestPermissions();
        if (requested.display !== "granted") {
          alert("Notification permission not granted");
          return;
        }
      }

      notificationId = getNextNotificationId();

      const ok = await scheduleReminder(
        notificationId,
        trimmedTask,
        reminderDate
      );

      if (!ok) return;
    }

    const newTask = {
      id: Date.now(),
      task: trimmedTask,
      completed: false,
      reminderTime: reminderTime || null,
      notificationId: notificationId,
    };

    const updatedTasks = [...tasks, newTask];
    saveTasks(updatedTasks);

    setInput("");
    setReminderTime("");
  };

  const handleDelete = async (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);

    if (taskToDelete?.notificationId) {
      try {
        await LocalNotifications.cancel({
          notifications: [{ id: taskToDelete.notificationId }],
        });
      } catch (error) {
        console.log("Cancel error:", error);
      }
    }

    const updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
  };

  const toggleComplete = async (id) => {
    const currentTask = tasks.find((task) => task.id === id);

    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updatedTasks);

    if (currentTask && !currentTask.completed && currentTask.notificationId) {
      try {
        await LocalNotifications.cancel({
          notifications: [{ id: currentTask.notificationId }],
        });
      } catch (error) {
        console.log("Cancel on complete error:", error);
      }
    }
  };

  const testNotification = async () => {
    try {
      const perm = await LocalNotifications.checkPermissions();
      if (perm.display !== "granted") {
        const requested = await LocalNotifications.requestPermissions();
        if (requested.display !== "granted") {
          alert("Notification permission not granted");
          return;
        }
      }

      const testId = 999;

      await LocalNotifications.schedule({
        notifications: [
          {
            id: testId,
            title: "Test Reminder",
            body: "Your reminder is working",
            channelId: "task-reminder-channel-v1",
            schedule: {
              at: new Date(Date.now() + 60000),
              allowWhileIdle: true,
            },
          },
        ],
      });

      alert("Test reminder set for 1 minute later");
    } catch (error) {
      console.log("Test notification error:", error);
      alert("Test reminder failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <div className="max-w-3xl mx-auto bg-gray-900 p-4 sm:p-6 rounded-2xl border border-white/10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-purple-400">
            My Tasks
          </h1>

          <div className="flex flex-col gap-3 mb-6">
            <input
              type="text"
              placeholder="Enter a task..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none text-sm sm:text-base"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <input
              type="datetime-local"
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 outline-none text-sm sm:text-base text-white"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded-xl text-sm sm:text-base"
                onClick={handleTask}
              >
                Add Task
              </button>

              <button
                className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl text-sm sm:text-base"
                onClick={testNotification}
              >
                Test Reminder
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {tasks.length === 0 ? (
              <p className="text-gray-400 text-sm sm:text-base">
                No tasks added yet.
              </p>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-800 p-4 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
                >
                  <div className="flex-1">
                    <span
                      className={`block break-words text-sm sm:text-base ${
                        task.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {task.task}
                    </span>

                    {task.reminderTime && (
                      <p className="text-xs sm:text-sm text-purple-300 mt-1">
                        Reminder: {new Date(task.reminderTime).toLocaleString()}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 sm:ml-4">
                    <button
                      className={`text-sm sm:text-base ${
                        task.completed ? "text-green-400" : "text-yellow-400"
                      }`}
                      onClick={() => toggleComplete(task.id)}
                    >
                      {task.completed ? "Undo" : "Complete"}
                    </button>

                    <button
                      className="text-red-400 text-sm sm:text-base"
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