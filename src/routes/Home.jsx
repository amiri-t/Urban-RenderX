import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import SecondSection from "../components/SecondSection";
import RenderingTypes from "../components/RenderingTypes";
import OurProcess from "../components/OurProcess";

const Home = () => {
  return (
    <Container>
      <Banner />
      <SecondSection />
      <RenderingTypes />
      <OurProcess />
    </Container>
  );
};
const Container = styled.div`
  padding: 0%;
`;

export default Home;
