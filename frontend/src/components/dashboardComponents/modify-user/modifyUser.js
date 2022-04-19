import {React, useState} from "react";

// css  (contact, signup, login, modify have same css from formInput.css in assets/css)
import "./modifyUser.css";
import styled from "styled-components";

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
        <ModifyUserStyled className="modifyUser-form">
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
        </ModifyUserStyled>
    )
}
export default ModifyUser;

const ModifyUserStyled = styled.div`
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

ol.forms textarea{
height: 30vh;
}

ol.forms input:hover,
ol.forms textarea:hover {
background: none repeat scroll 0 0 #f4eef5;
border: 1px solid rgb(116, 128, 150);
padding: 5px;
width: 43vw;
}

ol.forms textarea:hover{
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