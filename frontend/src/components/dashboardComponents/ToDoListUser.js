import { React, useState, useEffect } from "react";
//Axios
import axios from 'axios';
//Styled-components
import styled from "styled-components";
//Toastify
import { toast } from "react-toastify";

function ToDoListUser() {
  const [name,setName] = useState('');
  const[toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState('');
  const [numberOfTasks, setNumberOfTasks] = useState(0);

  const [userId, setUserId] = useState('');

  const fetchData = () => {
    axios.get('http://localhost:8000/dashboard/user', {withCredentials: true})
    .then(res => {
      setName(res.data.user.firstName);
      setToDoList(res.data.user.tasks);
      setNumberOfTasks(res.data.user.tasks.length)
    })
}

useEffect(()=> {
    fetchData();
  }, [])

  const handleAddTask = (e) =>{
      //Getting the new task:
      const parentDiv = e.target.parentElement;
      let content = parentDiv.children[0].value;
      //Getting the list of tasks:
      const listOfTasks = [];
      const ul = document.querySelector('.ul-list');
      const listItems = ul.getElementsByTagName('li');
      // Loop through the NodeList object and adding the task to the listOfTasks array:
      for (let i = 0; i <= listItems.length - 1; i++) {
          listOfTasks.push(listItems[i].textContent)
        }  
    // Checking all tasks to see if the new task already exists: if so, an error message gets displayed :
    for (let i = 0; i < listOfTasks.length; i++) {
       
        if (listOfTasks[i] === content) {
            //Emptying the field:
            parentDiv.children[0].value="";
            return toast.error('Tâche déjà existante !');
        } 
    }

    axios.post("http://localhost:8000/dashboard/user/list",{content}, { withCredentials: true});
    content = {content}
    setToDoList([...toDoList, content]);
    setNumberOfTasks(numberOfTasks + 1);
    //Emptying the field:
    parentDiv.children[0].value="";

  }

  const handleCheckbox = (e) => {
    const checkbox = e.target;
    const parentDiv = e.target.parentElement;
    const content = parentDiv.children[1].textContent;

    //If the box is checked, the task will be rod in the front and deleted in the db:
    if (checkbox.checked) {
      parentDiv.children[1].style.textDecoration = 'line-through';
      //Deleting the task :
      axios.delete("http://localhost:8000/dashboard/user/list", { withCredentials: true, data : {content}});
      setNumberOfTasks(numberOfTasks - 1);

      setTimeout(() => {
        parentDiv.style.opacity='0';
        parentDiv.remove(); 
      }, 1000);
    }else{
      parentDiv.children[1].style.textDecoration = 'none';
    }
  }

  return (
      <TodoStyle>

     {
       numberOfTasks < 1 ?  <h3>Tu n'as aucune tâche à faire pour le moment </h3> : <h3>Tu as {numberOfTasks} tâche(s) à réaliser: </h3>
     }

       <div className="header-todolist">
         <h3>TO DO LIST:</h3>
          <div className="add">
            <input type="text" name="newtask" id="newtask"className="newtask"/>
            <button onClick={handleAddTask}>Ajouter</button>
          </div>
       </div>
     <section className="checklist">
       <ul className="ul-list">
       {
         toDoList.map(task => {
           return (
             <div className="task">
               <div className="options">
               <input type="checkbox" name="accomplished" id="checkbox" onClick={handleCheckbox}/>
               <li className="task-content">{task.content}</li>
               </div>
             </div>
           )
         })
       }
       </ul>
     </section> 

    </TodoStyle>
  )
}
export default ToDoListUser;

// --------------- STYLED COMPONENTS ---------------------
 
const TodoStyle = styled.div`

h3 {
  text-align: center;
  margin-bottom: 2%;
  font-size: 4rem;
  margin-bottom: 5rem;
  
  @media(max-width:780px){
    font-size: 3.5rem;
    margin-bottom: 13%;
  }
  
  @media(max-width:440px){
    font-size: 2.6rem;
    margin-bottom: 13%;
    
  }

}
#test-input{
  border:0 !important;
  outline:0 !important;
  border-width:0px !important;
border:none !important;
}
#test-input:focus {text-decoration:underline;}

h2{
  text-align: center;
  font-size: 3rem;
  margin: 2% auto 3% auto;
  

}

overflow-y: scroll;
overflow: scroll;
display: flex;
flex-direction: column;

.profile {
  margin-top: 25%;
}

.header-todolist{
    display: flex;
    flex-direction: column;
    background-color: #4f3149 ;
    border-radius: 4px;
    color: white;
    /* font-weight: bold; */
    justify-content: center;
    align-items: center;
    font-family: 'helvetica';
    padding: 1%;
    width: 40vw;
    margin: auto;
    margin-bottom: 1.2%;

    @media(max-width:780px){
    width: 65vw;
        font-size: 1.6rem;
      }

    h3{
      font-size:5rem;
      /* font-weight: bold; */
      margin-bottom: 4%;

      @media(max-width:440px){
        font-size: 2.5rem;
      }
    }

    .newtask{
      width: 26vw;
      height: 4vh;

      @media(max-width:440px){
        width: 45vw;

      }

    }

    button, input{
      display: block;
      font-size: 1.4rem;
      /* height: 4.7vh; */
      padding: 1%;
    }
    
    button{
      width: 9vw;
      border-radius: 7px;
      margin-left: 5%;
      font-size: 2.1rem;
      font-weight: bold;
      background-color: white;
      color: #4f3149;
      
      @media(max-width:1440px){
        margin-top: 3rem;
        
      }
      
      @media(max-width:1030px){
        width: 15.5vw;
      }
      @media(max-width:440px){
        width: 25vw;
        font-size: 1.6rem;
      }

    }

    .add{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2%;

      @media(max-width:1440px){
        flex-direction: column;
   
      }
    }
  }

.checklist{
  height: 50vh;
  width: 40vw;
  margin: auto;
  border: 2px solid #4f3149;
  overflow-y: scroll;
  border-radius: 4px;
  box-shadow: 0px 8px 15px -5px rgba(0,0,0,0.76);
  /* background-color: #f9f1ff; */
  background-color: white;
  
  @media(max-width:780px){
    width: 65vw;
        font-size: 1.6rem;
      }

  .task{
    display: flex;
    justify-content: left;
    width: 95%;
    list-style: none;
    margin: 2% auto;
    padding: 2%;


    input[type="checkbox"]{
      width: 3vw !important;
      height: 3vh;
      accent-color:green;
    }
    
    li{
      width:100%;
      font-size: 22px;
      opacity: 1;
      -webkit-transition: opacity 1000ms linear;
      transition: opacity 1000ms linear;

    @media(max-width:780px){
        font-size: 2rem;
      }
      @media(max-width:340px){
        font-size: 1.8rem;
      }
    }

    div{
      opacity: 1;
      -webkit-transition: opacity 1000ms linear;
      transition: opacity 1000ms linear;
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