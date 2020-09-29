import React, { useState } from "react";
import styled from "styled-components";

import Player from "./Player";
import Cloud from "./Cloud";
import { Card } from "../Home";
import Interface from "./Interface";

const Game = () => {
  const [score, setScore] = useState(0);

  return (
    <Wrapper>
      <GameZone>
        <Cloud />
        <Player setScore={setScore} />
      </GameZone>
      <Interface score={score} setScore={setScore} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
`;

const GameZone = styled(Card)`
  position: relative;
  flex-grow: 2;
  min-height: 480px;
  overflow: hidden;
`;

export default Game;
