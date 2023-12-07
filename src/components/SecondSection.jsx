import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import bgImg from "../assets/bgImg2.png";
import { motion, useAnimation, useInView } from "framer-motion";

const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);
  return (
    <Container>
      <img src={bgImg} alt="" />
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={animation}
      >
        Where Modern <br /> Meets Cozy <br /> Spaces!
      </motion.h1>
      <motion.p
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ delay: 0.7 }}
        initial="hidden"
        animate={animation}
      >
        and where life meets impeccable design.
      </motion.p>
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
    font-weight: 300;
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
    padding: 3em 7% 12em 7%;
    h1 {
      font-size: 3.4em;
    }
  }
`;

export default SecondSection;
