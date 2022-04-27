import { useNavigate } from "react-router-dom";
// components
import Navbar from "../../components/navbar/navbar";
import Nav from "../../components/nav";
import Footer from "../../components/footer/Footer";
//Images
import optionun from "../../assets/images/un.png";
import coachingindividuel from "../../assets/images/individuel.png";
import coachingcollectif from "../../assets/images/collectif.png";
import presentation from "../../assets/images/trois.jpeg";

//Styled-components
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();

  const goToQuestionnaire = (e) => {
    const button = document.querySelector(".button-action1");
    button.style.backgroundColor = "#FFC267";
    button.style.color = "#4c2a4e";

    setTimeout(() => {
      navigate("/questionnaire");
    }, 1000);
  };

  const goToCoaching = () => {
    navigate("/coaching");
  };

  const goToPresentation = () => {
    navigate("/presentation");
  };

  const goToContactPage = (e) => {
    const button = document.querySelector(".contact-me-btn");
    button.style.backgroundColor = "#FFC267";
    button.style.color = "#4c2a4e";

    setTimeout(() => {
      navigate("/contact");
    }, 1000);
  };
  return (
    <DivWrapper>
      <Nav />
      <Navbar />
      <section className="banner">
        <h1>
          " Je t'aide à{" "}
          <span className="bg-purple bg-purple-1">dépasser tes</span>
          <span className="bg-purple bg-purple-2">croyances limitantes </span> afin de
          devenir l'entrepreneur.se que tu as toujours rêvé d'être. "{" "}
          <span className="paulinegane">Pauline Gane -</span>
        </h1>
        <img src={optionun} alt="" srcset="" />
      </section>

      <section className="promesse">
        <h2 className="promesse-title">Ma promesse</h2>

        <div className="promesse-content">
          <p className="texte">
          Je t'accompagne grâce à un programme de coaching personnalisé pour atteindre tes objectifs d'entrepreneuse.
           Développe ton business, apprends à organiser ton temps et tes priorités au quotidien  et ton chiffre d'affaire. 
            doloremque hic aspernatur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium, iste! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium, iste!
          </p>

          <iframe
            width="650"
            height="400"
            src="https://www.youtube.com/embed/7jIhhbGTj8I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section className="action-block">
        <hr />
        <div className="titre-btn">
          <h2 className="action-title1">Prêt.e à passer à l’action ?</h2>
          <button className="button-action1" onClick={goToQuestionnaire}>
            Je passe à l'action
          </button>
        </div>
        <hr />
      </section>

      <section className="coaching-offers-block">
        <h2>Débloque ton potentiel avec :</h2>

        <div className="coaching-blocks">
          <div className="coaching-card coaching-individuel">
            <h2 className="title-individuel">Un coaching individuel</h2>
            <img src={coachingindividuel} alt="" srcset="" />

            <ul>
              <li>
              Un diagnostic de ton entreprise 
              </li>
              <li>
              Des sessions de coaching collectif 
              </li>
              <li>
              10 days meditation journey = create new habits 
              </li>
              <li>
              5 days Soft skills training (CNV, resilience, adaptability)
              </li>
            </ul>

            <button onClick={goToCoaching}>En savoir plus</button>
          </div>
          <h2 className="ou">OU</h2>
          <div className="coaching-card coaching-collectif">
            <h2 className="title-collectif">Un coaching collectif</h2>
            <img src={coachingcollectif} alt="" srcset="" />

            <ul>
              <li>
              Des méditations guidées pour commencer ta journée
              </li>
              <li>
              5 days Soft skills training (CNV, resilience, adaptability)
              </li>
              <li>
              Des sessions de coaching collectif 
              </li>
              <li>
              Diagnostic de ton mindset (which step are you ?) 
              </li>
            </ul>

            <button  onClick={goToCoaching}>En savoir plus</button>
          </div>
        </div>
      </section>

      <h2 className="quote">
        " Pour ce qui est de l'avenir, il ne s'agit pas de le prévoir mais de le rendre {" "}
        <span className="yellow">possible.</span> "
      </h2>

      <section className="bloc-accompagnement">
        <h2>Je t'accompagne pour :</h2>

        <ul>
          <li>Un accompagnement individualisé </li>
          <li>10 days meditation journey = create new habits </li>
          <li>Diagnostic de ton mindset (which step are you ?) </li>
          <li>Une ligne directe avec moi 24/7 </li>
        </ul>
        <button onClick={goToQuestionnaire} className='work-together'>Travaillons ensemble</button>
      </section>

      <section className="temoignages-block">
        <h2>Ce qu'ils.elles en ont pensé :</h2>

        <div className="videos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xtXFf1II6bg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/vjC3pUhvPWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe className="lastvideo" width="560" height="315" src="https://www.youtube.com/embed/rNSqsDihafk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>

      <section className="presentation-block">
        <h2>Qui Suis-Je ?</h2>
        <div className="image-text">
          <img src={presentation} alt="" srcset="" />

          <p>
            {" "}
            <span className="bigger-yellow">
              {" "}
              <span className="capital-letter">P</span>auline Gane - coach Mindset et développement personnel
            </span>{" "}
            Entrepreneure sociale depuis 2017, j'ai monté une entreprise sur la formation en soft skills et l'engagement des collaborateurs, plusieurs fois lauréates de concours (Talents 2024, Start'in ESS, Les Entrep) et de programmes d'accompagnement (Enactus, Women Act, SKEMA Ventures). Il m'a semblé nécessaire de proposer un format collectif, et me spécialiser sur ce que je connaissais le mieux: l'entrepreneuriat à impact et les femmes entrepreneuses.


          </p>
        </div>
        <button onClick={goToPresentation}>En savoir plus</button>
      </section>

      <section className="titre-btn">
        <h2 className="action-title">Prêt.e à passer à l’action ?</h2>
        <button className="contact-me-btn" onClick={goToContactPage}>
          Me contacter
        </button>
      </section>

      <Footer />
    </DivWrapper>
  );
}
export default Home;

