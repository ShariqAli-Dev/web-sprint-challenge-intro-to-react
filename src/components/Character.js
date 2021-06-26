import React from "react";

export default function Character(props) {
  const { character } = props;
  return <div className="characterDiv">{character.name}</div>;
}
