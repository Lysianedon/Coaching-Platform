import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo-home-removebg-preview.png";
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

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
		const changeWidth = () => {
			if (window.innerWidth < 1000) {
				setSidebar(false);
			}

      if (window.innerWidth >= 1000) {
				setSidebar(true);
			}
		};

		window.addEventListener("resize", changeWidth);
		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, [window.innerWidth]);
  
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
              return <SubMenu item={item} key={index} className="hover"/>;
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
  width:80px;
  display: flex;
  position:fixed;
  justify-content: flex-start;
  align-items: center;
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
  margin-top: 100px;

`;

const LogoImage = styled.img`
  width: 40%;
  background-color: white;
  border-radius: 10%;
  padding:10px;
`;

  