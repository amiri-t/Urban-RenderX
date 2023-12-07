import React from "react";
import styled from "styled-components";

const Qoute1 = () => {
  return (
    <Container>
      <h1>
        RENDERING <br />
        SUCCESS
      </h1>
    </Container>
  );
};
const Container = styled.div`
  padding: 8em 4%;
  h1 {
    font-size: 14vw;
    font-weight: 200;
    line-height: 1.1em;
  }
`;

export default Qoute1;
