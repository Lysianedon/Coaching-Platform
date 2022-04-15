import { useState } from "react";
import emailjs from "emailjs-com";

// css
import "./contact.css";

// components
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

function Contact() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

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
			if (name && phone && email && message) {
				const templateParams = {
					name,
					phone,
					email,
					subject,
					message,
				};

				emailjs
					.send(
						process.env.REACT_APP_SERVICEID,
						process.env.REACT_APP_TEMPLATEID,
						templateParams,
						process.env.REACT_APP_USERID
					)
					.then((response) => console.log(response))
					.then((error) => console.log(error));

				setName("");
				setPhone("");
				setEmail("");
				setSubject("");
				setMessage("");
				alert("Email bien envoyé");
			} else {
				alert("Merci de remplir tous les champs");
			}
		} else {
			alert("Merci de renseigner une adresse email correcte");
		}
	};

	return (
		<div>
			<Nav/>
			<div className="video-thank text-center m-2 p-2" dangerouslySetInnerHTML={{ __html: "<iframe width='560' height='315' title='Thanks' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen src='https://www.youtube.com/embed/l1whgIrlLio' style={{  />"}} />
		

			<section id="contact-form">
				<div>
					<div className="header">
						<h2 className="title">Contactez-moi</h2>
					</div>
					
					<div>
						<form id="contact-me">
							<ol className="forms">
								{/* Name */}
								<li>
									<div>
										<label htmlFor="name">
											Votre nom:
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
											Votre numéro de téléphone:
										</label><br/>
										<input
											id="phone"
											type="text"
											placeholder="Votre prénom"
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
											Votre email:
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

								{/* Subject */}
								<li>
									<div>
										<label htmlFor="subject">
											Sujet:
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
											Votre message...
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
									<button type="submit" onClick={(e) => submit(e)}>
										Send
									</button>

								</li>
							
							</ol>
						</form>
							
							
					</div>
				</div>
			</section>

			<Footer/>
		</div>
		
	);
}

export default Contact;