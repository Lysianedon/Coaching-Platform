import React from 'react';
// import { Link, Router } from 'react-router-dom';

//css
import styled from 'styled-components';
import Logo from "../assets/images/Logo-home-removebg-preview.png"

function Nav() {
    return (
      <div>
          <Navbar> 
            <LogoSection>
            <LogoImage src={Logo} alt='' />
            </LogoSection>
                <Ul>

                    <a href="/" className='text-link'>Home</a>
                    <a href="/presentation" className='text-link'>Qui suis-je ?</a>
                    <a href="/coaching" className='text-link'>Coaching</a>
                    <a href="/login" className='text-link'>Login</a>
                    <a href="/contact" className='text-link'>Contact</a>
                    <a href="/questionnaire/starter"><QuestionnaireBtn >Questionnaire </QuestionnaireBtn></a>
                </Ul>
      
          </Navbar>
      </div>
    )
  }
  
  export default Nav;

const Ul = styled.li`
padding: 30px;
list-style: none;
display: inline-block;
gap: 12px;
`;


const Navbar = styled.nav`
  padding: 10px;
  margin: 0px;
  margin-top:4px;
  text-align: right;
  display: inline-block;
  vertical-align:top;
  width: 100%;
  position:fixed;
  @media (max-width: 1000px) {
  display:none;
}
  
  a {
    color: #4c2a4e;
    font-size: 1.7rem;
    font-weight: bold;

  }
  .text-link {
    color: inherit;
    text-decoration: inherit;
    color:black;
    margin-right: 20px;
    height: 40px;
    line-height: 30px; 
    
  }

`;
const LogoSection = styled.div`
float:left;
justify-content:space-between;
padding-left:25px;
`;

const LogoImage = styled.img`
  width: 80px;
 

`;

const QuestionnaireBtn = styled.button`
border-radius:5px;
font-size: 1.1em;
border: none;
text-align:center;
background-color: #4c2a4e;
color: white;
height: 7vh;
width:150px;
  `;