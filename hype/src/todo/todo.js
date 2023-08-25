import React from 'react';
import './todo.css';
import { useTodo } from './useTodo';
import greenTick from "../assets/greenTick.png";
import blackTick from "../assets/blackTick.png";

const Todo = () => {
    const { todoData, changeHandler, tasks, addTodo, deleteTodo, toggleTick } = useTodo();
    return (
        <div className='todoView'>
            <div className='todoInputView'>
                <div>
                    <input
                        name='task'
                        type='text'
                        value={todoData}
                        placeholder='What do you want to do?'
                        onChange={changeHandler}
                        className='inputbox'
                    />
                </div>
                <div>
                    <button className='create' onClick={addTodo}>Add Todo</button>
                </div>
            </div>
            <div className='taskList' >
                {tasks.tasks.map((task, index) => {
                    return (
                        <div className='taskview' key={index}>
                            <div className='taskCardInnerView'>
                                <div onClick={() => toggleTick(index)} className='one' >
                                    <img alt='tick' className='tickView' src={task.taskCompleted ? greenTick : blackTick} />
                                </div>
                                <div onClick={() => toggleTick(index)} className='two'
                                    style={{ textDecoration: task.taskCompleted && 'line-through' }}>
                                    <h3>{task.taskName}</h3>
                                </div>
                                <div className='three'>
                                    <button className='delete' onClick={() => deleteTodo(task, index)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Todo;
