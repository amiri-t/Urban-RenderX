import React from "react";
import styled from "styled-components";
import bannerBg from "../assets/bannerBg.jpg";

const Banner = () => {
  return (
    <Container>
      <img src={bannerBg} alt="" />
      <h1>
        The Art <br /> of Placement
      </h1>
      <p>Designing dreams, rendering reality.</p>
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 8%;
  height: 70vh;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    max-height: 40em;
    object-fit: cover;
    filter: brightness(0.3);
    z-index: -1;
  }
  text-align: right;
  h1 {
    margin-top: 1em;
    font-family: "Josefin Sans";
    font-size: 5.8em;
  }
  @media (min-width: 1900px) {
    h1 {
      font-size: 7em;
    }
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 4em;
    }
  }
  @media (max-width: 490px) {
    h1 {
      font-size: 3em;
    }
  }
`;

export default Banner;
