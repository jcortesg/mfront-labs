export default class TaskModel {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}