import axios from 'axios';
import { React,  useEffect } from "react";

// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import UsersList from '../../components/dashboardComponents/usersList/usersList';

//css
import styled from 'styled-components';

function DashboardList() {

  
  return (
    <>
     <SideBarAdmin/> 
     <UsersList/>

    </>
  )
}
export default DashboardList;


