import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Card>
        <h1>Super Hero Training</h1>
        <p>
          Help Super Fox train to become a Super Hero. Click on Super Fox to
          slash and gain some reputation!
        </p>
        <p>You can also buy some powerups to help him!</p>
        <button
          onClick={() => {
            history.push("/game");
          }}
        >
          Start Playing!
        </button>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  h1 {
    text-align: center;
    font-size: 2rem;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
  }
  button {
    height: 80px;
    width: 200px;
    border-radius: 16px;
    background-color: #77dd77;
    transition: transform ease-in 0.2s;
    font-size: 1.5rem;
  }
  button:hover {
    transform: scale(1.1);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;
  width: 80%;
  background-color: #00b4ff;
  border-radius: 20px;
`;
export default Home;
