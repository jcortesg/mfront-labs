import { createSlice } from "@reduxjs/toolkit";
import {
  addTask as addTaskService,
  removeTask as removeTaskService,
  toggleTaskComplete as toggleTaskCompleteService,
} from "../services/TaskService";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTaskComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = action.payload.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskComplete } = tasksSlice.actions;

export default tasksSlice.reducer;

export const addTaskAsync = (title) => (dispatch) => {
  const task = addTaskService(title);
  dispatch(addTask(task));
};

export const removeTaskAsync = (id) => (dispatch) => {
  removeTaskService(id);
  dispatch(removeTask(id));
};

export const toggleTaskCompleteAsync = (id) => (dispatch) => {
  const updatedTask = toggleTaskCompleteService(id);
  dispatch(toggleTaskComplete(updatedTask));
};
