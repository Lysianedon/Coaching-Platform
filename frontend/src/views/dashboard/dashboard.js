// components
import SideBar from "../../components/dashboardComponents/sidebar/sidebar";
import Agenda from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

function Dashboard() {
  return (
    <>
     <SideBar/>
     <Agenda/>
     <ToDoList/>
     <Ressources/>
    </>
  )
}
export default Dashboard;