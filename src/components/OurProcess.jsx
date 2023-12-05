import React from "react";
import styled from "styled-components";

const OurProcess = () => {
  return (
    <Container>
      <h1 className="title">OUR PROCESS</h1>
      <div className="items">
        <div className="item">
          <h2>Consultation and Requirement Gathering</h2>
          <p>
            Understand the client's vision, preferences, and requirements.
            Gather information about the space to be rendered, including
            dimensions, layout, desired style, color schemes, and any specific
            features or elements.
          </p>
        </div>
        <div className="item">
          <h2>Conceptualization and Planning</h2>
          <p>
            Develop a preliminary design concept based on the gathered
            information. Create sketches, mood boards, or initial 3D models to
            illustrate the proposed design. Collaborate with the client to
            refine and finalize the design direction.
          </p>
        </div>
        <div className="item">
          <h2>Modeling and Rendering</h2>
          <p>
            Utilize specialized software to create detailed 3D models of the
            space, incorporating furniture, lighting, textures, and other
            elements as per the finalized design. This step involves creating
            the virtual environment that will be rendered into the final visual
            representation.
          </p>
        </div>
        <div className="item">
          <h2>Rendering and Visualization</h2>
          <p>
            Apply lighting, materials, and textures to the 3D model to create
            realistic visuals. This process involves rendering the scene from
            different angles and perspectives to achieve high-quality images or
            videos that accurately depict the design.
          </p>
        </div>
        <div className="item">
          <h2>Review and Revision</h2>
          <p>
            Present the rendered visuals to the client for feedback and review.
            Incorporate any requested changes or revisions to ensure the design
            aligns with the client's expectations. Iterate on the rendering as
            needed until the client is satisfied with the final result.
          </p>
        </div>
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
