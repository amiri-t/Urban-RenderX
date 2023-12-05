import React from "react";
import styled from "styled-components";
import archRendersImg from "../assets/archRendersImg.webp";
import interiorRendersImg from "../assets/interiorRendersImg.jpg";
import exteriorRendersImg from "../assets/exteriorRendersImg.jpg";
import furnitureRendersImg from "../assets/furnitureRendersImg.jpeg";

const RenderingTypes = () => {
  return (
    <Container>
      <h1 className="title">RENDERING SERVICES</h1>
      <div className="items">
        <div className="item">
          <img src={archRendersImg} alt="" />
          <h1>ARCHITECTURAL RENDERINGS</h1>
          <p>We provide modern architectural renderings that sell.</p>
        </div>
        <div className="item">
          <img src={interiorRendersImg} alt="" />
          <h1>INTERIOR RENDERINGS</h1>
          <p>
            We provide modern interior renderings that everybody falls in love
            with.
          </p>
        </div>
        <div className="item">
          <img src={exteriorRendersImg} alt="" />
          <h1>EXTERIOR RENDERINGS</h1>
          <p>
            The outside look of a house is pretty important, and we take good
            care of that.
          </p>
        </div>
        <div className="item">
          <img src={furnitureRendersImg} alt="" />
          <h1>FURNITURE RENDERINGS</h1>
          <p>We also provide amazing modern furniture renderings.</p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 12em 0 4em 0;
  .title {
    font-size: 4em;
    text-align: center;
    font-family: "Josefin Sans";
    font-weight: 200;
  }
  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    .item {
      position: sticky;
      top: 4em;
      width: 90%;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.3);
      }
      h1 {
        text-align: center;
        font-size: 4em;
      }
      p {
        color: var(--fontSecondaryColor);
      }
    }
  }
  @media (max-width: 1200px) {
    .items {
      .item {
        h1 {
          font-size: 3em;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .title {
      font-size: 3em;
    }
    .items {
      .item {
        h1 {
          font-size: 2em;
        }
      }
    }
  }
`;

export default RenderingTypes;
