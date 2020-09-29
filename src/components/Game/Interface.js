import React, { useState } from "react";
import styled from "styled-components";
import { GiBroadsword, GiAura, GiSwordwoman } from "react-icons/gi";

import useInterval from "../hooks/useInterval";

let DELTA = 0;

const Interface = ({ score, setScore }) => {
  const [powerUps, setPowerUps] = useState({
    blade: {
      quantity: 0,
      increase: 1,
      cost: 50,
    },
    aura: {
      quantity: 0,
      increase: 5,
      cost: 100,
    },
    reinforcements: {
      quantity: 0,
      increase: 100,
      cost: 1000,
    },
  });

  const addPowerUp = (powerUp) => {
    if (score >= powerUps[`${powerUp}`].cost) {
      setScore((prev) => prev - powerUps[`${powerUp}`].cost);
      setPowerUps((prev) => ({
        ...prev,
        [powerUp]: {
          ...prev[`${powerUp}`],
          quantity: prev[`${powerUp}`].quantity + 1,
        },
      }));
    }
  };

  useInterval(() => {
    let powerUpArray = Object.values(powerUps);
    DELTA++;
    if (DELTA > 1000) {
      DELTA = 0;
    }
    powerUpArray.forEach((power) => {
      if (power.quantity) {
        setScore((prev) => {
          return prev + power.quantity * power.increase;
        });
      }
    });
  }, 1000);

  return (
    <Wrapper>
      <Score>
        <span>Reputation:</span>
        <span>{score}</span>
      </Score>
      <PowerUp onClick={() => addPowerUp("blade")}>
        Sharper Blade <GiBroadsword />
        <span>Cost: {powerUps.blade.cost}</span>
        <span>Quantity: {powerUps.blade.quantity}</span>
      </PowerUp>
      <PowerUp onClick={() => addPowerUp("aura")}>
        Shiny Aura <GiAura />
        <span>Cost: {powerUps.aura.cost}</span>
        <span>Quantity: {powerUps.aura.quantity}</span>
      </PowerUp>
      <PowerUp onClick={() => addPowerUp("reinforcements")}>
        Reinforcements <GiSwordwoman />
        <span>Cost: {powerUps.reinforcements.cost}</span>
        <span>Quantity: {powerUps.reinforcements.quantity}</span>
      </PowerUp>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  flex-grow: 1;
  margin-top: 1rem;
  @media (min-width: 798px) {
    flex-direction: row;
  }
`;

const Score = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid;
  font-size: 1.5rem;
`;
const PowerUp = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: solid;
  transition: all 0.2s ease-in;
  background-color: #e6e8fa;
  font-size: 1.25rem;
  &:active {
    background: linear-gradient(#bf953f, #fcf6ba);
    transform: scale(1.1);
  }
  @media (min-width: 798px) {
    &:focus,
    &:hover {
      background: linear-gradient(#bf953f, #fcf6ba);
      transform: scale(1.1);
    }
  }
`;

export default Interface;
