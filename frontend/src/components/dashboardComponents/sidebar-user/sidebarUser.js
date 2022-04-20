import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
// css
import "./sidebarUser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';
<<<<<<< HEAD
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
=======
//Axios
import axios from 'axios';

function SideBar() {
  const handleLogout = () => {
    axios.get('http://localhost:8000/logout', {withCredentials: true})
  }

>>>>>>> a128bc96df4ef47f1c930597b1db6e27ebde4d52
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
<<<<<<< HEAD
            <Link to="/" className="link" onClick={fetchToLogOut}>
=======
            {/* <Link to="/" className="link">
>>>>>>> a128bc96df4ef47f1c930597b1db6e27ebde4d52
              Se déconnecter
            </Link> */}
             <a href="/" className="link" onClick={handleLogout}>Se déconnecter</a>
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