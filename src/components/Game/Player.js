import React, { useState } from "react";
import styled from "styled-components";

import useInterval from "../hooks/useInterval";

const SPRITEDISTANCE = 192; //Distance between each frame in the spritesheet asset

const Player = ({ setScore }) => {
  const [x, setX] = useState(48); //Denotes the position of the spritesheet
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setX(48 + SPRITEDISTANCE * 24);
    setScore((prev) => prev + 1);
    setClicked(true);
  };

  //Game loop used for the slashing animation
  useInterval(() => {
    if (clicked) {
      setX((prev) => prev + SPRITEDISTANCE);
      if (x >= 48 + SPRITEDISTANCE * 27) {
        setClicked(false);
        setX(48);
      }
    }
  }, 60);

  return (
    <>
      <Sprite
        onClick={handleClick}
        style={{ backgroundPosition: `-${x}px -48px` }}
      />
    </>
  );
};

const Sprite = styled.div`
  position: absolute;
  left: 20%;
  bottom: 20%;
  height: 132px;
  width: 132px;
  background: url("assets/Player.png");
  background-size: ${3840 * 3}px ${64 * 3}px;
  image-rendering: pixelated;
`;

export default Player;
