import axios from 'axios';
import { React, useState, useEffect } from "react";

// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import ApiCalendar from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

//css
import styled from 'styled-components';
import ToDoListUser from '../../components/dashboardComponents/ToDoListUser';

function DashboardUser() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

// AGENDA INFOS - GOOGLE CALENDAR :
  const [emailUser,setEmailUser] = useState('');
  const fetchEmailUser = () => {

      axios.get('http://localhost:8000/dashboard/user', {withCredentials : true})
      .then(res =>{ 
          let email = (res.data.user.email);
          email = email.replace('@', '%40');
          setEmailUser(email);
      })
  }

  const fetchProfileInfos = () => {
    axios.get('http://localhost:8000/dashboard/user', { withCredentials: true })
    .then(res => 
      {
      // console.log(res.data);
      setLastname(res.data.user.lastName);
      setFirstname(res.data.user.firstName)
    });
  }

 useEffect(() => {
  fetchProfileInfos();
  fetchEmailUser();

 }, [])
  return (
    <>
     <SideBarAdmin/> 
     <Container>
       <h2>Hello {firstname}!</h2>
       <section className="ToDoListUser">
        <ToDoListUser />
       </section>

       <h2 className='title-mesrdv'>Mes Rendez-Vous</h2>
       <iframe className="calendar" src={`https://calendar.google.com/calendar/embed?src=${emailUser}&ctz=Europe%2FParis`} height={300}></iframe>

       <Ressources/> 
     </Container>
    </>
  )
}
export default DashboardUser;

const Container = styled.li`
overflow-x: hidden;

h2{
  color: black !important;
  font-size: 5rem;
}

.title-mesrdv{
  background-color: #4f3149;
  width: 40vw;
  margin: auto;
  margin-top: 5%;
  padding-bottom: 1%;
  color: white !important;
  border-radius: 5px;
}


.ToDoListUser{
  margin-top: 2%;
}

.calendar{
  width: 40.1vw;
  margin-left: 30%;
  height: 50vh;
}



`;


const ToDoStyle = styled.div`
  margin:0%;
  height: 830px;
  width: 72vw;
	padding: 90px;
  border-radius:12px;
  background-color:#4c2a4e;
  margin-top:1600px;
  padding:15px;
  padding-bottom:80px;
  position:inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  
 `;

const RessourcesStyle = styled.div`
  font-size: 16px;
  height:600px;
  width:72vw;
  position:inherit;
	padding: 90px;
  border-radius:12px;
  background-color:#4c2a4e;
  margin-top:3180px;
  padding:15px;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;