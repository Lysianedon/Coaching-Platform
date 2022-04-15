// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import ApiCalendar from "../../components/dashboardComponents/agenda/agenda";
import ToDoList from "../../components/dashboardComponents/todolist/todolist";
import Ressources from "../../components/dashboardComponents/ressources/ressources";

function DashboardAdmin() {
  return (
    <>
     <SideBarAdmin/>
     <ApiCalendar/>
     <ToDoList/>
     <Ressources/>
     declare var test: any;

    </>
  )
}
export default DashboardAdmin;