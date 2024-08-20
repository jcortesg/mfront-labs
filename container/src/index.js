import("tasks/TasksApp").then(({ default: TasksApp }) => {
  const tasksContainer = document.getElementById("tasks-container");
  TasksApp(tasksContainer);
});

import("users/UsersApp").then(({ default: UsersApp }) => {
  const usersContainer = document.getElementById("users-container");
  UsersApp(usersContainer);
});

import("reports/ReportsApp").then(({ default: ReportsApp }) => {
  const reportsContainer = document.getElementById("reports-container");
  ReportsApp(reportsContainer);
});
