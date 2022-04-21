//----------------- REACT ----------------//
import React from "react";
import { useState } from "react";
//--------------- AXIOS -----------------//
import axios from "axios";
//----------------- CSS ------------------//
import "./contact.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      phone,
      email,
      subject,
      message,
      submitted,
    };
    // await fetch("http://localhost:8000/contact-form", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    axios
      .post("http://localhost:8000/contact-form", {
        method: "POST",
        // mode: "no-cors",
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
          setSubject("");
          setEmail("");
          setMessage("");
        }
      });
  };
  
  return (
    <div className="container">
      <form className="main">
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
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
        <div className="inputGroup">
          <label htmlFor="subject">Sujet</label>
          <input
            type="text"
            name="subject"
            className="inputField"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <input
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
}
