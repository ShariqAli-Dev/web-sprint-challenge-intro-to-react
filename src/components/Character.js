import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  font-size: ${(pr) => pr.theme.characterDiv.fontSize};
  margin: ${(pr) => pr.theme.characterDiv.margin};
  padding: ${(pr) => pr.theme.characterDiv.padding};
  border: ${(pr) => pr.theme.characterDiv.border};
  color: ${(pr) => pr.theme.characterDiv.color};
`;

export default function Character(props) {
  const { character } = props;

  return <CharacterDiv>{character.name}</CharacterDiv>;
}
