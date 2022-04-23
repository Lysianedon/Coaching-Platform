//----------------- REACT ----------------//
import React from "react";
import { useState } from "react";
//--------------- AXIOS -----------------//
import axios from "axios";
//----------------- CSS -------------------//
import "./contactForm.css";
import { toast } from "react-toastify";
//---------------- COMPONENTS --------------//
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav";
import Navbar from "../../components/navbar/navbar";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

    if (name && email && message) {
      axios
        .post("http://localhost:8000/contact", {
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
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setSubmitted(true);
          }
          toast.success("Your message is sent successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please fill the form first");
    }
  };

  return (
    <>
      <Nav />
      <Navbar />
      <main className="container">
        <h2>Contactez-moi</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l1whgIrlLio"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          autoplay="1"
          loop="1"
        ></iframe>

        <form>
          <div className="inputGroup">
            <label htmlFor="name">*Votre nom:</label>
            <input
              type="text"
              name="name"
              className="inputField"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">*Votre email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="inputField"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="phone">Votre téléphone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="inputField"
              value={phone}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="message">*Votre message:</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              maxLength={300}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-send"
            onClick={(e) => {
              handleSubmit(e);
              setSubmitted(e.target.value);
            }}
          >
            Envoyer
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}
