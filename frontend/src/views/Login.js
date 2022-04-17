import { React, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';

// components
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";

// css (contact, signup, login, modify have same css from formInput.css in assets/css)
import "../assets/css/formInput.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function Login() {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;

    setEmail(emailValue);
    setPassword(passwordValue);

    console.log(email, password);

    await axios.post('http://localhost:8000/login', {
      email, password
    })
    .then(res => {
      console.log(res.data);

      //If the user is the admin (Pauline), then she will be redirected to the admin's dashboard,
      // otherwise, the user is redirected to the user's dashboard:
      if (res.data.success && email === 'pauline.gane@gmail.com') {
        navigate('/dashboard/admin');
        return;
      } else {
        navigate('/dashboard/user');
      }
    })
  }

  return (
    <LoginFormStyled> 
       
          {/*  LOGIN FORM */}
        <div className="login-column">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-6">
            
                <form className="login-form" action="http://localhost:8000/login" method="POST" onSubmit={handleSubmit}>
                    <h2>Login</h2>
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
                            <button type="submit" onClick={handleSubmit} className="btn btn-dark submit">Submit</button>
                          </div>
                        </li>                      
                      </ol>     
                </form>
              
              </div>
              <div class="quotes col-6 quotes-block">
                <h2 className="text-center quote-title">Quotes</h2>
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

    </LoginFormStyled>
  )
}
export default Login;

const LoginFormStyled = styled.div`
height: 73vh;

h2 {
  /* margin-top: 4vh; */
  font-size: 3em;
  margin: 0 auto 8vh auto;
}
.login-form{
    background-color: white;
    border-radius:5px;
    display: grid;
    border: 2px solid #4c2a4e;;
    /* box-shadow: #4c2a4e; */
    color: #4c2a4e;
    overflow: auto;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.forms {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
  width: 90%;
  height: fit-content;
  /* margin: auto; */
}

label {
  display: block;
  font-size: 1.8em !important;
}

.submit {
  background-color: #4c2a4e;
  color: white;
  /* height: 4vh; */
  padding: 2%;
  width: 30%;
  margin: 5% 25%;
  font-size: 1.5em !important;
}

input {
  border: 1px solid black !important;
}

.quotes-block{
  background-color: #4c2a4e;
  border-radius:5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  height: auto;
}

.quote-title{
  margin: 0 auto 10vh auto;
}

/* .quotes{
    border: 1px solid #000;
    overflow: auto;
} */

.carousel-inner {
    padding: 0% 20% 10% 20%;
    border: solid white 1px;
    /* margin: auto; */
    
}
`;