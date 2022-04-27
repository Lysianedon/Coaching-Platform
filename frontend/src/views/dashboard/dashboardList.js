import { React, useEffect } from "react";

// components
import SideBarAdmin from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
import UsersList from "../../components/dashboardComponents/usersList/usersList";
//css
import styled from "styled-components";

function DashboardList() {
  return (
    <>
      <SideBarAdmin />
      {/* <Container> */}
      <UsersList />
      {/* </Container> */}
    </>
  );
}
export default DashboardList;

// const Container = styled.li`
// width: 72vw;
// padding: 90px;
// position:absolute;
// border-radius: 12px;
// margin: 12% 0 0 20%;
// font-size: 15px;
// color: white;
// height: 100%;
// overflow-x: hidden;
// `;