//< ------------------------------------------------ STYLED COMPONENTS ------------------------------------------------>
//<-------------------------------------------------------------------------------------------------------------------->

const DivWrapper = styled.div`
  /* overflow-y: scroll; */
  font-family: "poppins";

  * {
    max-width: 100% !important;
    box-sizing: border-box !important;
  }

  /* --------- BANNER ------------- */
  .banner {
    display: flex;
    align-items: center;
    width: 97vw;
    margin: 0 auto;
    height: 100vh;

    /* FADE IN EFFECT */
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: backwards;

    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    h1 {
      color: black;
      line-height: 200%;
      font-size: 3rem;
      text-align: center;
      margin-top: 25rem;
      width: 50%;
    }
    //PURPLE SPANS
    .bg-purple {
      background-color: #4c2a4e;
      color: white;
      padding: 2%;
      line-height: 200%;
    }
    //SPAN 1
    .bg-purple-1 {
      padding: 2%;
    }
    .bg-purple-2{
      padding: 2% 0 2% 0;
      line-height: 220%;
      
    }

    /* SIGNATURE */
    .paulinegane {
      display: block;
      text-align: end;
    }
    img {
      width: 50%;
      max-width: 100%;
      max-height: 80vh;
      /* width: 126.5vw; */
      height: auto;
      margin-top: 11.1%;
      object-fit:cover;
      display: block;
    }
  }
  /* ----------- PROMISE --------- */

  /* PROMESSE BLOCK (TITLE, TEXT AND VIDEO) */
  .promesse {
    background-color: #4c2a4e;
    padding: 3%;
    margin-bottom: 5%;

    .promesse-title {
      text-align: center;
      font-size: 5rem;
      color: white;
      margin-right: 5%;
      margin-bottom: 3%;
    }
    /* PROMESSE CONTENT (TEXT + VIDEO) */
    .promesse-content {
      display: flex;
      width: 85vw;
      align-items: center;
      margin: auto;
    }
    /* PROMISE TEXT */
    .texte {
      width: 50%;
      max-width: 50%;
      line-height: 200%;
      font-size: 2rem;
      margin: auto;
      color: white;
      text-align: justify;
      margin-right: 6%;
    }

    iframe{
      width: 50%;
    }
  }

  /* ACTION ------------- */
  .action-block {
    display: flex;
    justify-content: space-between;
    align-items: center;

    hr {
      max-width: 30vw;
      width: 30vw;
      border: 4px solid;
      color: #ffc267 !important;
    }
    .action-title1 {
      font-size: 5rem;
      color: #4c2a4e;
      margin-bottom: 10%;
      text-align: center;
    }
    .button-action1 {
      width: 18vw;
      padding: 2%;
      font-size: 2rem;
      background-color: #4c2a4e;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      margin: 1% 0 6% 2%;
    }
  }

  /* ----- COACHING OFFERS --------- */

  .coaching-offers-block {
    display: flex;
    flex-direction: column;
    padding: 2% auto;
    margin: 8% 0;

    .ou {
      color: #ffc267;
      margin-right: 5%;
      font-size: 5.5rem;
    }

    h2 {
      text-align: center;
      font-size: 4rem;
      margin-bottom: 3%;
      color: #ffc267;
      font-weight: bold;
    }

    .title-individuel {
      color: #4c2a4e;
    }

    .coaching-blocks {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      margin: auto;

      .coaching-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #4c2a4e;
        padding-top: 2%;

        img {
          width: 40%;
        }

        li {
          font-size: 2rem;
          width: 85%;
          margin-left: 4% ;
          line-height: 190%;
          text-align: justify;
        }

        button {
          width: 40%;
          padding: 2%;
          font-size: 1.5vw;
          background-color: #4c2a4e;
          color: white;
          font-weight: bold;
          border-radius: 5px;
          margin: 4% 0 3% 0%;
        }
      }

      .coaching-collectif {
        background-color: #4c2a4e;
        color: white;

        button {
          background-color: #ffc267;
          color: #4c2a4e;
        }
      }
    }
  }
  /*----------- QUOTE ---------- */
  .quote {
    font-size: 3.5rem;
    text-align: center;
    width: 92%;
    margin: 0 auto 9% auto;

    .yellow {
      color: #ffc267;
    }
  }
  /* ------- ACCOMPAGNEMENT -------- */

  .bloc-accompagnement {
    background-color: #ffc267;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    margin: auto;
    padding: 2%;
    margin-bottom: 10%;

    h2 {
      text-align: center;
      font-size: 4rem;
      margin-bottom: 3%;
      color: #4c2a4e;
      font-weight: bold;
    }

    li {
      color: #4c2a4e;
      font-size: 2rem;
      line-height: 250%;
      text-align: justify;
    }

    button {
      width: 25.3rem;
      padding: 2%;
      font-size: 2rem;
      background-color: #4c2a4e;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      margin: 4% 0 3% 0%;
    }
  }

  /* ------- TEMOIGNAGES -------------- */

  .temoignages-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1% auto 10%;
    max-width: 95vw;

    h2 {
      text-align: center;
      font-size: 4rem;
      margin-bottom: 3%;
      color: #4c2a4e;
      font-weight: bold;
    }

    .videos {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      width:90%;
      height: auto;

      iframe {
        margin-right: 5%;
      }
      
      .lastvideo{
        
        margin-right: 0;
      }

      .lastframe {
        margin-right: 0;
      }
    }
  }

  /* -------- PRESENTATION ------------ */

  .presentation-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4c2a4e;
    color: white;
    padding: 1%;
    margin-bottom: 3%;

    h2 {
      font-size: 6rem;
      margin: 0 0 3% 67%;
      color: #ffc267;
      font-weight: bold;
    }

    .image-text {
      display: flex;
      justify-content: space-around;
      width: 95%;
      margin: auto;

      img {
        /* width: 28%; */
        width: 30%;
        height: 76%;
        margin-right: 2%;
      }

      p {
        font-size: 1.9rem;
        color: white;
        text-align: justify;
        width: 50%;
        line-height: 190%;
        // margin-top: 6rem;

        .bigger-yellow {
          font-size: 2vw;
          color: #ffc267;
          font-weight: bold;
        }

        .capital-letter {
          font-size: 9rem;
        }
      }
    }

    button {
      width: 13%;
      padding: 1%;
      font-size: 1.5vw;
      background-color: #ffc267;
      color: #4c2a4e;
      font-weight: bold;
      border-radius: 5px;
      margin: 4% 0 1% 0%;
    }
  }

  /*------------ ACTION ---------- */
  .titre-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
    margin-top: 5%;
    .action-title {
      font-size: 5.5rem;
      color: #ffc267;
      margin-bottom: 2%;
      text-align: center;
    }

    button {
      width: 13vw;
      padding: 1%;
      font-size: 1.5vw;
      background-color: #4c2a4e;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      margin: 0 0 4% 0%;
    }
  }

  
`;
