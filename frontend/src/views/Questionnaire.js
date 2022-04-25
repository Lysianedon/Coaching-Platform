import React from "react";

// components
import Nav from "../components/nav";
import Navbar from "../components/navbar/navbar";

// css
import styled from "styled-components";

function Questionnaire() {
  return (
    <>
      <QuestionnaireStyled>
        <Nav />
        <Navbar />
        <div className="questionnaire-form">
          <div className="text-questionnaire">
            <h4 id="description-questionnaire">
              Commençons par faire connaissance: ce questionnaire a pour but de
              mieux comprendre vos attentes. Merci !
            </h4>
            <h5>
              <em>Cela prendra 10 minutes...</em>{" "}
            </h5>

            <a href="">
              <button className="btn-start btn-dark">Commencer</button>
            </a>
          </div>
        </div>
      </QuestionnaireStyled>
    </>
  );
}
export default Questionnaire;

const QuestionnaireStyled = styled.div`
  font-family: "poppins";
  font-size: 1rem;
  .questionnaire-form {
    border: 1px solid rgb(255, 255, 255);
    background-color: #f5eff9;
    border-radius: 10px;
    width: 80vw;
    height: auto;
    margin: 0% 15% 2% 10%;
    text-align: center;
  }
  .text-questionnaire {
    margin-top: 0%;
  }
  #description-questionnaire {
    margin: 35% 2% 2% 2%;
    font-size: 2.2rem;
  }
  .text-questionnaire em {
    font-size: 1.8rem;
  }
  .btn-start {
    margin: 5% 0% 5% 0%;
    width: 10vw;
    border-radius: 4px;
  }
  /* RESPONSIVE */
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    .text-questionnaire {
      font-size: 0.9rem;
    }
    .btn-start {
      width: 30vw;
    }
  }
`;
