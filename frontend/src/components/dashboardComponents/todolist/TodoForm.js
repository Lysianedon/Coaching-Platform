import React, { useState, useRef, useEffect } from 'react';

const TodoForm = (props) => {
  const ref = useRef();
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

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

    setInput('');
  };

  const editsubmitHandler = (e) => {
    e.preventDefault();

    props.onFormEdit({
      id: props.edit.id,
      text: input,
    });

    setInput('');
  };

  return (
    <form
      className="todo-form"
      onSubmit={props.edit ? editsubmitHandler : submitHandler}
    >
      {props.edit ? (
        <React.Fragment>
          <input
            ref={ref}
            placeholder="Update your todo item"
            type="text"
            name="text"
            className="todo-input edit"
            value={input}
            onChange={changeHandler}
            maxLength="15"
          />
          <button className="todo-button edit">Update</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            ref={ref}
            placeholder="Add a todo"
            type="text"
            name="text"
            className="todo-input"
            value={input}
            onChange={changeHandler}
            maxLength="15"
          />
          <button className="todo-button">Add todo</button>
        </React.Fragment>
      )}
    </form>
  );
};

export default TodoForm;