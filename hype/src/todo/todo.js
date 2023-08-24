import React, { useState } from 'react';
import './todo.css';
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, clearHistory } from '../reducers/todo';

const Todo = () => {

    const [todoData, setTodoData] = useState("");


    const changeHandler = (e) => {
        setTodoData(e.target.value)
    }

    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.todo);

    const addTodo = () => {
        dispatch(addTask(todoData));
    }

    const deleteTodo = (task, ind) => {
        dispatch(deleteTask({
            task : task,
            index: ind
        }));
    }

    return (
        <div className='formView'>
            <div>
                <input
                    name='task'
                    type='text'
                    value={todoData}
                    placeholder='TODO'
                    onChange={changeHandler}
                />
            </div>
            <div>
                <button className='validate' onClick={addTodo}>Create Task</button>
            </div>
            <div className= {tasks.tasks.length > 5 ? 'taskList' : null}>
                {tasks.tasks.map((task, index) => {
                    return (
                        <div className='taskview' key={index}>
                            <div>
                                <h1>{task}</h1>
                            </div>
                            <div>
                                <button className='validate' onClick={() => deleteTodo(task,index)}>Delete Task</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Todo;
