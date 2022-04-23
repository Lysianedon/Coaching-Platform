import {useNavigate} from "react-router-dom";
// components
import Nav from "../../components/nav";
import  Navbar from '../../components/navbar/navbar';
import Footer from "../../components/footer";
//Styled-components
import styled from "styled-components";
//Photos
import presentation from '../../assets/images/deuxieme.png'
import orangecoat from '../../assets/images/quatre.jpeg'
//Css
import "./presentation.css"

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
      <section className="borderBoxPage">
      <Nav/>
      <Navbar/>
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
          <Footer/>
        </DivWrapper>
        </section>
    )
}
export default Presentation;


//< ------------------------------------------------ STYLED COMPONENTS ------------------------------------------------>
//<-------------------------------------------------------------------------------------------------------------------->
const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const DivWrapper = styled.div`
/* GENERAL PARAMETERS  */
font-family: 'poppins';

@media ${device.laptop} {
    
/*----- BANNER -------- */
.banner{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0%;
  height: auto;
  padding:190px 0 0 0px;

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
  h2 {
    color: black;
    line-height: 180%;
    font-size: 4rem;
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

/*------ FIRST BLOCK OF PRESENTATION ------ */
.texte-picture{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: auto 3% auto 0;

    img{
        width: 25%;
    }

    p{
        width: 40%;
        font-size: 1.5em;
        line-height: 170%;
        text-align: justify;
        margin-right: 0;

        .bigger-yellow{
        font-size: 1.6em;
        color: #FFC267;
        font-weight: bold;
      }

      .capital-letter{
        font-size: 3em;
      }
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
        width: 50%;
        padding: 1.4%;
        font-size: 1.8em;
        background-color: #FFC267;
        color: #4c2a4e;
        font-weight: bold;
        border-radius: 10px;
        margin: 4% 0;
  }
}

}

@media ${device.mobileS} {
    
    /*----- BANNER -------- */
    .banner{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      margin: 0%;
      height: 50vh;
      padding:2px 20px 0 100px;
    
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
      h2 {
        color: black;
        line-height: 180%;
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
    
        .yellow-block{
            display: block;
            background-color: #FFC267 ;
        }
      }
    
      img {
        width: 83%;
        /* height: 70vh; */
        
      }
    }
    /*--- VERTICAL LINE 1 AND 3 -----*/
    .vertical-line{
        margin: 5% auto 5% 60%;
        height: 10vh;
        width: 4px;
        border-left: 4px dotted #FFC267;
        color: black;
        display:none;
    }
    
    /*------ FIRST BLOCK OF PRESENTATION ------ */
    .texte-picture{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-top:solid 4px #FFC267;
        padding-top:20px;
        padding-left:5px;
        margin: auto 3% auto 6%;
    
        img{
          padding-bottom:20%;
          width: 40%;
        }
    
        p{
            width: 100%;
            font-size: 1.5rem;
            line-height: 170%;
            text-align: left;
            margin-right: 0;
    
            .bigger-yellow{
            font-size: 1.2em;
            color: #FFC267;
            font-weight: bold;
          }
    
          .capital-letter{
            font-size: 2em;
          }
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
        display:none;
        
    }
    
    /*-------- SECOND BLOCK OF PRESENTATION ----- */
    .picture-text{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-top:solid 4px #FFC267;
        padding-top:20px;
        padding-right:5px;
        margin: auto 3% auto 6%;
        gap:12px;
    
        p{
          width: 100%;
          font-size: 1.5rem;
          line-height: 170%;
          text-align: left;
          margin-right: 0;
    
            .bigger-yellow{
            font-size: 1.2em;
            color: #FFC267;
            font-weight: bold;
          }
    
          .capital-letter{
            font-size: 2em;
          }
        }
    
        img{
          padding-bottom:20%;
          width: 40%;
        }
    }
    
    /*------- CALL TO ACTION -------- */
    
    .action-titre-btn{
      display: flex;
      justify-content:center;
      align-items: center;
      width: 100%;
      margin: 3% auto auto 5% ;
      padding: 2%;
      border-radius: 6px;
      background-color: #4c2a4e;
      .action-title {
          font-size: 2rem;
          color: #FFC267;
          margin-bottom: 2%;
          text-align: center;
        }
    
        button{
            width: 50%;
            padding: 1.6%;
            font-size: 1.2rem;
            background-color: #FFC267;
            color: #4c2a4e;
            font-weight: bold;
            border-radius: 10px;
            margin: 8% 0;
            border:none;
      }
    }
    
    }


`