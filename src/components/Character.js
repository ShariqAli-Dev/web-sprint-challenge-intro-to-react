import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  margin: 5%;
  padding: 2.5%;
  border: solid rgb(57, 19, 119) 2px;

  h2 {
    font-size: 2rem;
    color: rgb(239, 179, 241);
    display: inline-block;
  }

  h3 {
    color: 1px 1px 5px rgb(30, 62, 136);
    float: right;
    background-color: rgb(243, 157, 59);
    display: inline-block;
    padding: 2%;
    border-radius: 40%;
  }
`;

export default function Character(props) {
  const { character } = props;

  return (
    <CharacterDiv>
      <h2>{character.name}</h2>
      <h3>{character.birth_year}</h3>
    </CharacterDiv>
  );
}
