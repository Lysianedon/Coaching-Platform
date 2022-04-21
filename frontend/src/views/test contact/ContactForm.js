//----------------- REACT ----------------//
import React from "react";
import { useState } from "react";
//--------------- AXIOS -----------------//
import axios from "axios";
//----------------- CSS -------------------//
import "./contact.css";
//---------------- COMPONENTS --------------//
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      phone,
      email,
      message,
      submitted,
    };

    axios
      .post("http://localhost:8000/contact-form", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data,
      })
      .then((res) => {
        console.log("Response received", res);
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        }
      });
  };
  return (
    <section className="container">
      <main>
        <div
          className="video-thank d-flex flex-column items-center align-center text-center m-2 p-2"
          dangerouslySetInnerHTML={{
            __html:
              "<iframe min-width='300' height='auto' title='Thanks' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen src='https://www.youtube.com/embed/l1whgIrlLio' style={{  />",
          }}
        />
        <div className="contact-form">
          <h2 className="title">Contactez-moi</h2>

          <form>
            <div className="input-group">
              <label htmlFor="name">*Nom</label>
              <input
                type="text"
                name="name"
                className=""
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">*Email</label>
              <input
                type="email"
                name="email"
                className=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="telephone">Téléphone</label>
              <input
                type="text"
                name="telephone"
                className="inputField"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="message">*Message</label>
              <br />
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                maxLength={300}
                required
              ></textarea>
            </div>
            {/* Button submit */}
            <div class="buttons">
              <button
                type="submit"
                className="btn-send"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Envoyer
              </button>
            </div>
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
                  Une erreur s'est produite lors de la soumission du formulaire.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}
