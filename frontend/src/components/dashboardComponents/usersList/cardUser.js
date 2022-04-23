import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

//css
import "bootstrap-icons/font/bootstrap-icons.css";

function CardUser() {
    const [users, setUsers] = useState([]);

    useEffect((e) => {
        axios.get("http://localhost:8000/dashboard/admin/users",
        { withCredentials: true },)
        .then(res => {
          setUsers(res.data.users);
          console.log(res.data)
        })
      }, [])

    const handleRemove = (index) => {
        const newList = [...users];
        newList.splice(index, 1);
        setUsers(newList);
    
        axios.delete("http://localhost:8000/dashboard/admin/users",
        { withCredentials: true },)
        .then(res => {
            console.log(res.data);
            toast.success("Account is deleted successfully");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return(
        <CardUserStyled>
            <div className="cardUser-form">
                
                {users && users.map((user,index) =>
                        <div key={user._id}>
                            <div className="card">
                                <p>Numéro Identifiant : <strong>{user._id} </strong> 
                                    <i class="bi bi-person-circle"></i> 
                                </p>

                                <p>Numéro de téléphone : <strong>{user.telephone} </strong> 
                                    <i class="bi bi-telephone"></i>
                                </p>

                                <p>Nom complet : <strong> <span>{user.firstName}</span> <span>{user.lastName} </span>  </strong>
                                    <i class="bi bi-pencil-fill"></i> 
                                </p> 

                                <p> Email : <strong> {user.email} </strong>
                                    <Link
                                        to='#'
                                        onClick={(e) => {
                                            window.location.href = `mailto:${user.email}`;
                                            e.preventDefault();
                                        }}
                                    >
                                        <i class="bi bi-envelope"></i>
                                    </Link>
                                </p>
                                
                                
                                <div>
                                    {/* <a href="/">En savoir plus</a> */}
                                    <i class="bi bi-trash" onClick={() => handleRemove(index)}
                                    ></i>
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
 font-size: 1.5rem;

.cardUser-form{
    margin: 5% auto auto 22%;
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
    font-size: 1.8rem;
    color: black;
}
a {
    color: black;
}
/* RESPONSIVE */
@media only screen and (min-width: 768px) and (max-width: 960px) {
    .card{
        font-size: 1.3rem;
    }
    .bi{
        font-size: 1.4rem;
    }
}
@media screen and (max-width: 480px) {
    .cardUser-form{
        display: inline-block;
        width: 100%;
    }
    .card{
        width: 80%;
        font-size: 1.3rem;
    }
    .bi{
        font-size: 1.5rem;
    }
}

`;
