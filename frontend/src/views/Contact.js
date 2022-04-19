import { useState } from "react";
// import emailjs from "emailjs-com";

// css (contact, signup, login, modify have same css from formInput.css in assets/css)
import styled from "styled-components";
import "../assets/css/formInput.css";

// components
import Nav from "../components/nav";
import Footer from "../components/footer";

function Contact() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	
	const [phoneError, setPhoneError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [emptyError, setEmptyError] = useState("Merci de remplir tous les champs");
	const [submittedMessage, setSubmittedMessage] = useState("Email a été bien envoyé !");

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
			if (name && phone && email && message) {
				const templateParams = {
					name,
					phone,
					email,
					subject,
					message,
				};

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
				setSubmittedMessage("")
			} else {
				setEmptyError("");
			}
		} else {
			setEmailError("");
			setPhoneError("");
		}
	};

	

	return (
		<ContactPage>
			<Nav/>
			<div className="video-thank text-center m-2 p-2" dangerouslySetInnerHTML={{ __html: "<iframe width='560' height='315' title='Thanks' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen src='https://www.youtube.com/embed/l1whgIrlLio' style={{  />"}} />
		
			<h2 className="title">Contactez-moi</h2>
			<div id="contact-form">
				<div>
					<div>
						<form onSubmit={handleSubmit} action="http://localhost:8000/contact" method="POST" id="contact-me">
							<ol className="forms">
								{/* Name */}
								<li>
									<div>
										<label htmlFor="name">
											*Votre nom:
										</label><br/>
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
										<label htmlFor="phone">
											*Votre numéro de téléphone:
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

								{/* Email */}
								<li>
									<div>
										<label htmlFor="email">
											*Votre email:
										</label><br/>
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
										<label htmlFor="subject">
											*Sujet:
										</label><br/>
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
										<label htmlFor="message">
											*Votre message:
										</label> <br/>
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
									<button type="submit" className="btn-send" onClick={(e) => handleSubmit(e)}>
										Send
									</button>

								</li>
								
							
							</ol>
						</form>
							
							
					</div>
				</div>
			</div>

			<Footer/>
		</ContactPage>
		
	);
}

export default Contact;

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
  .btn-send{
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

`;
