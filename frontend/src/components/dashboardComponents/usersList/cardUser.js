import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//css
import "bootstrap-icons/font/bootstrap-icons.css";

function CardUser() {
    const [users, setUsers] = useState([
        { userId: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com' },
        { userId: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com'},
        { userId: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com'},
        { userId: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com'},
    ]);
    const [userId, setUserId] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const fetchUsersList = () => {
        console.log("before fetch");
        axios.get('http://localhost:8000/dashboard/admin/list',{ withCredentials: true })
        .then(res => 
          {res.json();
            console.log(res.data);
            setUserId(res.data.user.userId);
            setLastname(res.data.user.lastName);
            setFirstname(res.data.user.firstName);
            setEmail(res.data.user.email);
        });
      }
    
     useEffect(() => {
        fetchUsersList();

     }, [])
      
    return(
        <CardUserStyled>
            <div className="cardUser-form">
                <h3 className="tilte-cardUser">Liste d'utilisateurs</h3>
                {users && users.map(user =>
                        <div key={user.id}>
                            <div className="card">
                                <p>Numéro Identifiant: {user.userId} 
                                    <i class="bi bi-person-circle"></i> 
                                </p>
                                <p>Prénom d'utilisateur: {user.firstName} 
                                    <i class="bi bi-pencil-fill"></i> 
                                </p>
                                <p>Nom d'utilisateur: {user.lastName}
                                    <i class="bi bi-eye"></i>
                                </p>
                                <p> Email: {user.email} </p>
                                <a class="mailto" href="mailto:{user.email}">
                                    Envoyez un message 
                                    <i class="bi bi-envelope"></i>
                                </a> 
                                
                            </div>
                        </div>
                        
                    )}
                </div>
                
        </CardUserStyled>
    )
}
export default CardUser;

const CardUserStyled = styled.div`
.cardUser-form{
    margin: 0% auto auto 22%;
}
.tilte-cardUser{
    text-align: center;
}   
.card{
    float: left;
    background-color: aquamarine;
    padding: 2%;
    border: 1px solid #000;
    margin: 1%;
    width: 35vw;
}
.bi {
    float: right;
    font-size: 18px;
}
`;
