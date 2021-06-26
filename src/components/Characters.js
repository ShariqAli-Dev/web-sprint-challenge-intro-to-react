import React from "react";

import Character from "./Character";

export default function Characters(props) {
  const { characters } = props;
  return (
    <div className="halfBlack">
      {characters.map((character) => {
        return <Character character={character} key={character.name} />;
      })}
    </div>
  );
}
