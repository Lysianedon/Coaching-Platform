import { React, useState, useEffect } from "react";

// components
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

// css
import "./Login.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function Login() {
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

  return (
    <> 
      <Nav/>
        <p>Login</p>
       
          {/*  LOGIN FORM */}
        <div className="login-column">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-6">
            
                <form className="login-form" action="http://localhost:8000/login" method="POST">
                      {/* Email */}
                    <div className="email">
                      <label htmlFor="email">Email</label>
                      <input type="text" id="email" />
                    </div>

                    {/* Password */}
                    <div className="password">
                      <label htmlFor="password">Password</label> 
                      <input type="password" id="password" />
                    </div>

                    {/* Button Submit */}
                    <div className="button">
                      <button type="submit" className="btn btn-dark">Submit</button>
                    </div>

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
    </>
  )
}
export default Login;