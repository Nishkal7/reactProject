/* eslint-disable no-undef */
import React, { useRef } from "react";
import "./todo.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../ProgressProvider";
import { useTodo } from "./useTodo";
import greenTick from "../assets/greenTick.png";
import blackTick from "../assets/blackTick.png";

const Todo = () => {
  const {
    todoData,
    changeHandler,
    tasks,
    addTodo,
    deleteTodo,
    toggleTick,
    clearTasks,
    dTaks,
    taskNames
  } = useTodo();
  return (
    <div className="todoView">
      <div className="todoInputView">
        <div>
          <input
            name="task"
            type="text"
            value={todoData}
            placeholder="What do you want to do?"
            onChange={changeHandler}
            className="inputbox"
          />
        </div>
        <div>
          <button className="create" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>
      {tasks.tasks.length > 0 ? (
        <div className="taskList">
          {tasks.tasks.map((task, index) => {
            return (
              <div className="taskview" key={index}>
                <div className="taskCardInnerView">
                  <div onClick={() => toggleTick(index)} className="one">
                    <img
                      alt="tick"
                      className="tickView"
                      src={task.taskCompleted ? greenTick : blackTick}
                    />
                  </div>
                  <div
                    onClick={() => toggleTick(index)}
                    className="two"
                    style={{
                      textDecoration: task.taskCompleted && "line-through",
                      color: task.taskCompleted && "red",
                    }}
                  >
                    <h3>{task.taskName}</h3>
                  </div>
                  {!dTaks.includes(task.taskName) && (
                    <div className="three">
                      <button
                        className="delete"
                        onClick={() => deleteTodo(task, index)}
                      >
                        Remove
                      </button>
                    </div>
                   )} 
                  {dTaks.includes(task.taskName) && (
                    <div className="three">
                      <ProgressProvider valueStart={0} valueEnd={100}>
                        {(value) => (
                          <div style={{padding:'10px'}}>
                            <CircularProgressbar
                              styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "butt",
                                textSize: "16px",
                                pathTransitionDuration: 1,
                                textColor: "#f88",
                                trailColor: "#d6d6d6",
                                backgroundColor: "#3e98c7",
                              })}
                              value={value}
                              text={`${value}%`}
                            />
                          </div>
                        )}
                      </ProgressProvider>
                    </div>
                   )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          {tasks.recentlyDeletedTasks.length > 0 && (
            <div className="taskList">
              <button className="clearHistory" onClick={() => clearTasks()}>
                Clear History
              </button>
              {tasks.recentlyDeletedTasks.map((task, index) => {
                return (
                  <div className="taskview" key={index}>
                    <div className="taskCardInnerView">
                      <div className="one">
                        <img
                          alt="tick"
                          className="tickView"
                          src={task.taskCompleted ? greenTick : blackTick}
                        />
                      </div>
                      <div
                        className="two"
                        style={{
                          textDecoration: task.taskCompleted && "line-through",
                          color: task.taskCompleted && "red",
                        }}
                      >
                        <h3>{task.taskName}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Todo;
