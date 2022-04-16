// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import Bonjour from "../../components/dashboardComponents/Bonjour";
import ApiCalendar from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

function DashboardAdmin() {
  return (
    <>
     <SideBarAdmin/>
     <Bonjour/>
     <ApiCalendar/>
     <ToDoList/>
     <Ressources/>
     declare var test: any;

    </>
  )
}
export default DashboardAdmin;