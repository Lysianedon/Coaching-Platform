import {React, useState} from "react";

// css  (contact, signup, login, modify have same css from formInput.css in assets/css)
import "./modifyUser.css";
// import styled from "styled-components";

function ModifyUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState("");
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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValidEmail(email) & isValidPhone(phone)) {
			if (firstName && phone && email && userId) {
				setFirstName("");
				setPhone("");
				setEmail("");
				setLastName("");
				setUserId("");
				alert("Email bien envoyé");
			} else {
				alert("Merci de remplir tous les champs");
			}
		} else {
			alert("Merci de renseigner une adresse email correcte");
		}
	};

    return(
        <section className="modifyUser-form">
            <div>
                <h2 className="title-modify">Modifier/Supprimer un utilisateur</h2>
            </div>

            <form>
                <ol className="forms">
                    {/* userId */}
                    <li>
                        <div>
                            <label htmlFor="userId">
                                *Numéro Identifiant de l'utilisateur: 
                            </label> <br/>
                            <input
                                id="userId"
                                type="userId"
                                placeholder="User ID"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            ></input> <br />
                            {/* Search button */}
                            <button type="search" className="btn-search btn-dark" id="search" name="Search" value="Search">
                                Chercher
                            </button> <br />
                            <label className="dash">
                                ----------------------------------
                            </label> <br/>
                            
                        </div>
                    </li>

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
                        <button type="submit" className="btn-modify btn-dark" onClick={(e) => handleSubmit(e)}>
                            Sauvegarder
                        </button>
                        <button type="delete" className="btn-delete btn-dark" onClick={(e) => handleSubmit(e)}>
                            Supprimer
                        </button>

                    </li>
                
                </ol>
            </form>
        </section>
    )
}
export default ModifyUser;