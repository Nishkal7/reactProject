import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: JSON.parse(localStorage.getItem("tasks")) ?? {
    tasks: [],
    recentlyDeletedTasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.unshift(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload.index, 1);
      state.recentlyDeletedTasks.unshift(action.payload.task);
    },
    toggleTask: (state, action) => {
      state.tasks = state.tasks.map((task, index) => {
        if (index === action.payload.index) {
          return { ...task, taskCompleted: !task.taskCompleted };
        }
        return task;
      });
    },
    clearHistory: (state) => {
      state.recentlyDeletedTasks = [];
    },
  },
});

export default todoSlice.reducer;
export const { addTask, deleteTask, toggleTask, clearHistory, counterForTask } =
  todoSlice.actions;
