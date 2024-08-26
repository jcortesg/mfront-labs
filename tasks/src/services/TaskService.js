import TaskModel from "../models/TaskModel";

const TASKS_STORAGE_KEY = "tasks";

let taskIdCounter = 1;

const loadTasksFromStorage = () => {
  const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
  if (storedTasks) {
    const parsedTasks = JSON.parse(storedTasks);
    tasks = parsedTasks.map(
      (task) => new TaskModel(task.id, task.title, task.completed)
    );
    taskIdCounter = Math.max(...tasks.map((task) => task.id)) + 1;
  }
};

let tasks = [];
loadTasksFromStorage();

const saveTasksToStorage = () => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

export const addTask = (title) => {
  const task = new TaskModel(taskIdCounter++, title);
  tasks.push(task);
  saveTasksToStorage();
  return task;
};

export const getTasks = () => {
  return tasks;
};

export const removeTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasksToStorage();
  return tasks;
};

export const toggleTaskComplete = (id) => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.toggleComplete();
    saveTasksToStorage();
  }
  return task;
};
