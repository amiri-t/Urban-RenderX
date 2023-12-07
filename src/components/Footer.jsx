import React from "react";
import styled from "styled-components";
import logo from "../assets/urxLogonbg.png";
import asitesLogo from "../assets/asites-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Designing dreams, rendering reality.</p>
        </div>
        <div className="copyright">© 2023 URx - All Right Reserved.</div>
      </div>
      <div className="bottom">
        <p>Designed and Developed by:</p>
        <Link to={"https://asites-agency.web.app/"} target="_blank">
          <img src={asitesLogo} alt="" />
        </Link>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 1em 4%;
  box-shadow: 0 0 10px 1px gray;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    .logo {
      img {
        width: 80px;
      }
      p {
        font-weight: 300;
        color: var(--fontSecondaryColor);
      }
    }
    .copyright {
      font-weight: 300;
      color: var(--fontSecondaryColor);
    }
  }
  .bottom {
    padding-top: 3em;
    text-align: center;
    margin: auto;
    p {
      font-weight: 300;
      color: var(--fontSecondaryColor);
    }
    img {
      width: 140px;
      cursor: pointer;
    }
  }
  @media (max-width: 700px) {
    .top {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: auto;
    }
  }
`;

export default Footer;
