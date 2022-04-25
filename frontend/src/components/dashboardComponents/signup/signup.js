import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// css
import "./signup.css";
import styled from "styled-components";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const isValidPhone = (telephone) => {
    const regex = /^\+?[1-9][0-9]{10,30}$/;
    return regex.test(Number(telephone));
  };

  const isValidEmail = (email) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstNameValue = document.getElementById("firstName").value;
    const lastNameValue = document.getElementById("lastName").value;
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const telephoneValue = document.getElementById("telephone").value;

    setFirstName(firstNameValue);
    setLastName(lastNameValue);
    setEmail(emailValue);
    setPassword(passwordValue);
    setTelephone(telephoneValue);

    console.log("Infos:", firstName, lastName, email, password, telephone);
    console.log("isValidEmail", isValidEmail(email));
    console.log("isValidPhone", isValidPhone(telephone));

    if (isValidEmail(email) & isValidPhone(telephone)) {
      if (firstName && lastName && email && password && telephone) {
        axios
          .post(
            "http://localhost:8000/dashboard/admin/users",
            { firstName, lastName, email, password, telephone },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            toast.success("Account is created successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      toast.error("Invalid email or phone");
    }
  };

  return (
    <SignupStyled className="signup-form">
      <ButtonsStyled>
        <a href="/dashboard/admin/users">
          <button type="button" className="btn-create btn-dark">
            Créer un utilisateur
          </button>
        </a>
        <a href="/dashboard/admin/list">
          <button type="button" className="btn-list btn-dark">
            Voir la liste des utilisateurs
          </button>
        </a>
      </ButtonsStyled>

      <div>
        <h2 className="title-create">Créer un utilisateur</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <ol className="forms">
          {/* firstName */}
          <li>
            <div>
              <label htmlFor="firstName">*Nom:</label>
              <br />
              <input
                id="firstName"
                type="text"
                placeholder="Votre nom"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </li>

          {/* lastName */}
          <li>
            <div>
              <label htmlFor="lastName">*Prénom:</label>
              <br />
              <input
                id="lastName"
                type="text"
                placeholder="Votre prénom"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </li>

          {/* Email */}
          <li>
            <div>
              <label htmlFor="email">*Email:</label>
              <br />
              <input
                id="email"
                type="email"
                aria-describedby="emailHelp"
                placeholder="xxxxxx@xxxxx.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <small id="emailHelp" className="small-text text-muted">
                Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
              </small>
            </div>
          </li>

          {/* Password */}
          <li>
            <div>
              <label htmlFor="password">*Mot de passe:</label> <br />
              <input
                id="password"
                type="password"
                aria-describedby="passwordHelp"
                placeholder="********"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br />
              <small id="passwordHelp" className="small-text text-muted">
                Le mot de passe doit contenir au moins 8 caractères
              </small>
            </div>
          </li>

          {/* Phone */}
          <li>
            <div>
              <label htmlFor="telephone">*Numéro de téléphone:</label>
              <br />
              <input
                id="telephone"
                type="text"
                aria-describedby="telephoneHelp"
                placeholder="Votre numéro de téléphone"
                required
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <br />
              <small id="telephoneHelp" className="small-text text-muted">
                Le numéro de téléphone doit contenir de 10 à 30 caractères
              </small>
            </div>
          </li>

          {/* Button submit */}
          <li class="buttons">
            <button type="submit" className="btn-create btn-dark">
              Créer
            </button>
          </li>
        </ol>
      </form>
    </SignupStyled>
  );
}
export default Signup;

//********* FORM SINGUP *************/
const SignupStyled = styled.div`
  font-size: 1.8rem;
  ol.forms {
    list-style: none;
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
    font-size: 1.5rem;
  }
  ol.forms input {
    background: none repeat scroll 0 0 #ffffff;
    border: 1px solid #6b0070;
    border-radius: 4px;
    padding: 5px;
    width: 43vw;
  }
  ol.forms input:hover {
    background: none repeat scroll 0 0 #f4eef5;
    border: 1px solid rgb(116, 128, 150);
    padding: 5px;
    width: 43vw;
  }
  ol.forms li.inline label {
    color: #4c2a4e;
    display: inline;
    float: none;
    width: auto;
    margin-bottom: 2%;
  }
  /* Responsive Laptop */
  @media screen and (min-width: 960px) and (max-width: 1024px) {
    font-size: 1.7rem;
    ol.forms label {
      font-size: 1.7rem;
    }
    .title-create {
      margin: 1% 0% 1% -20%;
    }
  }
  /* Responsive Tablet */
  @media screen and (min-width: 766px) and (max-width: 960px) {
    font-size: 1.5rem;
    margin: 10% 0% 2% 20%;
    ol.forms label {
      font-size: 1.5rem;
    }
    .title-create {
      margin: 1% 0% 1% -20%;
      font-size: 2.5rem;
    }
    ol.forms input {
      width: 60vw;
      font-size: 1.5rem;
    }
  }
  /* Responsive Phone */
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
    margin: 25% 0% 2% 0%;
    .title-create {
      margin: 0% 0% 1% -30%;
      font-size: 2.3rem;
    }
    ol.forms label {
      font-size: 1.3rem;
    }
    ol.forms input{
      width: 80vw;
      font-size: 1.3rem;
      margin: 0% 0% 0% 0%;
    }
    .small-text {
      font-size: 1.3rem;
      margin: 0% 5% 0% 0%;
    }
  }
`;

//------------- Style of BUTTONS ------------//
const ButtonsStyled = styled.div`
  display: flex;
  margin: -25% 0% 3% -5%;
  font-size: 1.8rem;
  .btn-create,
  .btn-list {
    width: 120%;
    height: 7vh;
    border-radius: 4px;
    font-size: 1.8rem;
  }
  .btn-create {
    justify-content: center;
  }
  .btn-list {
    justify-content: center;
    margin-left: 80%;
  }
  /* Responsive Laptop */
  @media screen and (min-width: 960px) and (max-width: 1024px) {
    font-size: 1.7rem;
    .btn-create {
      margin: 0% 0% 0% 20%;
    }
    .btn-list {
      margin: 0% 0% 0% 50%;
    }
  }
  /* Responsive Tablet */
  @media screen and (min-width: 768px) and (max-width: 960px) {
    .btn-create,
    .btn-list {
      width: 25vw;
      font-size: 1.5rem;
    }
    .btn-create {
      margin: 55% 0% 1% 25%;
    }
    .btn-list {
      margin: 55% 0% 1% 55%;
    }
  }
  /* Responsive Phone */
  @media screen and (max-width: 480px) {
    width: 40%;
    display: inline-block;
    .btn-create
    {
      margin: 65% 0% 3% 25%;
      font-size: 1.3rem;
    }
    .btn-list {
      margin: 5% 0% 3% 25%;
      font-size: 1.3rem;
    }
  }
`;
