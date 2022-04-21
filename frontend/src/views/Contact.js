import { useState } from "react";
// import emailjs from "emailjs-com";

// css (contact, signup, login, modify have same css from formInput.css in assets/css)
import styled from "styled-components";

// components
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isValidPhone = (phone) => {
    if (phone !== "") {
      const regex = /^\+?[1-9][0-9]{9,14}$/;
      return regex.test(Number(phone));
    }
  };
  const isValidEmail = (email) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email) & isValidPhone(phone)) {
      if (name && phone && email && subject && message) {
        const templateParams = {
          name,
          phone,
          email,
          subject,
          message,
        };
      }
      // emailjs
      //   .send(
      //     process.env.REACT_APP_SERVICEID,
      //     process.env.REACT_APP_TEMPLATEID,
      //     templateParams,
      //     process.env.REACT_APP_USERID
      //   )
      //   .then((response) => console.log(response))
      //   .then((error) => console.log(error));

      // emailjs
      // 	.send(
      // 		process.env.REACT_APP_SERVICEID,
      // 		process.env.REACT_APP_TEMPLATEID,
      // 		templateParams,
      // 		process.env.REACT_APP_USERID
      // 	)
      // 	.then((response) => console.log(response))
      // 	.then((error) => console.log(error));

      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      // setSubmittedMessage("");
    }
    // else {
    //     setEmptyError("");
    //   }

    // }

    // else {
    //   setEmailError("");
    //   setPhoneError("");
    // }
  };

  return (
    <ContactPage>
      <Nav />
      <div
        className="video-thank text-center m-2 p-2"
        dangerouslySetInnerHTML={{
          __html:
            "<iframe width='560' height='315' title='Thanks' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen src='https://www.youtube.com/embed/l1whgIrlLio' style={{  />",
        }}
      />

      <h2 className="title">Contactez-moi</h2>
      <div id="contact-form">
        <div>
          <div>
            <form onSubmit={handleSubmit} id="contact-me">
              <ol className="forms">
                {/* Name */}
                <li>
                  <div>
                    <label htmlFor="name">*Votre nom:</label>
                    <br />
                    <input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </li>

                {/* Phone */}
                <li>
                  <div>
                    <label htmlFor="phone">*Votre numéro de téléphone:</label>
                    <br />
                    <input
                      id="phone"
                      type="text"
                      placeholder="Votre numéro de téléphone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </li>

                {/* Email */}
                <li>
                  <div>
                    <label htmlFor="email">*Votre email:</label>
                    <br />
                    <input
                      id="email"
                      type="email"
                      placeholder="Votre email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </li>

                {/* Subject */}
                <li>
                  <div>
                    <label htmlFor="subject">*Sujet:</label>
                    <br />
                    <input
                      id="suject"
                      type="text"
                      placeholder="Sujet"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </li>

                {/* Message */}
                <li>
                  <div>
                    <label htmlFor="message">*Votre message:</label> <br />
                    <textarea
                      id="message"
                      type="text"
                      placeholder="Votre message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </li>

                {/* Button submit */}
                <li class="buttons">
                  <button
                    type="submit"
                    className="btn-send"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Send
                  </button>
                </li>
              </ol>
            </form>

            <div>
              {window.location.hash === "#success" && (
                <div id="success">
                  <p>Votre message a été envoyé !</p>
                </div>
              )}
              {window.location.hash === "#error" && (
                <div id="error">
                  <p>
                    Une erreur s'est produite lors de la soumission du
                    formulaire.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </ContactPage>
  );
}

const ContactPage = styled.div`
  .video-thank {
    background-color: #4c2a4e;
    width: 100%;
    height: auto;
  }

  /********* Tilte *********/
  .title {
    font-size: 2rem;
    font-weight: 600;
    margin-left: 40%;
    margin-top: 2% 10% 2% 25%;
  }
  .btn-send {
    width: 10vw;
    height: auto;
    background-color: #4c2a4e;
    border: 1px solid #4c2a4e;
    border-radius: 4px;
    padding: 1px;
    color: white;
  }
  .btn-send:hover {
    background-color: black;
  }

  /********* Form Contact ********/
  #contact-form {
    display: flex;
    flex-direction: column;
    padding: 2%;
    margin: 0% 5% 5% 25%;
    border-radius: 10px;
    width: 50vw;
    height: auto;
  }
  /*RESPONSIVE */
  @media screen and (max-width: 600px) {
    #contactForm {
      width: 90%;
    }
  }

  ol.forms {
    float: center;
    list-style: none;
    margin: 10;
    width: 100%;
  }

  ol.forms li {
    clear: both;
    float: center;
    margin-bottom: 18px;
    position: relative;
    width: 100%;
  }

  ol.forms label {
    font-weight: 600;
    font-size: 1rem;
  }

  ol.forms input,
  ol.forms textarea {
    background: none repeat scroll 0 0 #ffffff;
    border: 1px solid #6b0070;
    border-radius: 4px;
    padding: 5px;
    width: 43vw;
  }

  ol.forms textarea {
    height: 30vh;
  }

  ol.forms input:hover,
  ol.forms textarea:hover {
    background: none repeat scroll 0 0 #f4eef5;
    border: 1px solid rgb(116, 128, 150);
    padding: 5px;
    width: 43vw;
  }

  ol.forms textarea:hover {
    height: 30vh;
  }

  ol.forms li.inline label {
    color: #4c2a4e;
    display: inline;
    float: none;
    width: auto;
    margin-bottom: 2%;
  }
`;
