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
      navigate("/questionaire");
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            temporibus, animi saepe libero accusamus at alias amet cumque eius
            maxime possimus quidem quos in quo impedit ipsa consequuntur
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iste!
              </li>
            </ul>

            <button  onClick={goToCoaching}>En savoir plus</button>
          </div>
        </div>
      </section>

      <h2 className="quote">
        " Lorem, ipsum dolor sit amet consectetur{" "}
        <span className="yellow">adipisicing.</span> "
      </h2>

      <section className="bloc-accompagnement">
        <h2>Je t'accompagne pour :</h2>

        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
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

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xtXFf1II6bg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            className="lastframe"
            src="https://www.youtube.com/embed/xtXFf1II6bg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
              <span className="capital-letter">L</span>orem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </span>{" "}
            Sequi nesciunt reiciendis dolorem iusto cupiditate. Dolorum
            excepturi, consectetur magnam earum nulla non blanditiis deleniti
            nemo veritatis quae sed. Provident at corporis adipisci iusto
            temporibus molestias reiciendis voluptatum et ipsam optio harum quis
            libero perspiciatis iste, eveniet pariatur ea natus quos ducimus.
            Nostrum cum eum tenetur reprehenderit quod facilis repellat
            distinctio nisi recusandae. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Natus inventore doloremque beatae obcaecati optio
            in.
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
      font-size: 4.7rem;
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
      margin-top: 11.3%;
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
      font-size: 7rem;
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
      font-size: 2.8rem;
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
      font-size: 6rem;
      color: #4c2a4e;
      margin-bottom: 10%;
      text-align: center;
    }
    .button-action1 {
      width: 18vw;
      padding: 2%;
      font-size: 3rem;
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
      font-size: 9rem;
    }

    h2 {
      text-align: center;
      font-size: 6rem;
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
          font-size: 2.5rem;
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
    font-size: 6rem;
    text-align: center;
    margin-bottom: 9%;

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
      font-size: 5rem;
      margin-bottom: 3%;
      color: #4c2a4e;
      font-weight: bold;
    }

    li {
      color: #4c2a4e;
      font-size: 2.5rem;
      line-height: 250%;
      text-align: justify;
    }

    button {
      width: 38rem;
      padding: 2%;
      font-size: 3rem;
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
      font-size: 6rem;
      margin-bottom: 3%;
      color: #4c2a4e;
      font-weight: bold;
    }

    .videos {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 3%;

      iframe {
        margin-right: 5%;
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
      font-size: 8rem;
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
        width: 40%;
        margin-right: 2%;
      }

      p {
        font-size: 2.5rem;
        color: white;
        text-align: justify;
        width: 50%;
        line-height: 190%;
        margin-top: 6rem;

        .bigger-yellow {
          font-size: 2vw;
          color: #ffc267;
          font-weight: bold;
        }

        .capital-letter {
          font-size: 11rem;
        }
      }
    }

    button {
      width: 15%;
      padding: 1%;
      font-size: 1.8vw;
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
      font-size: 8rem;
      color: #ffc267;
      margin-bottom: 2%;
      text-align: center;
    }

    button {
      width: 15vw;
      padding: 1%;
      font-size: 1.8vw;
      background-color: #4c2a4e;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      margin: 0 0 4% 0%;
    }
  }

  
`;
