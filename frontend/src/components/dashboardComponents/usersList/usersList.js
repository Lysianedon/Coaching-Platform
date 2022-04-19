// css
import styled from "styled-components";


import CardUser from "./cardUser";
import Buttons from "../buttons/buttons";

function UsersList() {
    return(
        <UsersListStyled>

            <CardUser/>
            {/* <Buttons/> */}

        </UsersListStyled>
    )
}
export default UsersList;

const UsersListStyled = styled.div`


`;