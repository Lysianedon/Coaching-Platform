import React from 'react'
import { useState, useEffect, useContext } from "react";
//Axios
import axios from 'axios';
// components
import { TasksContexts } from '../../views/dashboard/dashboardUser';
// import { TasksContexts } from '../../App';
//Styled-components
import styled from "styled-components";

export default function () {
    //Importing the todolist context
    const toDoListContext = useContext(TasksContexts);
    console.log("toDoListContext", toDoListContext);
    const [task, setTask] = useState('');

    const handleAddTask = (e) =>{
        const parentDiv = e.target.parentElement;
        //Getting the content of the input => the new task : 
        const content = parentDiv.children[0].value;

        //Adding the new task to the todo list :
        axios.post("http://localhost:8000/dashboard/user/list",{content}, { withCredentials: true});
    
        //Updating the to do list:
        axios.get('http://localhost:8000/dashboard/user', {withCredentials: true})
        .then(res => {
            toDoListContext.setToDoList(res.data.user.tasks);
        })
        //Clearing the input's field after the task is added:
        parentDiv.children[0].value = '';
      }
  return ( 
      <DivWrapper>
        <div className="header-todolist">
            <h3>Mes tâches :</h3>
            <div className="add">
                <input type="text" name="newtask" id="newtask"className="newtask"/>
                <button onClick={handleAddTask}>Ajouter</button>
            </div>
        </div>
       </DivWrapper> 

  )
}

//----------------------- STYLED COMPONENTS -----------------------

const DivWrapper = styled.div`

    *{
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .header-todolist{
    display: flex;
    flex-direction: column;
    background-color: #4f3149 ;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    font-family: 'helvetica';
    padding: 1%;
    width: 40vw;
    margin: auto;
    margin-bottom: 1.2%;

    h3{
      font-size:2.5em;
      font-weight: bold;
      margin-bottom: 4%;
    }

    .newtask{
      width: 20vw;
      height: 4vh;
    }

    button, input{
      display: block;
      font-size: 1.4em;
      width: 8vw;
      padding: .7%;
      /* background-color: #7d59bd; */
    }

    button{
      border-radius: 7%;
      margin-left: 5%;
      font-weight: bold;
      /* background-color: #FFC267; */
      background-color: white;
      color: #4f3149;

    }

    .add{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2%;

    }
  }


`

