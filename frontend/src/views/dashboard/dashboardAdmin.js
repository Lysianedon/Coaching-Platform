import axios from 'axios';
import { React, useState, useEffect } from "react";

// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import Bonjour from "../../components/dashboardComponents/Bonjour";
import ApiCalendar from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

function DashboardAdmin() {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  const fetchProfileInfos = () => {
    console.log("before fetch");
    axios.get('http://localhost:8000/dashboard/admin')
    .then(res => 
      {res.json();
      console.log(res.data);
    });
  }

 useEffect(() => {
  fetchProfileInfos();

 }, [])
  return (
    <>
     <SideBarAdmin/> 
     <Bonjour/>
     <ApiCalendar/>
     <ToDoList/>
     <Ressources/> 


    </>
  )
}
export default DashboardAdmin;