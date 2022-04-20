import { useState, useEffect } from "react";
// css
import styled from 'styled-components';
//Axios
import axios from 'axios';


function Bonjour() {
    const [userSchema, setUserSchema] = useState({});

    useEffect(() => {
		axios.get("http://localhost:8000/dashboard/user", {withCredentials: true})
			.then(res => {
				setUserSchema(res.data.user);
				console.log(userSchema);
			});
	}, []);

    return (
            <div> 
                <h2>Bonjour {userSchema.firstName} !</h2>		
            </div>
            
            
    )

}
export default Bonjour;

const BonjourForm = styled.div`
margin-top: 1%;
margin-left: 50%;
position: absolute;
`;