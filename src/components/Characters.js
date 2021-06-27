import React from "react";
import Character from "./Character";
import styled from "styled-components";

const HalfBlackBackground = styled.div`
  background: ${(pr) => pr.theme.halfBlack.backgroundColor};
  width: ${(pr) => pr.theme.halfBlack.width};
  margin: ${(pr) => pr.theme.halfBlack.margin};
`;

export default function Characters(props) {
  const { characters } = props;

  return (
    <HalfBlackBackground>
      {characters.map((character) => {
        return <Character character={character} key={character.name} />;
      })}
    </HalfBlackBackground>
  );
}
