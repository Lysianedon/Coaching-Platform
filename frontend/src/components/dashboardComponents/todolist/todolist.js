import React, { useState } from "react";
// css
import "./todolist.css";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = (props) => {
  const key = "todoList";
  const savedList = JSON.parse(localStorage.getItem(key));
  const [todos, setTodos] = useState(savedList ? savedList : []);

  const addTodo = (todo) => {
    // to prevent add empty string
    if (!todo.text) return;

    const newTodos = [todo, ...todos];
    localStorage.setItem(key, JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const onCompleteHandler = (id) => {
    let updatedArr = todos.map((todo) => {
      // chnage the status of todo item
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    localStorage.setItem(key, JSON.stringify(updatedArr));
    setTodos(updatedArr);
  };

  const onDeleteHandler = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    localStorage.setItem(key, JSON.stringify(removedArr));
    setTodos(removedArr);
  };

  const onEditHandler = (newTodo) => {
    if (!newTodo.text) {
      return;
    }

    // update the todo list
    setTodos((prev) => {
      const updateTodos = prev.map((todo) => {
        return todo.id === newTodo.id ? newTodo : todo;
      });
      localStorage.setItem(key, JSON.stringify(updateTodos));
      return updateTodos;
    });
  };

  return (
    <React.Fragment>
        <div className="todolist">
            <h6>What's the plan for today?</h6>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                onComplete={onCompleteHandler}
                onDelete={onDeleteHandler}
                onEdit={onEditHandler}
            />
        </div>
      
    </React.Fragment>
  );
};

export default TodoList;
