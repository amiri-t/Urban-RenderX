import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import portPic1 from "../assets/portPic1.webp";
import portPic2 from "../assets/portPic2.webp";
import portPic3 from "../assets/portPic3.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const PortfolioComp = () => {
  const [bgDecs, setBgDesc] = useState(0);
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
      <h1 className="title">OUR PORTFOLIO</h1>
      <div className="items">
        <motion.div
          className="item"
          onMouseOver={() => setBgDesc(1)}
          onMouseLeave={() => setBgDesc(0)}
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.3 }}
          initial="hidden"
          animate={animation}
        >
          <img
            className={bgDecs === 1 ? "img dark" : "img"}
            src={portPic1}
            alt=""
          />
          {bgDecs === 1 ? (
            <span>
              <h2>DISCOVER MORE INTERIOR RENDERINGS</h2>
              <FaExternalLinkAlt />
            </span>
          ) : (
            ""
          )}
        </motion.div>
        <motion.div
          className="item"
          onMouseOver={() => setBgDesc(2)}
          onMouseLeave={() => setBgDesc(0)}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.7 }}
          initial="hidden"
          animate={animation}
        >
          <img
            className={bgDecs === 2 ? "img dark" : "img"}
            src={portPic2}
            alt=""
          />
          {bgDecs === 2 ? (
            <span>
              <h2>DISCOVER MORE EXTERIOR RENDERINGS</h2>
              <FaExternalLinkAlt />
            </span>
          ) : (
            ""
          )}
        </motion.div>
        <motion.div
          className="item"
          onMouseOver={() => setBgDesc(3)}
          onMouseLeave={() => setBgDesc(0)}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 1 }}
          initial="hidden"
          animate={animation}
        >
          <img
            className={bgDecs === 3 ? "img dark" : "img"}
            src={portPic3}
            alt=""
          />
          {bgDecs === 3 ? (
            <span>
              <h2>DISCOVER MORE COMMERCIAL RENDERINGS</h2>
              <FaExternalLinkAlt />
            </span>
          ) : (
            ""
          )}
        </motion.div>
      </div>
      <button>DISCOVER ALL</button>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 2%;
  .title {
    font-size: 4.7em;
    font-weight: 200;
    text-align: center;
  }
  .items {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    .item {
      width: 30%;
      height: 50vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      img {
        transition: 0.3s;
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        filter: brightness(0.8);
      }
      .dark {
        filter: brightness(0.3);
      }
      h2 {
        font-weight: 400;
      }
    }
  }
  button {
    display: flex;
    margin: auto;
    margin-top: 2em;
    background: white;
    font-size: 18px;
    font-family: "Montserrat", cursive;
    border: none;
    padding: 14px 20px;
    font-weight: 500;
  }
  @media (max-width: 1000px) {
    .title {
      font-size: 3.8em;
    }
    .items {
      gap: 1em;
      .item {
        height: 30vh;
      }
    }
  }
  @media (max-width: 650px) {
    .title {
      font-size: 3em;
    }
    .items {
      flex-wrap: wrap;
      .item {
        width: 48%;
      }
    }
  }
  @media (max-width: 500px) {
    .items {
      flex-wrap: wrap;
      .item {
        width: 98%;
        height: 40vh;
      }
    }
  }
`;

export default PortfolioComp;
