import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
import axios from 'axios';
import { React, useState, useEffect } from "react";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './subMenu';
import { IconContext } from 'react-icons/lib';
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components';

function SideBar({item}) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  // const[names, setNames] = useState({});

  // useEffect(()=> {
  //   axios.get('http://localhost:8000/dashboard/admin', {withCredentials: true})
  //   .then(res => {
  //     setNames({firstname : res.data.user.firstName, lastname : res.data.user.lastName})
  //   })
  // }, [])
  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <LogoSection className="imageDiv"><LogoImage src={Logo} alt=""/></LogoSection> 
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
}
export default SideBar;


const Nav = styled.div`
  background: #4f3149;
  border-radius:0 0 12px;
  height: 80px;
  width:100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position:relative;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  position:fixed;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #4f3149;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow:auto;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const LogoSection = styled.div`
  justify-content:center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 170px;
  @media (max-width: 550px) { 
    align-items: center;
    justify-content: center;
    margin-bottom: 120px;
    margin-top: 30px;
}
`;

const LogoImage = styled.img`
  width: 50%;
  background-color: white;
  border-radius: 10%;
  padding-left: 5%;
  @media (max-width: 550px) { 
    width: 50%;
    background-color: white;
    border-radius: 10%;
    padding-left: 5%;
}
`;

  