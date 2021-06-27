import React from "react";
import Character from "./Character";
import styled from "styled-components";

const HalfBlackBackground = styled.div`
  background: rgba(14, 11, 11, 0.2);
  width: 60%;
  margin: auto;
`;

export default function Characters(props) {
  const { characters } = props;

  return (
    <HalfBlackBackground className="halfBlack">
      {characters.map((character) => {
        return <Character character={character} key={character.name} />;
      })}
    </HalfBlackBackground>
  );
}
