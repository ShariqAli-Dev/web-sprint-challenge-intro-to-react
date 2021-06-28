import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  margin: ${(pr) => pr.theme.characterDiv.margin};
  padding: ${(pr) => pr.theme.characterDiv.padding};
  border: ${(pr) => pr.theme.characterDiv.border};

  h2 {
    font-size: ${(pr) => pr.theme.characterName.fontSize};
    color: ${(pr) => pr.theme.characterName.color};
    display: ${(pr) => pr.theme.characterName.display};
  }

  h3 {
    color: ${(pr) => pr.theme.characterAge.secondaryColor};
    float: ${(pr) => pr.theme.characterAge.float};
    background-color: ${(pr) => pr.theme.characterAge.primaryColor};
    display: ${(pr) => pr.theme.characterAge.display};
    padding: ${(pr) => pr.theme.characterAge.padding};
    border-radius: ${(pr) => pr.theme.characterAge.borderRadius};
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
