import { React, useState, useEffect } from "react";
import axios from 'axios';
// css
import styled from 'styled-components';

function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fetchProfileInfos = () => {
    axios.get('http://localhost:8000/dashboard/user')
    .then(res => console.log(res.data));
  }

 useEffect(() => {
  fetchProfileInfos();
 }, [])

    return (
      <ProfileForm>
        <div className="profile">
            <h2>Profile</h2>
            <p>Photo</p>
            <p>{firstName} {lastName}</p>

        </div>
      </ProfileForm>
    )
  }
  export default Profile;

  const ProfileForm = styled.div`
	  /* position: absolute; */
    top: 1%;
    width: 30vw;
    margin-left: 60%;
    float: right;
    border: 0;
    border: 1px solid black;
`;