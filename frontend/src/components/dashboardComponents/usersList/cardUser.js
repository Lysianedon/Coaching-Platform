import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//css
import "bootstrap-icons/font/bootstrap-icons.css";

function CardUser(props) {
    const [users, setUsers] = useState([
        { userId: 1, firstName: 'Chi', lastName: 'Hoang', email: 'chibienayme@gmail.com' },
        { userId: 2, firstName: 'Lysiane', lastName: 'Don', email: 'don.lysiane@gmail.com'},
        { userId: 3, firstName: 'Anita', lastName: 'Mayousse', email: 'anita.mayousse@gmail.com'},
        { userId: 4, firstName: 'Jessica', lastName: 'Elessa', email: 'jessica.elessa@gmail.com'},
    ]);


    // const [users, setUsers] = useState([]);
    // const fetchUsersList = () =>{
    //   axios.get ("http://localhost:8000/dashboard/admin/users", { withCredentials: true })
    // .then(res => 
    //   {
    //   console.log(res.data);
    //   setUsers(res.data.adminList)
    // });}
    
    // useEffect(() => {
    //     fetchUsersList();
    // }, []);

    return(
        <CardUserStyled>
            <div className="cardUser-form">
                <h3 className="tilte-cardUser">Liste d'utilisateurs</h3>
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
                                    <i class="bi bi-eye"></i>
                                </p> 
                                <p> Email : <strong> {user.email} </strong>
                                    <a class="mailto" href="mailto:{user.email}">
                                        <i class="bi bi-envelope"></i>
                                    </a> 
                                </p>
                                <a href="/">En savoir plus</a>

                                {/* <div
                                    key={user.id}
                                    className="text"
                                >
                                {user.firstName}
                                </div> */}
                                
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
