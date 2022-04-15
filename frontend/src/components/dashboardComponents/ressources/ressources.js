import { useState, useEffect } from "react";
// css
import "./ressources.css";

function Ressources() {
    const [fileName, setFileName] = useState("");
	const [file, setFile] = useState(null);
	const [fileList, setFileList] = useState([]);
	
	// useEffect(() => {
	// 	fetch("/file")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setFileList(data);

	// 		});
	// }, []);

	const onSubmit = () => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("fileName", fileName);
        console.log("fileName" , fileName)
		// fetch("/file", {
		// 	method: "POST",
		// 	body: formData,
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setFileList(data);
		// 	});
	};


    return (
        <div className="ressources-form">
            <h3>Files</h3>

            {/* Upload form */}
			<div className="row">
				<form className="col-12 col-md-6 mx-auto" onSubmit={onSubmit}>
					<div className="mb-3">
						<label for="fileName" className="form-label">
							Name of file
						</label>
						<input
							type="text"
							className="form-control"
							id="fileName"
							name="fileName"
							value={fileName}
							onChange={(e) => setFileName(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label for="file" className="form-label">
							File
						</label>
						<input
							type="file"
							className="form-control"
							id="file"
							name="file"
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Add
					</button>
				</form>
			</div>

            {/* Upload Result */}
			<div className="row mt-4">
				<div className="col col-md-6 mx-auto">
					<ul className="list-group">
						{fileList &&
							fileList.map((user, index) => {
								return (
									<li key={index} className="list-group-item">
										<div className="card mx-auto" style={{ width: "18rem" }}>
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