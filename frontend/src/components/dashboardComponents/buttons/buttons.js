// css
import styled from "styled-components";
import "./buttons.css";

function Buttons() {
    return(
        <ButtonsStyled className="buttons-form">
            <a href="/dashboard/admin/users">
                <button type="button" className="btn btn-dark m-1"> Créer un utilisateur </button>
            </a>
            
            <a href="/dashboard/admin/users/modify">
                <button type="button" className="btn btn-dark m-1"> Modifier/Supprimer un utilisateur </button>
            </a>

            <button type="button" className="btn btn-dark m-1"> Voir la liste des utilisateurs</button>
        </ButtonsStyled>
    )
}
export default Buttons;

const ButtonsStyled = styled.div`

`;