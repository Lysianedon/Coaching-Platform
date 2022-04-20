import axios from "axios";
import { useState, useEffect } from "react";
// css
import styled from 'styled-components';
import './ressources.css';
function Ressources() {
    const [fileName, setFileName] = useState("");
	const [file, setFile] = useState(null);
	const [fileList, setFileList] = useState([]);
	
	useEffect(() => {
		axios.get("http://localhost:8000/dashboard/user/", {withCredentials: true})
			.then(
				res =>{
					 console.log(res.data)
					 setFileList(res.data.user.ressources)}
			)
	}, []);

	const onSubmit = () => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("fileName", fileName);
        // console.log("fileName" , fileName)
		// fetch("/user/file", {
		// 	method: "POST",
		// 	body: formData,
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setFileList(data);
		// 	});
	};


    return (
			<div>
				{/* Upload form */}
				<div className="uploadfile" >
					<form  onSubmit={onSubmit} >
						<div className="uploadInput" >
						<div className="label">
							<h6>File name:</h6>
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
							<h6>Your file: </h6>
						</div>
							<input
								type="file"
								id="file"
								name="file"
								onChange={(e) => setFile(e.target.files[0])}
								className="choosefile"
							/>
						</div>
						<button type="submit" className="addbtn" >
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
			</div>
        
    )
 }
export default Ressources;
