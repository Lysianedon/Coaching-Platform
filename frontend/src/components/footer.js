import { Link } from "react-router-dom";
import styled
 from "styled-components";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer() {
  return (
    <FooterStyled>
      <div class="footer row">
        <div class="col text-center m-1 p-2">
          <h5> PRENDRE CONTACT </h5>
          <p>
            <Link to="/" className="text-link">
              Formulaire de contact
            </Link>
          </p>
          <p>
            <Link to="/" className="text-link">
              Questionaire
            </Link>
          </p>
        </div>

        <div class="col text-center m-1 p-2">
          <h5> SUIVEZ-MOI </h5>
          <i class="bi bi-facebook m-2"></i>
          <i class="bi bi-instagram m-2"></i>
          <i class="bi bi-youtube m-2"></i>
          <i class="bi bi-linkedin m-2"></i>
        </div>

        <div class="col text-center">
          <h5> LIENS UTILES </h5>
          <p>
            <Link to="/" className="text-link">
              Mentions légales
            </Link>
          </p>
          <p>
            <Link to="/" className="text-link">
              CGU / CGV
            </Link>
          </p>
        </div>

        <div class="copyright text-center m-3">
          &copy; Créé par Jessica, Anita, Lysiane et Chi
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled = styled.div`
.footer {
    background-color: #4c2a4e;
    color: white;
    margin-top: 5%;
    /* margin-top: 9vh !important; */
}
.text-link {
    color: white;
    text-decoration: inherit;
    vertical-align: top;
    margin-right: 20px;
    height: 40px;
    line-height: 30px;
}
`;
