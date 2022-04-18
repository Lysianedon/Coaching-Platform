import React from 'react';

// components
import Nav from "../components/nav";
import Footer from "../components/footer";
import QuestionnaireImage from "../assets/images/questionnaire.jpg"

// css
import styled from 'styled-components';

function QuestionnaireStarter() {
    return(
        <QuestionnaireStyled>
            <Nav/>
            <div className="questionnaire-form">
                <div>

                    <img className="questionnaire-image" src={QuestionnaireImage} alt='' />
                </div>
                
                <div className="text-questionnaire">
                    <h4 id="description-questionnaire">Commençons par faire connaissance : ce questionnaire a pour but de ... 
                    </h4>
                    <p>Cela prendra X minutes...</p>

                    <a href="https://www.typeform.com/"><button href="/question" className="btn btn-dark">Start</button></a>
                    
                   
                </div>
                
            </div>
            
            <Footer/>
        </QuestionnaireStyled>
    )
}
export default QuestionnaireStarter;

const QuestionnaireStyled = styled.div`
.questionnaire-form{
    border: 1px solid rgb(255, 255, 255);
    background-color: aliceblue;
    border-radius: 10px;
    width: 80vw;
    height: 70vh;
    margin: 3% 10% 5% 10%;
    text-align: center;
}
.questionnaire-image{
    width: 50vh;
    height: auto;
    text-align: center;
    padding: auto;
    margin-top: 2%;
    margin-left: 25vw;
}
.text-questionnaire{
    margin-top: 5%;
}
#description-questionnaire{
    margin-top: 35vh;
}
`;