// css
import styled from "styled-components";
import "./buttons.css";

function Buttons() {
    return(
        <ButtonsStyled className="buttons-form">
            <a href="/dashboard/admin/users">
                <button type="button" className="btn-create btn-dark"> Créer un utilisateur </button>
            </a>
            <a href="/dashboard/admin/list">
                <button type="button" className="btn-list btn-dark"> Voir la liste des utilisateurs</button>
            </a>
            
        </ButtonsStyled>
    )
}
export default Buttons;

const ButtonsStyled = styled.div`
    display: flex;
    .btn-create,
    .btn-list {
        width: 120%;
        height: 7vh;
        border-radius: 4px ;
        font-size: 1rem;
    }
    .btn-create{
        margin: 0% 0% 3% 25%;
    }
    .btn-list {
        margin: 0% 0% 3% 175%;
    }
@media only screen and (min-width: 768px) and (max-width: 960px)  { 
    width: 60%;
    .btn-create{
        margin: 0% 0% 3% -50%;
    }
    .btn-list {
        margin: 0% 0% 3% 55%;
    }
}
@media screen and (max-width: 480px) { 
    width: 50%;
    display: inline-block;
    .btn-create,
    .btn-list{
        margin: 3% 0% 3% -45%;
    }
}
    
`;