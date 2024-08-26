import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskAsync,
  removeTaskAsync,
  toggleTaskCompleteAsync,
} from "../viewmodels/taskReducer";

const TaskList = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTaskAsync(taskTitle));
      setTaskTitle("");
    }
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTaskAsync(id));
  };

  const handleToggleTaskComplete = (id) => {
    dispatch(toggleTaskCompleteAsync(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Task List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Add a task"
          className="flex-grow p-2 border rounded-l-md focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 border rounded-md"
          >
            <span
              className={`flex-grow cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => handleToggleTaskComplete(task.id)}
            >
              {task.title}
            </span>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
