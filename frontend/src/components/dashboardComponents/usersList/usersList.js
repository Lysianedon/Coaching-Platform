// css
import styled from "styled-components";

import React, { useState, useEffect } from "react";
import axios from "axios";

import CardUser from "./cardUser";
// import Buttons from "../buttons/buttons";


function UsersList() {
    // const [users, setUsers] = useState([]);
    // const fetchUsersList = () =>{
    //   axios.get ("http://localhost:8000/dashboard/admin/users", { withCredentials: true })
    // .then(res => 
    //   {
    //   console.log(res.data);
    //   setUsers(res.data.adminList)
    // });}
    
    // useEffect(() => {
    //     fetchUsersList();
    // }, []);

    return(
        <UsersListStyled>
            {/* <Buttons/> */}
            
            <CardUser
                // users = {users}
            />
       

        </UsersListStyled>
    )
}
export default UsersList;

const UsersListStyled = styled.div`


`;