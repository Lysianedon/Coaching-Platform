import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";

// css
import "./sidebarAdmin.css";
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
            <Link to="#agenda" className="link"> Agenda</Link>
            <Link to="#todolist" className="link">To do list</Link>
            <Link to="#ressources" className="link"> Mes ressources </Link>
            <Link to="/" className="link">Gérer mes coachés </Link>
            <div className="logout">
              <Link to="/" className="link">Se déconnecter</Link>
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

