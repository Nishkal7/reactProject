import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  clearHistory,
  toggleTask,
} from "../reducers/todo";

export const useTodo = () => {
  const [todoData, setTodoData] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo);
  const [tasksProgress, setTasksProgress] = useState(tasks.tasks);
  const taskNames = useRef([]);
  const [dTaks, setDtasks] = useState([]);
  const [tempRender, setTempRender] = useState("");

  const changeHandler = (e) => {
    setTodoData(e.target.value);
  };

  const addTodo = () => {
    if (todoData !== "" && checkDuplicates()) {
      dispatch(
        addTask({
          taskName: todoData,
          taskCompleted: false,
          taskDeleteProgress: 0,
        })
      );
    }
    setTodoData("");
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks])

  const checkDuplicates = () => {
    if (tasks.tasks.find((task) => task.taskName === todoData)) return false;
    else return true;
  };

  useEffect(() => {
    setTasksProgress(tasks.tasks);
  }, [tasks]);

  const toggleTick = (index) => {
    dispatch(
      toggleTask({
        index: index,
      })
    );
  };

  const pushName = useCallback((name) => {
    taskNames.current.push(name);
    setTempRender(name);
  }, []);

  useEffect(() => {
    setDtasks(taskNames.current);
  }, [pushName, tempRender]);

  const waitAndDelete = (task, ind) => {
    taskNames.current = taskNames.current.filter(
      (name) => name !== task.taskName
    );
    dispatch(
      deleteTask({
        task: {
          taskName: task.taskName,
          taskCompleted: true,
        },
        index: ind,
      })
    );
    setDtasks(taskNames.current);
  };

  const deleteTodo = (task, ind) => {
    pushName(task.taskName);
    setTimeout(() => {
      waitAndDelete(task, ind);
    }, 500);
  };

  const clearTasks = () => {
    dispatch(clearHistory());
  };

  return {
    todoData,
    changeHandler,
    tasks,
    addTodo,
    deleteTodo,
    toggleTick,
    clearTasks,
    tasksProgress,
    dTaks,
    taskNames,
  };
};
