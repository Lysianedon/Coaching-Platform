import { React, useState, useEffect } from "react";
import axios from 'axios';
// css
import styled from 'styled-components';
import "./agenda.css"
function Agenda() {
    const [emailUser,setEmailUser] = useState('');

    const fetchEmailUser = () => {

        axios.get('http://localhost:8000/dashboard/user', {withCredentials : true})
        .then(res =>{ 
            let email = (res.data.user.email);
            email = email.replace('@', '%40');
            setEmailUser(email);
        })
    }

    useEffect(()=> {
        fetchEmailUser();

    }, [])

    return (
        <>
            <iframe src={`https://calendar.google.com/calendar/embed?src=${emailUser}&ctz=Europe%2FParis`} height={300} className="agenda" ></iframe>
        </>
    )
 }
export default Agenda;



