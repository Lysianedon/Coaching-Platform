import { useState, useEffect } from "react";
// css
import styled from 'styled-components';


function Bonjour() {
    const [userSchema, setUserSchema] = useState({});

    useEffect(() => {
		fetch("http://localhost:8000/dashboard/user")
			.then((res) => res.json())
			.then((data) => {
				setUserSchema(data);
				console.log(data);
			});
	}, []);

    return (
        <BonjourForm>
            <div> 
                <h3>Bonjour {userSchema.firstName}</h3>		
            </div>
            
        </BonjourForm>
    )

}
export default Bonjour;

const BonjourForm = styled.div`
margin-top: 1%;
margin-left: 50%;
position: absolute;
`;