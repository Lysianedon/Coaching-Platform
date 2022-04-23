import { React, useState } from "react";
import Buttons from "../buttons/buttons";
// css
import styled from "styled-components";

import CardUser from "./cardUser";

function UsersList() {
  return (
    <UsersListStyled>
      <ButtonsStyled>
        <a href="/dashboard/admin/users">
          <button type="button" className="btn-create btn-dark">
            Créer un utilisateur
          </button>
        </a>
        <a href="/dashboard/admin/list">
          <button type="button" className="btn-list btn-dark">
            Voir la liste des utilisateurs
          </button>
        </a>
      </ButtonsStyled>

      <CardUser />
    </UsersListStyled>
  );
}
export default UsersList;

const UsersListStyled = styled.div`
  .tilte-cardUser {
    margin: 0% 0% 2% 15%;
    text-align: center;
  }
  /* Responsive Tablet */
  @media screen and (min-width: 768px) and (max-width: 960px) {
    margin: 12% 0% 2% 0%;
  }

  /* Responsive Phone */
  @media screen and (max-width: 480px) {
    margin: 25% 0% 2% 0%;
  }
`;

//------------- Style of buttons ------------//
const ButtonsStyled = styled.div`
  display: flex;
  margin: 0% 0% 0% 30%;

  .btn-create,
  .btn-list {
    width: 120%;
    height: 7vh;
    border-radius: 4px;
    font-size: 1.8rem;
  }
  .btn-create {
    justify-content: center;
  }
  .btn-list {
    justify-content: center;
    margin-left: 140%;
  }
  /*  Laptop */
  @media screen and (min-width: 960px) and (max-width: 1024px) {
    .btn-create {
      margin: 0% 0% 0% -15%;
    }
    .btn-list {
      margin: 0% 0% 0% 90%;
    }
  }
  /* Responsive Tablet */
  @media screen and (min-width: 768px) and (max-width: 960px) {
    .btn-create,
    .btn-list {
      width: 30vw;
      font-size: 1.5rem;
    }
    .btn-create {
      margin: 0% 0% 3% -15%;
    }
    .btn-list {
      margin: 0% 0% 3% 5%;
    }
  }
  /* Responsive Phone */
  @media screen and (max-width: 480px) {
    width: 40%;
    display: inline-block;
    .btn-create,
    .btn-list {
      margin: 3% 0% 3% -15%;
      font-size: 1.3rem;
    }
  }
`;
