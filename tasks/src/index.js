import React, { useState } from "react";
import ReactDOM from "react-dom";

// Componente principal para gestionar tareas
const TasksApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    const task = { id: Date.now(), name: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>
            <button onClick={() => handleCompleteTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const renderTasksApp = (container) => {
  const root = ReactDOM.createRoot(container);
  root.render(<TasksApp />);
};

export default renderTasksApp;