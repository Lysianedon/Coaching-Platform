//----------------- REACT ----------------//
import React from "react";
import { useState } from "react";
//--------------- AXIOS -----------------//
import axios from "axios";
//----------------- CSS -------------------//
import "./contactCoach.css";
import { toast } from "react-toastify";
//---------------- COMPONENTS --------------//
import SideBarUser from "../../components/dashboardComponents/sidebar-user/sidebarUser";

export default function ContactCoach() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      subject,
      message,
      submitted,
    };
    if (name && message) {
      axios
        .post("http://localhost:8000/contact-coach", {
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
            setSubject("");
            setMessage("");
            setSubmitted(true);
          }
          toast.success("Message envoyé !");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Veuillez d'abord remplir le formulaire.");
    }
  };
  return (
    <>
      <SideBarUser />
      <main className="container-message">
        {/* <h2>Contacte-moi</h2> */}
        <form>
          <div className="inputGroup">
            <label htmlFor="name">*Nom:</label>
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
            <label htmlFor="subject">Sujet:</label>
            <input
              type="text"
              name="subject"
              className="inputField"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="message">*Message:</label>
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
    </>
  );
}
