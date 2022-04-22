//Axios
import axios from 'axios';
// components
import { React, useState, useEffect } from "react";
// import SideBarUser from "../../components/dashboardComponents/sidebar-user/sidebarUser";
// import Profile from "../../components/dashboardComponents/profile-user/profile";
import Agenda from "../../components/dashboardComponents/agenda/agenda";
// import ToDoList from "../../components/dashboardComponents/todolist/todolist";
// import Ressources from "../../components/dashboardComponents/ressources/ressources";
//Styled-components
import styled from "styled-components";

function DashboardUser() {
  const [name,setName] = useState('');
  const[toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState('');
  const [numberOfTasks, setNumberOfTasks] = useState(0);

  const [userId, setUserId] = useState('');

  const fetchData = () => {
    axios.get('http://localhost:8000/dashboard/user', {withCredentials: true})
    .then(res => {
      console.log(res.data);
      setName(res.data.user.firstName);
      setToDoList(res.data.user.tasks);
      // setNumberOfTasks(res.data.user.tasks.length)
    })
  }

  useEffect(()=> {
    fetchData();

  }, [])

  const handleAddTask = (e) =>{
    const parentDiv = e.target.parentElement;
    //Getting the content of the input => the new task : 
    let content = parentDiv.children[0].value;
    console.log(content);
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
  //TodoList Context to export in Provider:
   const tasksContext = {
    toDoList : toDoList,
    setToDoList : setToDoList,
  }

  return (
      <Dadhboard>
      <h2>Hello {name} ! </h2>

     {/* <SideBarUser/> */}
     {/* <Profile className="profile"/>  */}

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
       <ul>
       {
         toDoList.map(task => {
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
       </ul>
     </section> 

     <Agenda/>
     {/* <ToDoList/> 
     <Ressources/> */}

    </Dadhboard>
  )
}
export default DashboardUser;

// --------------- STYLED COMPONENTS ---------------------
 
const Dadhboard = styled.div`
h3 {
  text-align: center;
  margin-bottom: 2%;
  /* color: #4f3149; */
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
  font-size: 2em;
  margin: 2% auto 3% auto;
}

/* height: 130vh !important; */
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
      width:100%;
      font-size: 22px;
      opacity: 1;
      -webkit-transition: opacity 1000ms linear;
      transition: opacity 1000ms linear;

    }

    div{
      opacity: 1;
      -webkit-transition: opacity 1000ms linear;
      transition: opacity 1000ms linear;
    }

    /* div:hover{
      background-color: #F2BAE3 !important;
      width: 100%;
    } */
    
    input[type="checkbox"]:nth-child(even){
      accent-color: black;

    }

    .options{
      display: flex;
    }


  }

}
`