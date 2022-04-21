import styled from "styled-components";

//css
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-link">
        <div class="footer-left">
          <h5> PRENDRE CONTACT </h5>
          <p>
            <a href="/contact" className="text-link">
              Formulaire de contact
            </a>
          </p>
          <p>
            <a href="/questionnaire/starter" className="text-link">
              Questionnaire
            </a>
          </p>
        </div>

        <div class="footer-center">
          <h5> SUIVEZ-MOI </h5>
          <i class="bi bi-facebook m-2"></i>
          <i class="bi bi-instagram m-2"></i>
          <i class="bi bi-youtube m-2"></i>
          <i class="bi bi-linkedin m-2"></i>
        </div>

        <div class="footer-right">
          <h5> LIENS UTILES </h5>
          <p>
            <a href="/" className="text-link">
              Mentions légales
            </a>
          </p>
          <p>
            <a href="/" className="text-link">
              CGU / CGV
            </a>
          </p>
        </div>
      </div>

      <div class="copyright">
        &copy; Créé par Jessica, Anita, Lysiane et Chi
      </div>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled = styled.div`
/* GENERAL PARAMETERS  */
  font-family: 'poppins';

  background-color: #4c2a4e;
  color: white;
  width: 100vw;

  .footer-link {
    padding: 2% 0 0 0;
    display: flex;
    width: 100vw;
    justify-content: space-around;
  }
 
  footer .footer-left {
    float: left;
    text-align: left;
    padding: 2%;
  
  }
  footer .footer-center {
    text-align: center;
    padding: 2%;

  }
  footer .footer-right {
    float: right;
    text-align: right;
    padding: 2%;
 
  }
  .text-link {
    color: white;
    text-decoration: inherit;
  }
  .copyright {
    text-align: center;
    padding: 2%;
  }
  /* RESPONSIVE */
  @media screen and (max-width: 480px) {
    .footer-link {
      display: block;
      margin-left: 10%;
    }
    .footer-left,
    .footer-center,
    .footer-right {
      margin-top: 6%;
    }
    .copyright {
      text-align: left;
      margin-left: 8%;
    }
  }
`;
