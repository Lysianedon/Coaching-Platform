import React, { useState, useEffect } from "react";
import axios from "axios";
const TodoForm = (props) => {

  const [newTask , setNewTask ,] = useState({
    content:"", 
    deadline:"", 
    accomplished:""
  });
  const [addedTask, setAddedTask,] = useState([]);
  const [taskToModify, setTaskToModify] = useState(props.edit ? props.edit.value : "");

  const changeHandler = (e) => {
    setNewTask({content: e.target.value});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post ("http://localhost:8000/dashboard/user/list", { withCredentials: true },{
      content: newTask.content
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };


  const editsubmitHandler = (e) => {
    e.preventDefault();
    axios.put ("http://localhost:8000/dashboard/user/list", { withCredentials: true },{
      content: taskToModify.content
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <form
    className="addInput"
      onSubmit={props.edit ? editsubmitHandler : submitHandler}
    >
      {props.edit ? (
        <>
          <input
            placeholder="Update your todo item"
            type="text"
            name="text"
            className="todo-input edit"
            value={taskToModify}
            onChange={changeHandler}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            type="text"
            name="text"
            className="todo-input"
            value={addedTask}
            onChange={changeHandler}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
