import React from 'react';
import {Link} from 'react-router-dom';

// components
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import QuestionaireImage from "../../assets/images/questionaire.jpg"

// css
import "./questionaireStarter.css";

function QuestionaireStarter() {
    return(
        <div>
            <Nav/>
            <div className="questionaire-form">
                <div>

                    <img className="questionaire-image" src={QuestionaireImage} alt='' />
                </div>
                
                <div className="text-questionaire">
                    <h4 id="description-questionaire">Commençons par faire connaissance : ce questionnaire a pour but de ... 
                    </h4>
                    <p>Cela prendra X minutes...</p>

                    <Link to={{ pathname: "https://www.typeform.com/" }} target="_blank" >
                    <button href="/question" className="btn btn-dark">Commencer</button>
                    </Link>
                   
                </div>
                
            </div>
            
            <Footer/>
        </div>
    )
}
export default QuestionaireStarter;