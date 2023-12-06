import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";

const FAQ = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation1 = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation1.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <Container>
      <div className="title">
        <h1>FAQ</h1>
        <p>
          Here some of the most important questions that clients usually ask us.
          If you have any other question, please{" "}
          <Link to={"/contact-us"} className="link-styles">
            Contact Us
          </Link>
        </p>
      </div>
      <div ref={ref} className="questions">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
          className={activeAnswer === 1 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 1 ? null : 1)}
        >
          <span>
            <h2>How long does rendering take?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            Timelines vary based on project complexity. Simple renderings might
            take days, while complex ones could require weeks for detailed
            modeling and rendering.
          </p>
        </motion.div>

        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
          className={activeAnswer === 3 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 3 ? null : 3)}
        >
          <span>
            <h2>Can I make changes after the rendering starts?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            Yes, though major changes might impact the timeline and cost. We aim
            for flexibility but suggest finalizing details before rendering
            begins.
          </p>
        </motion.div>
        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
          className={activeAnswer === 4 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 4 ? null : 4)}
        >
          <span>
            <h2>What software/tools do you use for rendering?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            We use industry-leading software like Blender, SketchUp, and V-Ray,
            ensuring high-quality, realistic renderings of your design concepts.
          </p>
        </motion.div>
        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
          className={activeAnswer === 2 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 2 ? null : 2)}
        >
          <span>
            <h2>Do I need to provide specific details for rendering?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            Yes, detailed information helps. Provide floor plans, preferred
            styles, color schemes, furniture references, and any specifics
            crucial to your vision.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  background: var(--backgroundGradient2T);
  background-size: 40% 100%, 90% 140%, 49% 100%;
  background-repeat: no-repeat;
  .title {
    text-align: center;
    h1 {
      font-weight: 200;
      font-size: 4.7em;
    }
    p {
      width: 60%;
      margin: auto;
      margin-top: 1em;
      color: var(--fontSecondaryColor);
      font-weight: 300;
    }
  }
  .questions {
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 2em 0;
    align-items: center;
    hr {
      width: 80%;
      border: none;
      border-top: 1px solid var(--fontSecondaryColor);
    }
    .row {
      transition: 0.4s;
      height: 30px;
      width: 80%;
      cursor: pointer;
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          color: var(--primaryColor);
          font-weight: 500;
        }
        .icon {
          font-size: 2em;
          color: var(--primaryColor);
        }
      }
      p {
        display: none;
      }
    }

    .active {
      transition: 0.4s;
      height: 80px;
      width: 80%;
      cursor: pointer;
      p {
        transition: 0.4s;
        display: flex;
        color: var(--fontSecondaryColor);
        font-weight: 300;
      }
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          color: var(--primaryColor);
          font-weight: 500;
        }
        .icon {
          transform: rotate(180deg);
          font-size: 2em;
          color: var(--primaryColor);
        }
      }
    }
  }
  @media (min-width: 2050px) {
    height: 40vh;
    background: var(--backgroundGradient2S);
  }
  @media (max-width: 1170px) {
    .questions {
      hr {
        width: 97%;
      }
      .row {
        width: 98%;
      }
      .active {
        width: 98%;
      }
    }
  }
  @media (max-width: 955px) {
    .questions {
      .active {
        height: 90px;
        p {
          line-height: 20px;
        }
      }
    }
  }
  @media (max-width: 955px) {
    .questions {
      .row {
        h2 {
          font-size: 1.4em;
        }
      }
      .active {
        width: 98%;
        height: 90px;
        h2 {
          font-size: 1.4em;
        }
        p {
          line-height: 20px;
        }
      }
    }
  }
  @media (max-width: 870px) {
    background-size: 40% 100%, 100% 140%, 79% 100%;
    .questions {
      .active {
        height: 130px;
      }
    }
  }
  @media (max-width: 730px) {
    .questions {
      .active {
        height: 140px;
      }
    }
  }
  @media (max-width: 680px) {
    .questions {
      .row {
        height: 40px;
        h2 {
          line-height: 24px;
        }
      }
      .active {
        h2 {
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 540px) {
    .questions {
      .active {
        height: 110px;
        p {
          line-height: 18px;
        }
      }
    }
  }
  @media (max-width: 475px) {
    .questions {
      .active {
        height: 130px;
        p {
          line-height: 18px;
        }
      }
    }
  }
  @media (max-width: 425px) {
    .questions {
      .row {
        h2 {
          font-size: 1.2em;
        }
      }
      .active {
        height: 140px;
        h2 {
          font-size: 1.2em;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
  @media (max-width: 365px) {
    .questions {
      .row {
        h2 {
          font-size: 1.2em;
        }
      }
      .active {
        height: 160px;
        h2 {
          font-size: 1.2em;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default FAQ;
