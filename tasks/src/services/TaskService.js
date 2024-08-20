import TaskModel from "../models/TaskModel";

export default class TaskService {
  constructor() {
    this.tasks = [new TaskModel(1, "Task 1"), new TaskModel(2, "Task 2")];
  }

  fetchTasks() {
    return this.tasks;
  }

  toggleTaskCompletion(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.toggleComplete();
    }
  }
}
