import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//css
import "bootstrap-icons/font/bootstrap-icons.css";

function CardUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/dashboard/admin/users",
        { withCredentials: true },)
        .then(res => {
          setUsers(res.data.users);
        })
      }, [])

    return(
        <CardUserStyled>
            <div className="cardUser-form">
                
                {users && users.map((user) =>
                        <div key={user._id}>
                            <div className="card">
                                <p>Numéro Identifiant : <strong>{user._id} </strong> 
                                    <i class="bi bi-person-circle"></i> 
                                </p>
                                <p>Prénom : <strong>{user.firstName} </strong>
                                    <i class="bi bi-pencil-fill"></i> 
                                </p> 
                                <p>Nom : <strong>{user.lastName}</strong>
                                    {/* <i class="bi bi-eye"></i> */}
                                </p> 
                                <p> Email : <strong> {user.email} </strong>
                                    <a class="mailto" href="mailto:{user.email}">
                                        <i class="bi bi-envelope"></i>
                                    </a> 
                                </p>
                                
                                <div>
                                    <a href="/">En savoir plus</a>
                                    <i class="bi bi-trash"></i>
                                </div>
                                
                                
                            </div>
                        </div>
                    )}
                </div> 
                
        </CardUserStyled>
    )
}
export default CardUser;

const CardUserStyled = styled.div`
 font-family: 'poppins';

.cardUser-form{
    margin: 0% auto auto 22%;
}
 
.card{
    float: left;
    background-color: #f5eff9;
    padding: 2%;
    margin: 1%;
    width: 35vw;
}
.bi {
    float: right;
    font-size: 18px;
    color: black;
}
a {
    color: black;
}
/* RESPONSIVE */
@media screen and (max-width: 480px) {
    .cardUser-form{
        display: block;
    }
}

`;
