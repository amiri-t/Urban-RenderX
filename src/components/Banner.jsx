import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import bannerBg from "../assets/bannerBg.jpg";
import { motion, useAnimation, useInView } from "framer-motion";

const Banner = () => {
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
      <img src={bannerBg} alt="" />
      <motion.h1
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        initial="hidden"
        animate={animation}
      >
        The Art <br /> of Placement
      </motion.h1>
      <motion.p
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ delay: 0.7 }}
        initial="hidden"
        animate={animation}
      >
        Designing dreams, rendering reality.
      </motion.p>
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
    height: 60vh;
    img {
      height: 60vh;
    }
    h1 {
      font-size: 3em;
      margin-top: 2.2em;
    }
  }
`;

export default Banner;
