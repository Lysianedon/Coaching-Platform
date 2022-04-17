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
  return (
    <Dadhboard>
     <SideBarUser/>
     
     <Profile/>
     <Agenda/>
     <ToDoList/> 
     <Ressources/>

    </Dadhboard>
  )
}
export default DashboardUser;


// STYLED COMPONENTS

const Dadhboard = styled.div`

height: 92vh;
overflow-y: scroll;


`