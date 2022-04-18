import { useState, useEffect } from "react";
// css
import styled from 'styled-components';

function Ressources() {
    const [fileName, setFileName] = useState("");
	const [file, setFile] = useState(null);
	const [fileList, setFileList] = useState([]);
	
	useEffect(() => {
		fetch("/user/file")
			.then((res) => res.json())
			.then((data) => {
				setFileList(data);
				
			});
	}, []);

	const onSubmit = () => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("fileName", fileName);
        console.log("fileName" , fileName)
		fetch("/user/file", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				setFileList(data);
			});
	};


    return (
			<Files>
			<h3>Files</h3>
				{/* Upload form */}
				<div >
					<form  onSubmit={onSubmit}>
						<div >
							<label htmlFor="fileName" >
								Nom de fichier
							</label>
							<input
								type="text"
								id="fileName"
								name="fileName"
								value={fileName}
								onChange={(e) => setFileName(e.target.value)}
							/>
						</div>

						<div >
							<label htmlFor="file">
								File
							</label>
							<input
								type="file"
								id="file"
								name="file"
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</div>
						<button type="submit" >
							Ajouter
						</button>
					</form>
				</div>

				{/* Upload Result */}
				<div  className="">
					<div className="">
						<ul className="">
							{fileList &&
								fileList.map((user, index) => {
									return (
										<li key={index} className="">
											<div className="" style={{ width: "18rem" }}>
												<img
													className="card-img-top"
													src={`uploads/${user.file}`}
													alt={`File ${user.fileName}`}
												/>
												<div className="card-body">
													<h5 className="card-title">{user.fileName}</h5>
												</div>
											</div>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</Files>
        
    )
 }
export default Ressources;


const Files = styled.li`
	padding: 30px 40px;
	width:70vw;
	border-radius: 12px;
	border: 1px solid black;
	background-color: white;
	padding: 5% 4% ;
	border-radius: 16px;
	height: 60vh;
	overflow: scroll;
	color: black;
	`;