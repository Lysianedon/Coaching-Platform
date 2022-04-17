import axios from 'axios';
import { React, useState, useEffect } from "react";

// components
import SideBarUser from "../../components/dashboardComponents/sidebar-user/sidebarUser";
import Profile from "../../components/dashboardComponents/profile-user/profile";
import Agenda from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";
import Footer from "../../components/footer/footer";
//Styled-components
import styled from "styled-components";


function DashboardUser() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fetchProfileInfos = () => {
    console.log("before fetch");
    axios.get('http://localhost:8000/dashboard/user')
    .then(res => 
      {res.json();
      console.log(res.data);
    });
  }

 useEffect(() => {
  console.log("before fetch");
  fetchProfileInfos();

 }, [])

  return (
    <Dadhboard>
     <SideBarUser/>
     <Profile className="profile"/>
     <Agenda/>
     <ToDoList/> 
     <Ressources/>

    </Dadhboard>
  )
}
export default DashboardUser;


// --------------- STYLED COMPONENTS ---------------------

const Dadhboard = styled.div`

/* height: 130vh !important; */
overflow-y: scroll;
overflow: scroll;
display: flex;
flex-direction: column;

.profile {
  margin-top: 25%;

}
`