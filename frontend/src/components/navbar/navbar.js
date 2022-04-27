import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo-home-removebg-preview.png";
import { React, useState, useEffect } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from "./NavbarData";
import SubMenu from "./subMenu";
import { IconContext } from "react-icons/lib";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from "styled-components";

function Navbar({ item }) {
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!navbar);

  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth < 1000) {
        setNavbar(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [window.innerWidth]);
  // const[names, setNames] = useState({});

  // useEffect(()=> {
  //   axios.get('http://localhost:8000/dashboard/admin', {withCredentials: true})
  //   .then(res => {
  //     setNames({firstname : res.data.user.firstName, lastname : res.data.user.lastName})
  //   })
  // }, [])
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showNavbar} />
          </NavIcon>
        </Nav>
        <NavBar navbar={navbar}>
          <NavbarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showNavbar} />
            </NavIcon>
            <LogoSection className="imageDiv">
              <LogoImage src={Logo} alt="" />
            </LogoSection>
            {NavbarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </NavbarWrap>
        </NavBar>
      </IconContext.Provider>
    </div>
  );
}
export default Navbar;

const Nav = styled.div`
  background: #4f3149;
  border-radius: 0 0 12px;
  height: 80px;
  width: 80px;
  display: flex;
  position: fixed;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  position: fixed;
  justify-content: flex-start;
  align-items: center;
`;

const NavBar = styled.nav`
  background: #4f3149;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ navbar }) => (navbar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow: auto;
`;

const NavbarWrap = styled.div`
  width: 100%;
`;
const LogoSection = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 100px;
`;

const LogoImage = styled.img`
  width: 40%;
  background-color: white;
  border-radius: 10%;
  padding: 10px;
`;
