// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import ModifyUser from "../../components/dashboardComponents/modify-user/modifyUser";
import Buttons from "../../components/dashboardComponents/buttons/buttons";

function DashboardAdmin() {
  return (
    <>
     <SideBarAdmin/>
     <Buttons/>
     <ModifyUser/>

    </>
  )
}
export default DashboardAdmin;