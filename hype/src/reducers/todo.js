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
            state.tasks.splice(action.payload.index, 1);
            state.recentlyDeletedTasks.unshift(action.payload.task)
        },
        clearHistory: (state) => {
            state.recentlyDeletedTasks = []
        }
    }
});

export default todoSlice.reducer
export const { addTask, deleteTask, clearHistory } = todoSlice.actions