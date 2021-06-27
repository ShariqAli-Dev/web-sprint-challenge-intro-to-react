import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  font-size: 2rem;
  color: white;
  margin: 5%;
  padding: 2.5%;
  border: solid rgb(57, 19, 119) 2px;
  color: rgb(239, 179, 241);
`;

export default function Character(props) {
  const { character } = props;

  return <CharacterDiv>{character.name}</CharacterDiv>;
}
