import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import SecondSection from "../components/SecondSection";

const Home = () => {
  return (
    <Container>
      <Banner />
      <SecondSection />
    </Container>
  );
};
const Container = styled.div`
  padding: 0%;
`;

export default Home;
