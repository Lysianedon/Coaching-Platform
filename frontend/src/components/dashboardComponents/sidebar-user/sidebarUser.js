import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
// css
import "./sidebarUser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';
import axios from "axios";

function SideBar() {

  const fetchToLogOut = () => {
    axios.get('http://localhost:8000/logout')
    .then( res => {
      localStorage.removeItem('jwt');
      res.status(200)
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="sidebar">
      <div className="imageDiv">
          <img src={Logo} alt="" />
      </div>
          <Ul>
          <Link to="#profile" className="link">
            Profile
          </Link>
          <Link to="#agenda" className="link">
            Agenda
          </Link>
          <Link to="#todolist" className="link">
            To do list
          </Link>
          <Link to="#ressources" className="link">
            Mes ressources
          </Link>
          <div className="logout">
            <Link to="/" className="link" onClick={fetchToLogOut}>
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