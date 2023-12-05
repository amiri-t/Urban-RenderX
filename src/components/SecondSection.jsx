import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bgImg2.png";

const SecondSection = () => {
  return (
    <Container>
      <img src={bgImg} alt="" />
      <h1>
        Where Modern <br /> Meets Cozy <br /> Spaces!
      </h1>
      <p>and where life meets impeccable design.</p>
    </Container>
  );
};
const Container = styled.div`
  padding: 8em 7% 12em 7%;
  height: 80vh;
  img {
    width: 80%;
    height: 70vh;
    position: absolute;
    right: 0;
    object-fit: cover;
    filter: brightness(0.3);
    z-index: -1;
  }
  h1 {
    margin-top: 1em;
    font-family: "Titillium Web";
    font-size: 5.8em;
    line-height: 1.1em;
    font-weight: 400;
  }
  p {
    color: var(--fontSecondaryColor);
    font-weight: 400;
    margin-top: 2em;
  }
  @media (min-width: 1900px) {
    h1 {
      font-size: 7em;
    }
  }
  @media (max-width: 680px) {
    h1 {
      font-size: 4em;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 3.4em;
    }
  }
`;

export default SecondSection;
