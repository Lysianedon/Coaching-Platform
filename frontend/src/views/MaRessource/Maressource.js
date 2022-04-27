import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
// css
import styled from 'styled-components';
import './maressource.css';

import SideBar from "../../components/dashboardComponents/sidebar-admin/sidebarAdmin";
function MaRessource() {

	//UPLOADING A FILE :
	const onSubmit = (e) => {
		e.preventDefault();
    toast.success("fichier envoyé!")
    const input1 = document.querySelector('.input-content1');
    const input2 = document.querySelector('.input-content2');
    input1.value = '';
    input2.value = '';
   

	};

    return (
      <>
      <SideBar/>
			<StyledContainer>
				{/* Upload form */}
				<div className="uploadfile" >
					<form  onSubmit={onSubmit} >
				<h2 className="title-ressources">Envoyer une ressource</h2>
						<div className="uploadInput" >
						<div className="label">
							<h6 className="nomdufichier">*Nom du fichier: </h6>
						</div>
							<input
								type="text"
								id="fileName"
								className="inputFileName input-content1"
								name="fileName"
							
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
							
								className="choosefile"
							/>
						</div>
            <h6 className="text-dest">*Destinataire:</h6>
            <input
            type="text"
            name="destinataire"
            id="destinataire"
            className="inputFileName input-content2"/>
						<button type="submit" className="addbtn" onClick={onSubmit}>
							Envoyer
						</button>
					</form>
				</div>
			</StyledContainer>
      </>
    )
 }
export default MaRessource;

//--------------------- STYLED-COMPONENTS --------------------------
const StyledContainer = styled.div`

.title-ressources{
	margin-bottom: 10%;
	color: #f6f6f6 !important;

	@media(max-width:440px){
		font-size: 3rem;
	}

}

/*----- HEADER - UPLOAD FILE ------------- */
 	.uploadfile{
		border: 1px solid black;
		width: 40.1vw;
		margin-left: 30%;
		padding: 2rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		background-color: #4f3149;
		
		@media(max-width:780px){
			width: 65vw;
			margin-left: 17%;	
		}

		@media(max-width:380px){
			padding: 2%;
		}
	}

	h6{
		font-size: 3rem;
		align-items: center;
		justify-content: center;
		color: white;
		@media(max-width:1030px){
			font-size: 2.5rem;
		}
		@media(max-width:440px){
		font-size: 2rem;
	}
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
		width: 24vw;
		height: 5vh;
		border-radius: 3px;
		
		@media(max-width:780px){
			width: 38vw;	
		}
		@media(max-width:380px){
			width: 43vw;	
		}
	}

	.choosefile{
		font-size: 2rem;

		@media(max-width:1030px){
			font-size: 1.5rem;
		}
		@media(max-width:440px){
			font-size: 1.2rem;
		}
		@media(max-width:380px){
			width: 80%;	
		}
	}

	.addbtn{
		margin-top: 10%;
		width: 10vw;
		padding: 1.5%;
		margin-bottom: 10%;
		border-radius: 5px;
		border:2px solid black;
		background-color: #f6f6f6;
		color:  #4f3149;
		font-size: 2rem;
		@media(max-width:1030px){
			font-size: 1.5rem;
			width: 13vw;
		}
		@media(max-width:780px){
			width: 17vw;	
		}
		@media(max-width:440px){
			width: 25vw;
		}
	}

	a{
		text-decoration: none;
		color: black;
		text-align: center;
		margin-top: 5%;
	}
	/*---------- FILE SECTION ----------- */
	 .allFiles{
		border: 1px solid black;
		width: 40.1vw;
		height: 20vh;
		margin: 1.5% 0 5% 30%;
		padding-top: 1%;
		border-radius: 5px;
		background-color: #ffffff;
		overflow-y: scroll;
		@media(max-width:780px){
			width: 65vw;
			margin-left: 17%;
		}

	 }

	img{
		width: 50px;
		height: 55px;
		max-width: 80px;
		@media(max-width:440px){
			height: 35px;
			max-width: 40px;
		}
	}

	ul{
		display: flex;
		list-style: none;
		overflow-x: hidden;
		@media(max-width:440px){
			overflow-x: scroll;
		}

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
