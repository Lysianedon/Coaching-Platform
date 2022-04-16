// css
import styled from 'styled-components';

function Profile() {
    return (
      <ProfileForm>
        <div className="profile">
            <h2>Profile</h2>
            <p>Photo</p>
            <p>Full name</p>
            <p>Age</p>
        </div>
      </ProfileForm>
    )
  }
  export default Profile;

  const ProfileForm = styled.div`
	  position: absolute;
    top: 1%;
    width: 30vw;
    margin-left: 60%;
    float: right;
    border: 0;
    background-color: beige;
`;