import React, { useState } from "react";
import styled from "styled-components";

import useInterval from "../hooks/useInterval";

const FRICTION = 0.2;

const Cloud = () => {
  const [cloudX, setCloudX] = useState(-600);
  const [secondCloud, setSecondCloud] = useState(-550);
  const [thirdCloud, setThirdCloud] = useState(-900);

  useInterval(() => {
    setCloudX((prev) => prev + 2 * FRICTION);
    setSecondCloud((prev) => prev + 1 * FRICTION);
    setThirdCloud((prev) => prev + 3 * FRICTION);
    if (cloudX > 850) {
      setCloudX(-550);
    }
    if (secondCloud > 850) {
      setSecondCloud(-550);
    }
    if (thirdCloud > 850) {
      setThirdCloud(-550);
    }
  }, 10);
  return (
    <Wrapper>
      <Nuage
        style={{ left: `${cloudX}px`, top: `-20%`, transform: "scale(0.1)" }}
        src="assets/cloud.png"
      />
      <Nuage
        style={{
          left: `${secondCloud}px`,
          top: `-60%`,
          transform: "scale(0.2)",
        }}
        src="assets/cloud.png"
      />
      <Nuage
        style={{
          left: `${thirdCloud}px`,
          top: `-80%`,
          transform: "scale(0.1)",
        }}
        src="assets/cloud.png"
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  height: 50%;
  width: 100%;
`;

const Nuage = styled.img`
  position: absolute;
  transform: scale(0.2);
`;

export default Cloud;
