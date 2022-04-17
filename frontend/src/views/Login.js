import { React, useState, useEffect } from "react";
import styled from "styled-components";

// components
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";

// css (contact, signup, login, modify have same css from formInput.css in assets/css)
import "../assets/css/formInput.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      "https://api.chucknorris.io/jokes/random"
    );
   const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    setEmail(email);
    setPassword(password);

    const formData = new FormData();
		formData.append("email", email);
		formData.append("password", password);
      console.log("email" , email);

    fetch("http://localhost:8000/login", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				setEmail(data);
        console.log(data);
			});
  }

  // const onSubmit = () => {
	// 	const formData = new FormData();
	// 	formData.append("file", file);
	// 	formData.append("fileName", fileName);
  //       console.log("fileName" , fileName)
	// 	fetch("/user/file", {
	// 		method: "POST",
	// 		body: formData,
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setFileList(data);
	// 		});
	// };

  return (
    <LoginFormStyled> 
      <Nav/>
        <p>Login</p>
       
          {/*  LOGIN FORM */}
        <div className="login-column">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-6">
            
                <form className="login-form" action="http://localhost:8000/login" method="POST">
                     <ol className="forms">
                       {/* Email */}
                       <li>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" />
                          </div>
                       </li>
                        
                        {/* Password */}
                        <li>
                          <div className="password">
                            <label htmlFor="password">Password</label> 
                            <input type="password" id="password" />
                          </div>
                        </li>

                        {/* Button Submit */}
                        <li>
                          <div className="button">
                            <button type="submit" onClick={handleSubmit} className="btn btn-dark">Submit</button>
                          </div>
                        </li>
                        
                      </ol> 
                      
                    

                </form>
              
              </div>
              <div class="quotes col-6">
                <h3 className="text-center">Quotes</h3>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      {posts.value}
                    </div>
                    <div class="carousel-item">
                      {posts.value}
                    </div>
                    <div class="carousel-item">
                      {posts.value}
                    </div>
                  </div>
                  <button class="carousel-control-prev" onClick={fetchPost} >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/* <span class="sr-only">Previous</span> */}
                  </button>

                  <button class="carousel-control-next" onClick={fetchPost}>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span class="sr-only">Next</span> */}
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        
        
        
      <Footer/>
    </LoginFormStyled>
  )
}
export default Login;

const LoginFormStyled = styled.div`
.login-form{
    background-color: rgb(233, 245, 200);
    display: grid;
    border: 1px solid #000;
    color: rgb(13, 13, 13);
    overflow: auto;
}
.quotes{
    background-color: rgb(2, 2, 2);
    border: 1px solid #000;
    height: auto;
    color: white;
    overflow: auto;
}

.carousel-inner {
    padding: 0% 20% 10% 20%;
}
`;