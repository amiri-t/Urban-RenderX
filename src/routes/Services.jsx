import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img1 from "../assets/servicesBannerImg.jpg";
import img2 from "../assets/servicesBannerImg2.jpg";
import archServiceImg from "../assets/ArchServiceImg.jpg";
import interiorServiceImg from "../assets/interiorServiceImg.jpg";
import exteriorServiceImg from "../assets/exteriorServiceImg.jpg";
import FloorPlansServiceImg from "../assets/floorPlanServiceImg.jpg";
import furnitureServiceImg from "../assets/furnServiceImg.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
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
      <div className="banner">
        <img className="firstImg" src={img1} alt="" />
        <img className="secondImg" src={img2} alt="" />
        <h1>
          SERVICES THAT BRING <br /> VISIONS TO LIFE
        </h1>
      </div>
      <div className="services">
        <motion.div
          className="service"
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
            src={archServiceImg}
            alt=""
          />
          {bgDecs === 1 ? (
            <span>
              <h2>ARCHITECURAL RENDERINGS</h2>
            </span>
          ) : (
            ""
          )}
        </motion.div>
        <motion.div
          className="service"
          onMouseOver={() => setBgDesc(2)}
          onMouseLeave={() => setBgDesc(0)}
          ref={ref}
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
            src={interiorServiceImg}
            alt=""
          />
          {bgDecs === 2 ? (
            <span>
              <h2>INTERIOR RENDERINGS</h2>
            </span>
          ) : (
            ""
          )}
        </motion.div>
        <motion.div
          className="service"
          onMouseOver={() => setBgDesc(3)}
          onMouseLeave={() => setBgDesc(0)}
          ref={ref}
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
            src={exteriorServiceImg}
            alt=""
          />
          {bgDecs === 3 ? (
            <span>
              <h2>EXTERIOR RENDERINGS</h2>
            </span>
          ) : (
            ""
          )}
        </motion.div>
        <motion.div
          className="service"
          onMouseOver={() => setBgDesc(4)}
          onMouseLeave={() => setBgDesc(0)}
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1.4 },
          }}
          transition={{ delay: 1 }}
          initial="hidden"
          animate={animation}
        >
          <img
            className={bgDecs === 4 ? "img dark" : "img"}
            src={furnitureServiceImg}
            alt=""
          />
          {bgDecs === 4 ? (
            <span>
              <h2>FURNITURE RENDERINGS</h2>
            </span>
          ) : (
            ""
          )}
        </motion.div>
        <motion.div
          className="service"
          onMouseOver={() => setBgDesc(5)}
          onMouseLeave={() => setBgDesc(0)}
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1.8 },
          }}
          transition={{ delay: 1 }}
          initial="hidden"
          animate={animation}
        >
          <img
            className={bgDecs === 5 ? "img dark" : "img"}
            src={FloorPlansServiceImg}
            alt=""
          />
          {bgDecs === 5 ? (
            <span>
              <h2>3D FLOOR PLANING RENDERINGS</h2>
            </span>
          ) : (
            ""
          )}
        </motion.div>
      </div>
      <Link to={"/contact-us"}>
        <button>TALK TO US</button>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  padding: 5em 5%;
  overflow-x: hidden;
  .banner {
    display: flex;
    justify-content: center;
    gap: 7%;
    .firstImg {
      width: 37%;
      filter: brightness(0.3);
      height: 60vh;
      object-fit: cover;
    }
    .secondImg {
      margin-top: 17%;
      width: 47%;
      object-fit: cover;
      height: 70vh;
      filter: brightness(0.4);
    }
    h1 {
      position: absolute;
      font-size: 8.7vw;
      margin-left: 7%;
    }
  }

  .services {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
    .service {
      width: 45%;
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

  @media (max-width: 650px) {
    .banner {
      flex-direction: column;
      gap: 0;
      .firstImg {
        align-self: flex-end;
        width: 80%;
        height: 40vh;
      }
      .secondImg {
        width: 70%;
        margin-top: 10px;
        height: 40vh;
      }
      h1 {
        top: 24%;
        font-size: 12vw;
        margin-left: 2%;
      }
    }
    .services {
      .service {
        width: 90%;
      }
    }
  }
`;

export default Services;
