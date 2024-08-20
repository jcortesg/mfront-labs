import React, { useState } from "react";
import TaskViewModel from "../viewmodels/TaskViewModel";

const TaskView = () => {
  const taskViewModel = new TaskViewModel();
  const [tasks, setTasks] = useState(taskViewModel.getTasks());

  const handleToggleCompletion = (id) => {
    taskViewModel.toggleTaskCompletion(id);
    setTasks([...taskViewModel.getTasks()]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => handleToggleCompletion(task.id)}>
            {task.title} {task.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskView;