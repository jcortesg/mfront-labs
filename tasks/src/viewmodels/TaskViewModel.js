import TaskService from "../services/TaskService";

export default class TaskViewModel {
  constructor() {
    this.taskService = new TaskService();
  }

  getTasks() {
    return this.taskService.fetchTasks();
  }

  toggleTaskCompletion(id) {
    this.taskService.toggleTaskCompletion(id);
  }
}