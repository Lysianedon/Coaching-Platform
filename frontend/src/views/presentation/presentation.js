import {useNavigate} from "react-router-dom";
// components
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
//Styled-components
import styled from "styled-components";
//Photos
import presentation from '../../assets/images/deuxieme.png'
import orangecoat from '../../assets/images/quatre.jpeg'

function Presentation() {
    const navigate = useNavigate();

    const goToContactPage = (e) => {
        const button = document.querySelector('.contact-me-btn');
        button.style.backgroundColor = '#FFC267';
        button.style.color = '#4c2a4e';
    
        setTimeout(() => {
          navigate("/contact") ;
          
        }, 1000);
      }

    return(
        <DivWrapper>
          <section className="banner">
            <h2>RENCONTREZ <span className="yellow-block"> VOTRE COACH </span></h2>
            <img src={presentation} alt="pauline" srcset="" />
            <h2>PAULINE GANE</h2>
          </section>
  
          <div className="vertical-line"></div>

            <section className="texte-picture">
            <p> <span className="bigger-yellow"> <span className="capital-letter">L</span>orem ipsum dolor sit amet consectetur, adipisicing elit.</span>  Sequi nesciunt reiciendis dolorem iusto cupiditate. Dolorum excepturi, consectetur magnam earum nulla non blanditiis deleniti nemo veritatis quae sed. Provident at corporis adipisci iusto temporibus molestias reiciendis voluptatum et ipsam optio harum quis libero perspiciatis iste, eveniet pariatur ea natus quos ducimus. Nostrum cum eum tenetur reprehenderit quod facilis repellat distinctio nisi recusandae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus inventore doloremque beatae obcaecati optio in. </p>

                <img src={orangecoat} alt="pauline" srcset="" />
            </section>

          <div className="vertical-line2"></div>

          <section className="picture-text">
                <img src={orangecoat} alt="pauline" srcset="" />

                <p> Sequi nesciunt reiciendis dolorem iusto cupiditate. Dolorum excepturi, consectetur magnam earum nulla non blanditiis deleniti nemo veritatis quae sed. Provident at corporis adipisci iusto temporibus molestias reiciendis voluptatum et ipsam optio harum quis libero perspiciatis iste, eveniet pariatur ea natus quos ducimus. Nostrum cum eum tenetur reprehenderit quod facilis repellat distinctio nisi recusandae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus inventore doloremque beatae obcaecati optio in.<span className="bigger-yellow">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>   </p>
            </section>

          <div className="vertical-line"></div>


        <section className="action-titre-btn">
            <h2 className='action-title'>Prêt.e à passer à l’action ?</h2>
            <button onClick={goToContactPage}>Travaillons ensemble</button>
          </section>
           
        </DivWrapper>
    )
}
export default Presentation;


//< ------------------------------------------------ STYLED COMPONENTS ------------------------------------------------>
//<-------------------------------------------------------------------------------------------------------------------->

const DivWrapper = styled.div`
/* GENERAL PARAMETERS  */
font-family: 'poppins';


/*----- BANNER -------- */
.banner{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 96%;
  margin: 3% 0% 3% 2%;
  height: 92vh;

  /* FADE IN EFFECT */
	animation: fadeInAnimation ease 3s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;

@keyframes fadeInAnimation {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
  h2 {
    color: black;
    line-height: 180%;
    font-size: 4em;
    text-align: center;
    font-weight: bold;

    .yellow-block{
        display: block;
        background-color: #FFC267 ;
    }
  }

  img {
    width: 43%;
    /* height: 70vh; */
    
  }
}
/*--- VERTICAL LINE 1 AND 3 -----*/
.vertical-line{
    margin: 2% auto 5% auto;
    padding-right: 5%;
    height: 40vh;
    width: 4px;
    border-left: 4px solid #FFC267;
    color: black;
}

.texte-picture{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: auto 3% auto 0;

    p{
        width: 40%;
        font-size: 1.5em;
        line-height: 170%;
        text-align: justify;
        margin-right: 10%;

        .bigger-yellow{
        font-size: 1.6em;
        color: #FFC267;
        font-weight: bold;
      }

      .capital-letter{
        font-size: 3em;
      }
    }

    img{
        width: 25%;
    }
}
/* --- VERTICAL LINE 2 ----- */
.vertical-line2{
    margin: 3% auto 3% 20%;
    padding-right: 5%;
    height: 30vh;
    width: 4px;
    border-left: 4px solid #FFC267;
    color: black;
}

/*-------- SECOND BLOCK OF PRESENTATION ----- */
.picture-text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto auto auto 10%;

    p{
        width: 40%;
        font-size: 1.5em;
        line-height: 170%;
        text-align: justify;
        margin-right: 10%;

        .bigger-yellow{
        font-size: 1.6em;
        color: #FFC267;
        font-weight: bold;
      }

      .capital-letter{
        font-size: 3em;
      }
    }

    img{
        width: 25%;
    }
}

/*------- CALL TO ACTION -------- */

.action-titre-btn{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 3% auto 10%;
  padding: 2%;
  border-radius: 6px;
  background-color: #4c2a4e;
  .action-title {
      font-size: 5em;
      color: #FFC267;
      margin-bottom: 2%;
      text-align: center;
    }

    button{
        width: 30%;
        padding: 1.4%;
        font-size: 1.8em;
        background-color: #FFC267;
        color: #4c2a4e;
        font-weight: bold;
        border-radius: 5px;
        margin: 4% 0;
  }
}


`