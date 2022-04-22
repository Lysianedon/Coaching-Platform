import React from "react";

// components
import Nav from "../components/nav";
import Footer from "../components/footer";
import QuestionnaireImage from "../assets/images/deuxieme.png";

// css
import styled from "styled-components";

function QuestionnaireStarter() {
  return (
    <QuestionnaireStyled>
      <Nav />
      <div className="questionnaire-form">
        <div>
          <img
            className="questionnaire-image"
            src={QuestionnaireImage}
            alt="questionnaire"
          />
        </div>

        <div className="text-questionnaire">
          <h4 id="description-questionnaire">
            Commençons par faire connaissance: ce questionnaire a pour but de
            comprendre mieux votre objective. Merci !
          </h4>
          <h5><em>Cela prendra 10 minutes...</em> </h5>

          <a href="https://www.typeform.com/">
            <button href="/question" className="btn-start btn-dark">
              Commencer
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </QuestionnaireStyled>
  );
}
export default QuestionnaireStarter;

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
  .questionnaire-image {
    width: auto;
    height: 50vh;
    text-align: center;
    padding: auto;
    margin-top: 2%;
    margin-left: 5vw;
    border-radius: 10px;
  }
  .text-questionnaire {
    margin-top: 0%;
  }
  #description-questionnaire {
    margin: 5% 2% 2% 2%;
  }
  .btn-start{
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
      .btn-start{
        width: 30vw;
      }
    }
`;
