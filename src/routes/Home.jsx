import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import SecondSection from "../components/SecondSection";
import RenderingTypes from "../components/RenderingTypes";
import OurProcess from "../components/OurProcess";
import PortfolioComp from "../components/PortfolioComp";
import FAQ from "../components/FAQ";
import ContactUsComp from "../components/ContactUsComp";
import Qoute1 from "../components/Qoute1";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Banner />
      <SecondSection />
      <RenderingTypes />
      <OurProcess />
      <Qoute1 />
      <PortfolioComp />
      <FAQ />
      <ContactUsComp />
    </Container>
  );
};
const Container = styled.div`
  padding: 0%;
  width: 100%;
`;

export default Home;
