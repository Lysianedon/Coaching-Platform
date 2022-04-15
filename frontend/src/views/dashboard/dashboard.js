// components
import SideBar from "../../components/dashboardComponents/sidebar/sidebar";
import ApiCalendar from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

function Dashboard() {
  return (
    <>
     <SideBar/>
     <ApiCalendar/>
     <ToDoList/>
     <Ressources/>
     declare var test: any;

    </>
  )
}
export default Dashboard;