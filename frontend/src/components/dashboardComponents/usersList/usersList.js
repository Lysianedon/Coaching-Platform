// css
import styled from "styled-components";

import CardUser from "./cardUser";
// import Buttons from "../buttons/buttons";


function UsersList() {
    return(
        <UsersListStyled>
            {/* <Buttons/> */}
            
            <CardUser />
        </UsersListStyled>
    )
}
export default UsersList;

const UsersListStyled = styled.div`
/* RESPONSIVE */
@media screen and (max-width: 480px) {
}

`;