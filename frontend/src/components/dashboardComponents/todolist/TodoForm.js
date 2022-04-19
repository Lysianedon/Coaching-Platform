import React, { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const ref = useRef();
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  useEffect(() => {
    // to implete the function that focus input when init the website
    ref.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  const editsubmitHandler = (e) => {
    e.preventDefault();

    props.onFormEdit({
      id: props.edit.id,
      text: input,
    });

    setInput("");
  };

  return (
    <form
    className="addInput"
      onSubmit={props.edit ? editsubmitHandler : submitHandler}
    >
      {props.edit ? (
        <>
          <input
            ref={ref}
            placeholder="Update your todo item"
            type="text"
            name="text"
            className="todo-input edit"
            value={input}
            onChange={changeHandler}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            ref={ref}
            placeholder="Add a todo"
            type="text"
            name="text"
            className="todo-input"
            value={input}
            onChange={changeHandler}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
