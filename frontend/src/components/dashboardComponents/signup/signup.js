import {React, useState} from "react";


// css (contact, signup, login, modify have same css from formInput.css in assets/css)
import "../../../assets/css/formInput.css";
import "./signup.css";
// import styled from "styled-components";


function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");

	const isValidPhone = (phone) => {
		const regex =
        /^\+?[1-9][0-9]{7,14}$/;
		return regex.test(Number(phone));
	};
	const isValidEmail = (email) => {
		const regex =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		return regex.test(String(email).toLowerCase());
	};

	const submit = (e) => {
		e.preventDefault();
		if (isValidEmail(email) & isValidPhone(phone)) {
			if (firstName && phone && email && password) {
				setFirstName("");
				setPhone("");
				setEmail("");
				setLastName("");
				setPassword("");
				alert("Email bien envoyé");
			} else {
				alert("Merci de remplir tous les champs");
			}
		} else {
			alert("Merci de renseigner une adresse email correcte");
		}
	};

    return(
        <section className="signup-form">
            <div>
                <h2 id="tilte-create"> Créer un utilisateur </h2>
            </div>

            <form>
                <ol className="forms">
                    {/* firstName */}
                    <li>
                        <div>
                            <label htmlFor="firstName">
                                *Nom:
                            </label><br/>
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
                            <label htmlFor="lastName">
                                *Prénom:
                            </label><br/>
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
                            <label htmlFor="email">
                                *Email:
                            </label><br/>
                            <input
                                id="email"
                                type="text"
                                placeholder="Votre email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            
                        </div>
                    </li>

                    

                    {/* Password */}
                    <li>
                        <div>
                            <label htmlFor="password">
                                *Mot de passe
                            </label> <br/>
                            <input
                                id="password"
                                type="password"
                                placeholder="Votre mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                    </li>

                    {/* Phone */}
                    <li>
                        <div>
                            <label htmlFor="phone">
                                *Numéro de téléphone:
                            </label><br/>
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

                    {/* Button submit */}
                    <li class="buttons">
                        <button type="submit" className="btn btn-dark" onClick={(e) => submit(e)}>
                            Submit
                        </button>

                    </li>
                </ol>
            </form>

        </section>
    )
}
export default Signup;

