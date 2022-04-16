// css
import "./buttons.css";

function Buttons() {
    return(
        <div className="buttons">
            <button type="button" className="btn btn-dark m-1"> Créer un utilisateur </button>
            <button type="button" className="btn btn-dark m-1"> Modifier/Supprimer un utilisateur  </button>
            <button type="button" className="btn btn-dark m-1"> Voir la liste des utilisateurs</button>
        </div>
    )
}
export default Buttons;