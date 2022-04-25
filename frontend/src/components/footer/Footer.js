import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-cat">
            <h2> PRENDRE CONTACT </h2>
            <p>
              <a href="/contact" className="footer-link">
                Formulaire de contact
              </a>
            </p>
            <p>
              <a href="/questionnaire" className="footer-link">
                Questionnaire
              </a>
            </p>
          </div>

          <div className="footer-cat">
            <h2> SUIVEZ-MOI </h2>
            <div className="social-links">
              <a
                href="https://fr-fr.facebook.com/pauline.gane.9"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com/pmggroup2022?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pauline-gane-28a136aa/"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-cat">
            <h2> LIENS UTILES </h2>
            <p>
              <a href="/legal-notice" className="legal-infos">
                Mentions légales
              </a>
            </p>
            <p>
              <a href="/" className="legal-infos">
                CGU / CGV
              </a>
            </p>
          </div>
        </div>

        <div className="copyright">
          &copy; Créé par Jessica, Anita, Lysiane et Chi
        </div>
      </footer>
    </>
  );
}

export default Footer;
