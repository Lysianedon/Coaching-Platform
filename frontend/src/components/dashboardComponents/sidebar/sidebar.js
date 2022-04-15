import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
// css
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="imageDiv">
          <img src={Logo} alt="" />
      </div>
      <div className="pauline">
          <p>Pauline Gane</p>
          <p>- Admin -</p>
      </div>
          <Ul>
          <Link to="#agenda" className="text-link">
            Agenda
          </Link>
          <Link to="#todolist" className="text-link">
            To do list
          </Link>
          <Link to="#ressources" className="text-link">
            Mes ressources
          </Link>
          <Link to="/" className="text-link">
            Gérer mes coachés
          </Link>
          <div className="logout">
            <Link to="/" className="text-link">
              Se déconnecter
            </Link>
          </div>
        </Ul>
    </div>
  );
}
export default SideBar;


const Ul = styled.li`
padding: 30px;
list-style: none;
gap: 12px;
`;