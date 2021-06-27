import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./App.css";
import styled from "styled-components";
import Characters from "./components/Characters";

const StyledApp = styled.div`
  text-align: center;
  width: 80vw;
  margin: auto;

  h1 {
    color: rgb(243, 157, 59);
    text-shadow: 1px 1px 5px rgb(30, 62, 136);
    font-size: 4rem;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios("https://swapi.dev/api/people")
      .then((request) => setCharacters(request.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <StyledApp>
      <h1>Star Wars Characters</h1>
      <Characters characters={characters} />
    </StyledApp>
  );
};

export default App;
