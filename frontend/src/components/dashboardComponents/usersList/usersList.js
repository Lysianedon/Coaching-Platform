import {React, useState} from "react";
// css
import styled from "styled-components";

import CardUser from "./cardUser";
import Buttons from "../buttons/buttons";


function UsersList() {
    const [userId, setUserId] = useState("");
    return(
        <UsersListStyled>
            {/* <Buttons/> */}
            
            <h3 className="tilte-cardUser">Liste d'utilisateurs</h3>
            {/* userId */}
            
                <div className="search-bar-form">
                        <label htmlFor="userId">
                            *Numéro Identifiant de l'utilisateur: 
                        </label> <br/>
                    <div className="search-bar">
                        <input
                            id="userId"
                            type="userId"
                            placeholder="User ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        ></input> 

                        {/* Search button */}
                        <button type="search" className="btn-search" id="search" name="Search" value="Search">
                            Chercher
                        </button> 
                    </div>
                </div>
                    
            
            <CardUser />
        </UsersListStyled>
    )
}
export default UsersList;

const UsersListStyled = styled.div`
.tilte-cardUser{
    text-align: center;
}  
.search-bar-form{
    margin: 5% 0% 2% 23%;
}
.search-bar{
    display: flex;
}
label {
    margin: 0% 0% 2% 0%;
    font-weight: 600;
    font-size: 1rem;
}
#userId{
    width: 40vw;
    height: 3vw;
}
.btn-search{
    background-color: black;
    color: white;
    float: left;
    margin-left: 2%;
    border-radius: 4px;
}
/* RESPONSIVE */
@media screen and (max-width: 480px) {
}

`;