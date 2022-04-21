import React from 'react'
import { useState, useEffect, useContext } from "react";
//Axios
import axios from 'axios';
// components
import { TasksContexts } from '../../views/dashboard/dashboardUser'; 
//Styled-components
import styled from "styled-components";

export default function ListOfTasks() {
    //Importing the todolist context
    const toDoListContext = useContext(TasksContexts);
    console.log(toDoListContext);

    const handleCheckbox = (e) => {
        const checkbox = e.target;
        const parentDiv = e.target.parentElement;
        const content = parentDiv.children[1].textContent;
    
        if (checkbox.checked) {
          parentDiv.children[1].style.textDecoration = 'line-through';
          axios.delete("http://localhost:8000/dashboard/user/list", { withCredentials: true, data : {content}});
    
          setTimeout(() => {
            parentDiv.remove(); 
          }, 1000);
        }else{
          parentDiv.children[1].style.textDecoration = 'none';
        }
      }
    
  return (
        <DivWrapper className="checklist">
            <h3>list of tasks:</h3>
        {/* <ul>
        {
            toDoListContext.toDoList.map(task => {
            return (
                <div className="task">
                <div className="options">
                <input type="checkbox" name="accomplished" id="checkbox" onClick={handleCheckbox}/>
                <li>{task.content}</li>
                </div>
                </div>
            )
            })
        }
        </ul> */}
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
    border: 1px solid;
}

.checklist{
  height: 50vh;
  width: 40vw;
  margin: auto;
  border: 2px solid #4f3149;
  overflow-y: scroll;
  border-radius: 4px;
  background-color: white;
  /* box-shadow: 0px 0px 5px rgba(66,66,66,.75); */
  box-shadow: 0px 8px 15px -5px rgba(0,0,0,0.76);


  .task{
    display: flex;
    justify-content: left;
    width: 95%;
    list-style: none;
    margin: 2% auto;
    /* border: 1px solid purple; */
    /* border-bottom: 1px solid purple ; */
    padding: 2%;
    background-color: white;

    input[type="checkbox"]{
      width: 3vw !important;
      height: 3vh;
      accent-color:green;
    }
    
    li{
      margin-left: 13%;
      width:100%;
      font-size: 1.3em;
    }
    
    input[type="checkbox"]:nth-child(even){
      accent-color: black;
    }
    .options{
      display: flex;
    }
  }
}

`
