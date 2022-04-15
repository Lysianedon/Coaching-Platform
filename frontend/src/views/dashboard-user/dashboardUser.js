// components
import SideBar from "../../components/dashboardComponents/sidebar-user/sidebarUser";
import Profile from "../../components/dashboardComponents/profile-user/profile";
import Agenda from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

function DashboardUser() {
  return (
    <>
     <SideBar/>
     <Profile/>
     <Agenda/>
     <ToDoList/>
     <Ressources/>
    </>
  )
}
export default DashboardUser;