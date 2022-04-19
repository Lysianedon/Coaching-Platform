import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// css (contact, signup, login, modify have same css from formInput.css in assets/css)
import "./signup.css";
import styled from "styled-components";


function Signup() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");

	const isValidPhone = (phone) => {
		const regex =
        /^\+?[1-9][0-9]{9,14}$/;
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
			if (firstName && lastName && phone && email && password) {
                fetch("http://localhost:8000/dashboard/admin/users", {
                    method: "POST",
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        password,
                        phone
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.success) {
                            toast.success(data.message);
                            navigate("/login");
                            console.log(data.message)
                        }
                    })
                    .catch((err) => toast.error("L'utilisateur n'est pas créé. Veuillez réessayer, merci !"));
            } else {
                toast.error("Merci de renseigner une adresse email ou un numéro de téléphone correcte");
            }
	}
};

    return(
        <SignupStyled className="signup-form">
            <div>
                <h2 className="title-create">Créer un utilisateur</h2>
            </div>

            <form onSubmit={handleSubmit}>
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
                                type="email"
                                aria-describedby="emailHelp"
                                placeholder="xxxxxx@xxxxx.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /> <br />
                            <small id="emailHelp" className="form-text text-muted">
                            Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
							</small>
                            
                        </div>
                    </li>

                    {/* Password */}
                    <li>
                        <div>
                            <label htmlFor="password">
                                *Mot de passe:
                            </label> <br/>
                            <input
                                id="password"
                                type="password"
                                aria-describedby="passwordHelp"
                                placeholder="********"
                                minLength={8}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input> <br />
                            <small id="passwordHelp" className="form-text text-muted">
                            Le mot de passe doit contenir au moins 8 caractères
							</small>
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
                                aria-describedby="phoneHelp"
                                placeholder="Votre numéro de téléphone"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            /><br />
                            <small id="phoneHelp" className="form-text text-muted">
                            Le numéro de téléphone doit contenir de 9 à 14 caractères
							</small>
                            
                        </div>
                    </li>

                    {/* Button submit */}
                    <li class="buttons">
                        <button type="submit" className="btn-create btn-dark">
                            Créer un utilisateur
                        </button>

                    </li>
                </ol>
            </form>

        </SignupStyled>
    )
}
export default Signup;

const SignupStyled = styled.div`
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

