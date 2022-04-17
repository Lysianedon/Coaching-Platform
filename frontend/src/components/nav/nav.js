import React from 'react';
import { Link, Router } from 'react-router-dom';

//css
import styled from 'styled-components';
import './nav.css'
import Logo from "../../assets/images/Logo.png"


function Nav() {
    return (
      <div>
          <Navbar> 
            <img src={Logo} alt='' />
                <Ul>
                    {/* <Link to="/" className='text-link'>Home</Link>
                    <Link to="/presentation" className='text-link'>Qui suis-je ?</Link>
                    <Link to="/coaching" className='text-link'>Coaching</Link>
                    <Link to="/login" className='text-link'>Login</Link>
                    <Link to="/contact" className='text-link'>Contact</Link>
                    <Link to="/questionaire/starter"><QuestionnaireBtn className='text-link btn btn-dark'>Questionnaire</QuestionnaireBtn>
                    </Link> */}
                    <a href="/" className='text-link'>Home</a>
                    <a href="/presentation" className='text-link'>Qui suis-je ?</a>
                    <a href="/coaching" className='text-link'>Coaching</a>
                    <a href="/login" className='text-link'>Login</a>
                    <a href="/contact" className='text-link'>Contact</a>
                    <a href="/questionaire/starter"><QuestionnaireBtn className='text-link btn btn-dark'>Questionnaire </QuestionnaireBtn></a>
                </Ul>
      
          </Navbar>
      </div>
    )
  }
  
  export default Nav;

const Ul = styled.li`
padding: 30px;
list-style: none;
display: inline;
gap: 12px;
`;

const Navbar = styled.nav`
  /* background-color:r; */
  padding: 10px;
  margin: 0px;
  text-align: right;
  display:inline-block;
  vertical-align:top;
  width: 100%;
  `;

const QuestionnaireBtn = styled.button`
border-radius:5px;
border:none;
background-color:black;
color:white;
@media (max-width: 2500px) {
  width:150px;
  height:40px;
}
  `;