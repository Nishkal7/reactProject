import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, clearHistory, toggleTask } from '../reducers/todo';

export const useTodo = () => {
    const [todoData, setTodoData] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todo);

    const changeHandler = (e) => {
        setTodoData(e.target.value)
    }
    const addTodo = () => {
        if (todoData !== '') {
            dispatch(addTask({
                taskName: todoData,
                taskCompleted: false
            }));
        }
        setTodoData('');
    }

    const toggleTick = (index) => {
        dispatch(toggleTask({
            index: index
        }));
    }
    const deleteTodo = (task, ind) => {
        dispatch(deleteTask({
            task: {
                taskName: task.taskName,
                taskCompleted: true
            },
            index: ind
        }));
    }

    return {
        todoData,
        changeHandler,
        tasks,
        addTodo,
        deleteTodo,
        toggleTick
    }
}