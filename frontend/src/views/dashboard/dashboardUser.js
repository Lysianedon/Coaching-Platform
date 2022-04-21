//Axios
import axios from 'axios';
// components
import { React, useState, useEffect, createContext } from "react";
import SideBarUser from "../../components/dashboardComponents/sidebar-user/sidebarUser";
import Profile from "../../components/dashboardComponents/profile-user/profile";
import Agenda from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";
//Styled-components
import styled from "styled-components";
import AddTasks from '../../components/dashboardComponents/AddTasks';
import ListOfTasks from '../../components/dashboardComponents/ListOfTasks';

export const TasksContexts = createContext();

function DashboardUser() {
  const [name,setName] = useState('');
  const[toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState('');


  const fetchData = () => {
    axios.get('http://localhost:8000/dashboard/user', {withCredentials: true})
    .then(res => {
      console.log(res.data);
      setName(res.data.user.firstName);
      setToDoList(res.data.user.tasks);
    })
  }

  useEffect(()=> {
    fetchData();
    // // 1st step : get the user ID:
    // axios.get("http://localhost:8000/dashboard/user", { withCredentials: true})
    // .then (res => {
    //   console.log(res.data); 
    //   //2nd step : set the userId in the state
    //   setUserId(res.data.user._id);
    // })

  }, [])

  const handleAddTask = (e) =>{
    const parentDiv = e.target.parentElement;
    //Getting the content of the input => the new task : 
    const content = parentDiv.children[0].value;
    // console.log(content);
    axios.post("http://localhost:8000/dashboard/user/list",{content}, { withCredentials: true});

    //Updating the to do list:
    axios.get('http://localhost:8000/dashboard/user', {withCredentials: true})
    .then(res => {
      setToDoList(res.data.user.tasks);
    })
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

      setTimeout(() => {
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
    task : task,
    setTask : setTask
  }

  return (
    <TasksContexts.Provider value={tasksContext}>
      <Dadhboard>
      <h2>Hello {name} ! </h2>
      <h2>Quelle est ton humeur du jour ?</h2>

      {/* TODOLIST COMPONENTS */}
        <AddTasks/>
        <ListOfTasks/>


     {/* <SideBarUser/> */}
     {/* <Profile className="profile"/>  */}

       {/* <div className="header-todolist">
         <h3>Mes tâches :</h3>
          <div className="add">
            <input type="text" name="newtask" id="newtask"className="newtask"/>
            <button onClick={handleAddTask}>Ajouter</button>
          </div>
       </div> */}
     {/* <section className="checklist">
       <ul> */}
       {
        //  toDoList.map(task => {
        //    return (
        //      <div className="task">
        //        <div className="options">
        //        <input type="checkbox" name="accomplished" id="checkbox" onClick={handleCheckbox}/>
        //        <li>{task.content}</li>
        //        {/* <button onClick={handleDelete}>Supprimer</button> */}
        //        {/* <button>Modifier</button> */}
        //        </div>
        //      </div>
        //    )
        //  })
       }
       {/* </ul>
     </section>  */}

     <Agenda/>
     {/* <ToDoList/> 
     <Ressources/> */}

    </Dadhboard>
    </TasksContexts.Provider>
  )
}
export default DashboardUser;


// --------------- STYLED COMPONENTS ---------------------

const Dadhboard = styled.div`

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

    /* .task:hover{
      background-color: #4f3149 !important;
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