// css
import styled from "styled-components";
import "./buttons.css";

function Buttons() {
    return(
        <ButtonsStyled className="buttons-form">
            <a href="/dashboard/admin/users">
                <button type="button" className="btn btn-dark m-1"> Créer un utilisateur </button>
            </a>
            <a href="/dashboard/admin/list">
                <button type="button" className="btn btn-dark m-1"> Voir la liste des utilisateurs</button>
            </a>
            
        </ButtonsStyled>
    )
}
export default Buttons;

const ButtonsStyled = styled.div`

`;