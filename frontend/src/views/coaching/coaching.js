import {useNavigate} from "react-router-dom";
import { React, useState, useEffect } from "react";
// components
import Nav from "../../components/nav";
import  Navbar from '../../components/navbar/navbar';
import Footer from "../../components/footer";
//Styled-components
import styled from "styled-components";
//Images
import coachingindividuel from '../../assets/images/individuel.png'
import coachingcollectif from '../../assets/images/collectif.png'
import business from '../../assets/images/business.png'
import tools from '../../assets/images/outils.png'
import mindset from '../../assets/images/mindset.png'

function Coaching() {
    const navigate = useNavigate();
    const [quote,setQuote] = useState("Gagner en clarté sur ton entreprise");
    
    const changeQuote = () => {
        
        const quotes = [
            "Gagner en clarté sur ton entreprise",
            "Oser passer à l'action et 'sauter dans l'arène'",
            "Prendre des décisions difficiles ",
            "Garder ta motivation et ton énergie",
            "Te sentir alignée avec ton projet",
        ]
        
        let newQuote = document.querySelector('.dynamic-quote').textContent;
        console.log(newQuote);
        
        setInterval(() => {
            if (quote === quotes[0]) {
                setQuote(quotes[1])
                
            }else if (quote === quotes[1]) { 
                setQuote(quotes[2])
                
            } else if (quote === quotes[2]) {
                setQuote(quotes[3])
                
            }else if(quote === quotes[3]) {
                setQuote(quotes[4])
                
            }else if (quote === quotes[4]) {
                setQuote(quotes[0])    
            }
        }, 3500);
    }

    // useEffect(()=> {
    //     changeQuote();

    // }, [])


    return(
        <DivWrapper>
            <Nav/>
            <Navbar/>
            <section className="banner">
                <h2>Un programme unique et personnalisé pour: </h2>
                <h2 className='dynamic-quote'>{quote}</h2>
            </section>
            <h2 className="become">Devient l'entrepreneur.se que tu as toujours rêvé d'être grâce à : </h2>

            <section className="coaching-individuel coachings">
            <h2 className='title-individuel'>Un coaching individuel</h2>
            <hr className="underline" />

              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
              </ul>
            </section>

                <section className="or">
                    <hr />
                    <p>OU</p>
                    <hr />
                </section>

            <section className="coaching-collectif coachings">
                <h2 className='title-collectif'>Un coaching collectif</h2>
                <hr className="underline" />

              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!</li>
              </ul>
            </section>

            <section className="success-pilars">
                <h2>Les 3 piliers clés de la réussite ?</h2>

                <div className="icons">
                    <div className="text-icon text-icon-business">
                        <img src={business} className='icon icon-business' alt=" icon icon-business" srcset="" />
                        <h3>Business</h3>
                    </div>
                    <div className="text-icon">
                        <img src={tools}  className='icon icon-tools' alt=" icon icon-tools" srcset="" />
                        <h3>Tools</h3>
                    </div>
                    <div className="text-icon">
                        <img src={mindset}  className='icon icon-mindset' alt=" icon icon-mindset" srcset="" />
                        <h3>Mindset</h3>
                    </div>
                </div>
            </section>

            <div className="vertical-line"></div>

            <button className="btn-rdv">Je passe à l'action</button>

            <Footer/>
        </DivWrapper>
    )
}
export default Coaching;

//< ------------------------------------------------ STYLED COMPONENTS ------------------------------------------------>
//<-------------------------------------------------------------------------------------------------------------------->

const DivWrapper = styled.div`
/* ---- GENERAL PARAMETERS ---- */
    font-family: 'poppins';

    /*------ BANNER -------- */
    .banner{
        display: flex;
        flex-direction: column;
        /* width: 95vw; */
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 45vh;
        /* background-color: #4c2a4e; */
        margin: auto;
        color: #FFC267;
        margin-bottom:5%;
    }
    /* .banner{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0%;
    height: auto;
    padding:190px 0 0 0px; */
    /* FADE IN EFFECT */
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: backwards;

    .become{
        text-align: center;
        color: #4c2a4e;
        font-weight: bold;
        font-size:2.2em;
    }

    /*------ COACHING INDIVIDUEL ------ */
    .coachings{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50vw;
        padding: 3%;
        margin: 5% auto;

        .underline{
            width: 25%;
            border: 3px solid;
            color:  white!important;
            margin-bottom: 4%;
        }

        h2{
            font-weight: bold;
            font-size:2.2em;
        }

        li{
            font-size:1em;
            line-height: 170%;
        }

    }
    .coaching-individuel{
        background-color: #FFC267;
        color: #4c2a4e;
    }

    .or{
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            font-size:3em;
            margin: 0 4%;
        }

        hr{
            width: 30%;
            border: 4px solid;
            color:  #4c2a4e!important;
        }
    }

    .coaching-collectif{
        background-color: #4c2a4e;
        color: white;
    }
    .title-collectif{
        color: white;
    }

    .success-pilars{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 5%;

        h2{
            font-weight: bold;
            font-size:2.2em;
            margin-bottom: 3%;
            color: #4c2a4e;
        }

        .icons{
            display: flex;
            justify-content: space-around;

            img{
                width: 5vw;
            }

            .text-icon-business{
                margin-left: 10vw;
            }

            .icon-business{
                height: 11vh;
            }
            .text-icon{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-right: 10vw;
            }
        }
    }
    .vertical-line{
        height: 40vh;
        border-left: 4px solid #FFC267;
        padding-right: 5%;
        height: 30vh;
        width: 4px;
        margin: auto 0 3% 50vw;
    }
    
    .btn-rdv{
        width: 18vw;
        margin: 3% auto;
        display: block;
        align-items: center;
        padding: 1.1%;
        font-size: 1.2em;
        background-color: #4c2a4e;
        color: white;
        font-weight: bold;
        border-radius: 5px;
    }
/************* RESPONSIVE *********************** */
/* Responsive Tablet */
 @media screen and (min-width: 768px) and (max-width: 960px) {
    .become{
        font-size: 1.8em;
        margin: 0% 5% 0% 5%;
    }
    .coaching-individuel,
    .coaching-collectif{
        width: 70vw;
        h2{
            font-size: 1.8em;
        }
    }
    .or{
        p{
            font-size: 1.8em;
        }
    }
    .success-pilars{
        h2{
            font-size: 1.8em;
        }
    }
    .vertical-line{
        height: 20vh;
    }
    button{
        width: 25vw;
        font-size: 1em;
    }
 }

/* Responsive Phone */
 @media screen and (max-width: 480px) {
 .become{
        font-size: 1.5em;
        margin: 0% 5% 0% 5%;
    }
    .coaching-individuel,
    .coaching-collectif{
        width: 80vw;
        h2{
            font-size: 1.5em;
        }
    }
    .or{
        p{
            
            font-size: 1.5em;
        }
    }
    .success-pilars{
        h2{
            font-size: 1.5em;
        }

        .icons{
            img{
                width: 15vw;
            }
        }
    }
    .vertical-line{
        height: 15vh;
    }
    button{
        width: 40vw;
        font-size: 0.8em;
    }
    
    
 };
`