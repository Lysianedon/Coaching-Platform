import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
import axios from 'axios';
import { React, useState, useEffect } from "react";


// css
import "./sidebarAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';

function SideBar() {

  const[names, setNames] = useState({});

  useEffect(()=> {
    axios.get('http://localhost:8000/dashboard/admin', {withCredentials: true})
    .then(res => {
      setNames({firstname : res.data.user.firstName, lastname : res.data.user.lastName})
    })
  }, [])

  const handleLogout = () => {
    axios.get('http://localhost:8000/logout', {withCredentials: true})
  }

  return (
    <div className="sidebar">
      <div className="imageDiv">
          <img src={Logo} alt="" />
      </div>
      <div className="pauline">
          <p>{names.firstname} {names.lastname}</p>
          <p>- Admin -</p>
      </div>
          <Ul>
            <Link to="#agenda" className="link"> Agenda</Link>
            <Link to="#todolist" className="link">To do list</Link>
            <Link to="#ressources" className="link"> Mes ressources </Link>
            <Link to="/" className="link">Gérer mes coachés </Link>
            <div className="logout">
              {/* <Link to="/" className="link">Se déconnecter</Link> */}
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

