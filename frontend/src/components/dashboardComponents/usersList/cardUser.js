import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//css
import "bootstrap-icons/font/bootstrap-icons.css";

function CardUser() {
    const [users, setUsers] = useState([
        { userId: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com' },
        { userId: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com'},
    ]);

    useEffect((e) => {
        axios
          .get("http://localhost:8000/dashboard/admin/list")
          .then(result => {
            setUsers(result.data);
          })
          .catch(error => console.log(error));
      }, [setUsers]);
      
    return(
        <CardUserStyled>
            <div className="cardUser-form">
                <p>Card User</p>
                {users && users.map(user =>
                        <div key={user.id}>
                            <div className="card-left">
                                <p>Numéro Identifiant: {user.userId} 
                                    <i class="bi bi-person-circle"></i> 
                                </p>
                                <p>Prénom d'utilisateur: {user.firstName} 
                                    <i class="bi bi-pencil-fill"></i> 
                                </p>
                                <p>Nom d'utilisateur: {user.lastName}
                                    <i class="bi bi-eye"></i>
                                </p>
                                <p> Email: {user.email} 
                                    <a class="mailto" href="mailto:{user.email}">
                                        Envoyez un message 
                                        <i class="bi bi-envelope"></i>
                                    </a> 
                                </p>
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
    margin: 0% auto auto 25%;
    background-color: beige;
    width: 40vw;
}
    
.card-left{
    float: left;
    background-color: aquamarine;
}
`;
