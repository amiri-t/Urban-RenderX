import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const OurProcess = () => {
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
      <h1 className="title">OUR PROCESS</h1>
      <div className="items">
        <motion.div
          className="item"
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.3 }}
          initial="hidden"
          animate={animation}
        >
          <h2>Consultation and Requirement Gathering</h2>
          <p>
            Understand the client's vision, preferences, and requirements.
            Gather information about the space to be rendered, including
            dimensions, layout, desired style, color schemes, and any specific
            features or elements.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.6 }}
          initial="hidden"
          animate={animation}
        >
          <h2>Conceptualization and Planning</h2>
          <p>
            Develop a preliminary design concept based on the gathered
            information. Create sketches, mood boards, or initial 3D models to
            illustrate the proposed design. Collaborate with the client to
            refine and finalize the design direction.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.9 }}
          initial="hidden"
          animate={animation}
        >
          <h2>Modeling and Rendering</h2>
          <p>
            Utilize specialized software to create detailed 3D models of the
            space, incorporating furniture, lighting, textures, and other
            elements as per the finalized design. This step involves creating
            the virtual environment that will be rendered into the final visual
            representation.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 1.2 }}
          initial="hidden"
          animate={animation}
        >
          <h2>Rendering and Visualization</h2>
          <p>
            Apply lighting, materials, and textures to the 3D model to create
            realistic visuals. This process involves rendering the scene from
            different angles and perspectives to achieve high-quality images or
            videos that accurately depict the design.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 1.5 }}
          initial="hidden"
          animate={animation}
        >
          <h2>Review and Revision</h2>
          <p>
            Present the rendered visuals to the client for feedback and review.
            Incorporate any requested changes or revisions to ensure the design
            aligns with the client's expectations. Iterate on the rendering as
            needed until the client is satisfied with the final result.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 3em 4%;
  .title {
    text-align: center;
    font-size: 4.7em;
    font-family: "Josefin Sans";
    font-weight: 200;
  }
  .items {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    .item {
      text-align: center;
      width: 370px;
      h2 {
        font-weight: 500;
        font-family: "Josefin Sans";
        margin-bottom: 10px;
      }
      p {
        color: var(--fontSecondaryColor);
        font-weight: 300;
      }
    }
  }
  @media (max-width: 840px) {
    .items {
      .item {
        width: 90%;
      }
    }
  }
  @media (max-width: 400px) {
    .title {
      font-size: 3.7em;
    }
  }
`;

export default OurProcess;
