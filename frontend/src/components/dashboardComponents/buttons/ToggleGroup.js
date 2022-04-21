import React, { useState } from 'react';
import styled from 'styled-components';

const types = ['Cash', 'Credit Card', 'Bitcoin'];

function ToggleGroup() {

  const [active, setActive] = useState(types[0]);

  return (
    <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
export default ToggleGroup;

const ButtonGroup = styled.div`
display: flex;
.buttons-form{
    margin-top: 1%;
    margin-left: 30%;
    position: absolute;
}
/*RESPONSIVE */
@media screen and (max-width: 600px) {
    .buttons {
      display: inline;
    }
}`;

const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
