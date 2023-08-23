import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        tasks: [],
        recentlyDeletedTasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.unshift(action.payload)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task !== action.payload)
            state.recentlyDeletedTasks.unshift(action.payload)
        },
        clearHistory: (state) => {
            state.recentlyDeletedTasks = []
        }
    }
});

export default todoSlice.reducer
export const { addTask, deleteTask, clearHistory } = todoSlice.actions