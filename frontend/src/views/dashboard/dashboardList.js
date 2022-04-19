import axios from 'axios';
import { React,  useEffect } from "react";

// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import UsersList from '../../components/dashboardComponents/usersList/usersList';

//css
import styled from 'styled-components';

function DashboardList() {

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
        <UsersList/>

    </>
  )
}
export default DashboardList;


