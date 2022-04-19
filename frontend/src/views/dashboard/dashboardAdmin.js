import axios from 'axios';
import { React, useState, useEffect } from "react";

// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import Bonjour from "../../components/dashboardComponents/Bonjour";
import ApiCalendar from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

//css
import styled from 'styled-components';

function DashboardAdmin() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const fetchProfileInfos = () => {
    console.log("before fetch");
    axios.get('http://localhost:8000/dashboard/admin', { withCredentials: true })
    .then(res => 
      {
      console.log(res.data);
      setLastname(res.data.user.firstName);
      setFirstname(res.data.user.firstName)
    });
  }

 useEffect(() => {
  fetchProfileInfos();

 }, [])
  return (
    <>
    <h2>Bonjour {firstname} ! </h2>
     <h2>Coucou</h2>
     <SideBarAdmin/> 
     <Container>
      <Bonjour/>
      <AgendaStyle>
        <ApiCalendar/>
      </AgendaStyle>
      <ToDoStyle>
        <ToDoList/>
      </ToDoStyle>
      <RessourcesStyle>
        <Ressources/> 
      </RessourcesStyle>
     </Container>


    </>
  )
}
export default DashboardAdmin;

const Container = styled.li`
width: 72vw;
padding: 90px;
position:absolute;
border-radius: 12px;
left: 280px;
font-size: 15px;
color: white;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
overflow-x: hidden;
`;


const AgendaStyle = styled.div`

    border-radius:12px;
    background-color:#4c2a4e;
    position:inherit;
    padding:15px;
    color:white;
    margin-top:300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ToDoStyle = styled.div`

  height: 400px;
  width: 72vw;
	padding: 90px;
  border-radius:12px;
  background-color:#4c2a4e;
  margin-top:1100px;
  padding:15px;
  padding-bottom:80px;
  position:inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  
 `;

const RessourcesStyle = styled.div`

  font-size: 16px;
  height:500px;
  width:72vw;
  position:inherit;
	padding: 90px;
  border-radius:12px;
  background-color:#4c2a4e;
  margin-top:2080px;
  padding:15px;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;