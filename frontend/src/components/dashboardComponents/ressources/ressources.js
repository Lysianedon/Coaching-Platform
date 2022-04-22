import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import fileIcon from '../../../assets/images/iconfile.png'
// css
import styled from 'styled-components';
import './ressources.css';
function Ressources() {
	const [isLoading, setIsLoading] = useState(true);
    const [fileName, setFileName] = useState("");
	const [file, setFile] = useState(null);
	const [fileList, setFileList] = useState([]);
	
	useEffect(() => {
		
		axios.get("http://localhost:8000/dashboard/user/ressources", {withCredentials: true})
		.then(
			res =>{
					console.log(res.data)
					setFileList(res.data.ressources.ressources)
					setIsLoading(false)
				}
		)
	}, []);

	//UPLOADING A FILE :
	const onSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		const filename = document.querySelector('#fileName').value;
		const selectedFile = document.querySelector('#file').files[0];
		console.log(selectedFile);
		setFileName(filename);
		setFile(selectedFile);

		const formData = new FormData();
		formData.append("selectedFile", selectedFile);
		formData.append("filename", filename);

        console.log("fileName" , fileName)
		axios.post('http://localhost:8000/dashboard/user/files/upload',formData, { withCredentials: true})
		.then(res =>{
			 console.log(res.data)
			setFileList([...fileList, {name : filename, fileName}]);
			setIsLoading(false);
		});	
	};

	//------------------------- DOWNLOADING A FILE : --------------------------------
	const handleFile = (e) => {
		const filename = e.target.className;
		console.log(filename);
		//Test DOWNLOAD : 
		axios.get(`http://localhost:8000/uploads/${filename}`,{withCredentials: true})
		.catch(err => console.log(err))
	}

	if (isLoading) {
		return(			
		<div className="loader">
			<LoaderStyle className="loader10">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</LoaderStyle>
	</div>)
	}

    return (

			<StyledContainer>
				{/* Upload form */}
				<div className="uploadfile" >
					<form  onSubmit={onSubmit} >
				<h2 className="title-ressources">Mes ressources</h2>
						<div className="uploadInput" >
						<div className="label">
							<h6 className="nomdufichier">*Nom du fichier: </h6>
						</div>
							<input
								type="text"
								id="fileName"
								className="inputFileName"
								name="fileName"
								value={fileName}
								onChange={(e) => setFileName(e.target.value)}
							/>
						</div>

						<div className="uploadInput">
						<div className="label">
							<h6 className="yourfile">*Sélectionner un fichier: </h6>
						</div>
							<input
								type="file"
								id="file"
								name="file"
								onChange={(e) => setFile(e.target.files[0])}
								className="choosefile"
							/>
						</div>
						<button type="submit" className="addbtn" onClick={onSubmit}>
							Ajouter
						</button>
					</form>
				</div>

				{/* Upload Result */}
				<div  className="allFiles" >
					<div className="">
						<ul className="">
							{fileList &&
								fileList.map((user, index) => {
									return (
										<li key={index} className={`${user.fileName}`} onClick={handleFile}>
											{/* <Link > */}
											<a href={`http://localhost:8000/uploads/${user.fileName}`} target="_blank" rel="noopener noreferrer">
											<div className="container-img" >

												<img
													className={`${user.fileName}`}
													src={fileIcon}
													alt={`File ${user.fileName}`}
												/>
												<div className="card-body">
													<h5 className="card-title">{user.fileName}</h5>
													<h5 className="card-title">{user.name}</h5>
												</div>
											</div>
											</a>
											{/* </Link> */}
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</StyledContainer>
        
    )
 }
export default Ressources;

//--------------------- STYLED-COMPONENTS --------------------------
const StyledContainer = styled.div`

.title-ressources{
	margin-bottom: 10%;
	color: #f6f6f6 !important;
}

/*----- HEADER - UPLOAD FILE ------------- */
 	.uploadfile{
		border: 1px solid black;
		width: 40.1vw;
		margin-left: 30%;
		height: 40vh;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		background-color: #4f3149;
	}

	h6{
		font-size: 1.9rem;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.nomdufichier{
		text-align: center;
	}
	.yourfile{
			text-align: center;
			margin: 10% 10% 8% 0;
			width: 100%;
	}

	.inputFileName{
		width: 20vw;
		height: 3vh;
		border-radius: 3px;
	}

	.choosefile{
		font-size: 1.2rem;
	}

	.addbtn{
		margin-top: 10%;
		width: 10vw;
		height: 4vh;
		margin-bottom: 10%;
		border-radius: 5px;
		border:2px solid black;
		background-color: #f6f6f6;
		color:  #4f3149;
		font-weight: bold;
		font-size: 1.5rem;
	}

	a{
		text-decoration: none;
		color: black;
		text-align: center;
		margin-top: 5%;
	}

	 .allFiles{
		border: 1px solid black;
		width: 40.1vw;
		margin-left: 30%;
		height: 20vh;
	 }

	img{
		width: 50px;
		height: 55px;
		max-width: 80px;
	}

	ul{
		display: flex;
		list-style: none;

		li{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
`
const LoaderStyle= styled.div`

/* ---------- Loader 10 --------*/
.loader10 {
	width: 80px;
	height: 80px;
	position: relative;
}
.loader10 div {
	transform-origin: 40px 40px;
	animation: rotate 1.2s linear infinite;
}
.loader10 div::after {
	content: "";
	display: block;
	position: absolute;
	top: 3px;
	left: 37px;
	width: 6px;
	height: 18px;
	border-radius: 20%;
	background: #333;
}

.loader div:nth-child(1) {
	transform: rotate(0deg);
	animation-delay: -1.1s;
}
.loader div:nth-child(2) {
	transform: rotate(30deg);
	animation-delay: -1s;
}
.loader div:nth-child(2) {
	transform: rotate(30deg);
	animation-delay: -1s;
}
.loader div:nth-child(3) {
	transform: rotate(60deg);
	animation-delay: -0.9s;
}
.loader div:nth-child(4) {
	transform: rotate(90deg);
	animation-delay: -0.8s;
}
.loader div:nth-child(5) {
	transform: rotate(120deg);
	animation-delay: -0.7s;
}
.loader div:nth-child(6) {
	transform: rotate(150deg);
	animation-delay: -0.6s;
}
.loader div:nth-child(7) {
	transform: rotate(180deg);
	animation-delay: -0.5s;
}
.loader div:nth-child(8) {
	transform: rotate(210deg);
	animation-delay: -0.4s;
}
.loader div:nth-child(9) {
	transform: rotate(240deg);
	animation-delay: -0.3s;
}
.loader div:nth-child(10) {
	transform: rotate(270deg);
	animation-delay: -0.2s;
}
.loader div:nth-child(11) {
	transform: rotate(300deg);
	animation-delay: -0.1s;
}
.loader div:nth-child(12) {
	transform: rotate(330deg);
	animation-delay: 0s;
}
@keyframes rotate {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}`
