import axios from 'axios';
import { React, useState, useEffect } from "react";

// components
import SideBarUser from "../../components/dashboardComponents/sidebar-user/sidebarUser";
import Profile from "../../components/dashboardComponents/profile-user/profile";
import Agenda from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

//Styled-components
import styled from "styled-components";


function DashboardUser() {


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