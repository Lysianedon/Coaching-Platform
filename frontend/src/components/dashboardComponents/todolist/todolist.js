import React, { useEffect, useState } from "react";
// css
import "./todolist.css";
import axios from "axios";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = (props) => {

  const [tasks, setTasks] = useState([]);
  const fetchToDolist = () =>{
    axios.get ("http://localhost:8000/dashboard/user/list", { withCredentials: true })
  .then(res => 
    {
    console.log(res.data);
    setTasks(res.data.usersList)
  });}
  
  useEffect(() => {
    fetchToDolist();
  }, []);

  const addTodo = (task) => {
    // to prevent add empty string
    if (!tasks.text) return;
    const newTask = [task, ...tasks];
    setTasks(newTask);
  };


  const onCompleteHandler = (id) => {
    let updatedArr = tasks.map((task) => {
      // chnage the status of todo item
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });

    setTasks(updatedArr);
  };

  const onDeleteHandler = (id) => {
    const removedArr = [...tasks].filter((task) => task.id !== id);
    setTasks(removedArr);
  };

  const onEditHandler = (newTask) => {
    if (!newTask.text) {
      return;
    }

    //update the todo list
    setTasks((prev) => {
      const updateTodos = prev.map((task) => {
        return task.id === newTask.id ? newTask : task;
      });
      return updateTodos;
    });
  };

  return (
    
    <React.Fragment>
      <div>
        <div className="addAToDo">
            <h6>Programme</h6>
            <TodoForm onSubmit={addTodo} />
        </div>
        <div className="todolist">
            <Todo
                tasks={tasks}
                onComplete={onCompleteHandler}
                onDelete={onDeleteHandler}
                onEdit={onEditHandler}
            />
        </div>
       </div>
      
    </React.Fragment>
  );
};

export default TodoList;
