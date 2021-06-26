import React from "react";

import Character from "./Character";

export default function Characters(props) {
  const { characters } = props;
  return (
    <div>
      <h1>Characters.js test</h1>
      <Character />
    </div>
  );
}
