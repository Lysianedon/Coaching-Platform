import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
// css
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SideBar() {
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <li>
          <img src={Logo} alt="" />
        </li>
      <ul>
        
        <li>
          <Link to="#agenda" className="text-link">
            Agenda
          </Link>
        </li>

        <li>
          <Link to="#todolist" className="text-link">
            To do list
          </Link>
        </li>
        <li>
          <Link to="#ressources" className="text-link">
            Mes ressources
          </Link>
        </li>
        <li>
          <Link to="/" className="text-link">
            Gérer mes coachés
          </Link>
        </li>
      </ul>
      <li>
        <Link to="/" className="text-link">
          Se déconnecter
        </Link>
      </li>
    </div>
  );
}
export default SideBar;
