import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import SecondSection from "../components/SecondSection";
import RenderingTypes from "../components/RenderingTypes";

const Home = () => {
  return (
    <Container>
      <Banner />
      <SecondSection />
      <RenderingTypes />
    </Container>
  );
};
const Container = styled.div`
  padding: 0%;
`;

export default Home;
