import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <Container>
      <Banner />
    </Container>
  );
};
const Container = styled.div`
  padding: 0%;
`;

export default Home;
