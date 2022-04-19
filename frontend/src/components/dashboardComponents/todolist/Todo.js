import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });


const completehandler = (id) => {
  props.onComplete(id);
};

  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  const editHandler = (id, text) => {
    setEdit({
      id,
      value: text,
    });
  };

  const formEditHandler = (task) => {
    props.onEdit(task);
    // clean up and change the status to empty
    setEdit({
      id: null,
      value: '',
    });
  };

  // edit feature
  if (edit.id) {
    return <TodoForm edit={edit} onFormEdit={formEditHandler} />;
  }

  return (
    <React.Fragment>
      {props.tasks.map((task, index) => {
        return (
          <div
            key={index}
            className={task.accomplished ? 'todo-row complete' : 'todo-row'}
          >
            <div
              key={task.id}
              className="text"
              onClick={completehandler.bind(null, task.id)}
            >
              {task.content}
            </div>
            <div className="icons">
              <RiCloseCircleLine
                className="delete-icon"
                onClick={deleteHandler.bind(null, task.id)}
              />
              <TiEdit
                className="edit-icon"
                onClick={editHandler.bind(null, task.id, task.content)}
              />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Todo;