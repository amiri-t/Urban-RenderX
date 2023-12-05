import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../assets/urxLogonbg.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();
  const pathname = location.pathname;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation1 = useAnimation();

  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("home");
    } else if (pathname === "/services") {
      setActiveTab("services");
    } else if (pathname === "/portfolio") {
      setActiveTab("portfolio");
    } else if (pathname === "/about-us") {
      setActiveTab("about-us");
    } else if (pathname === "/contact-us") {
      setActiveTab("contact-us");
    } else if (pathname === "/get-a-proposal") {
      setActiveTab("get-a-proposal");
    }
  }, [pathname]);
  useEffect(() => {
    if (isInView) {
      animation1.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);
  return (
    <Container>
      <Link to={"/"} className="link-styles">
        <img className="logo" src={logo} alt="" />
      </Link>
      <ul
        onClick={handleToggle}
        className={toggle ? "nav-menu active" : "nav-menu"}
      >
        <Link to={"/"} className="link-styles">
          <li className={activeTab === "home" ? "activeTab" : "nonActive"}>
            Home
          </li>
        </Link>
        <Link to={"/services"} className="link-styles">
          <li className={activeTab === "services" ? "activeTab" : "nonActive"}>
            Services
          </li>
        </Link>
        <Link to={"/portfolio"} className="link-styles">
          <li className={activeTab === "portfolio" ? "activeTab" : "nonActive"}>
            Portfolio
          </li>
        </Link>
        <Link to={"/about-us"} className="link-styles">
          <li className={activeTab === "about-us" ? "activeTab" : "nonActive"}>
            About Us
          </li>
        </Link>
        <Link to={"/contact-us"} className="link-styles">
          <li
            className={activeTab === "contact-us" ? "activeTab" : "nonActive"}
          >
            Contact Us
          </li>
        </Link>
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  width: 100%;
  height: 60px;
  z-index: 100;
  transition: 0.2s;
  box-sizing: border-box;
  .logo {
    height: 80px;
    margin-top: 7px;
  }
  .nav-menu {
    display: flex;
    gap: 37px;
    list-style: none;
    align-items: center;
    li {
      color: var(--fontSecondaryColor);
      font-weight: 300;
      transition: 0.3s;
      cursor: pointer;
      :hover {
        color: var(--fontPrimaryColor);
      }
    }
    button {
      background: var(--fontPrimaryColor);
      border: none;
      color: var(--primaryBackgroundColor);
      padding: 7px 14px;
      font-size: 18px;
      border-radius: 20px;
      font-family: "Poppins", cursive;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        box-shadow: 0 0 14px 2px var(--shadowColor);
      }
    }
    .activeTab {
      color: var(--primaryColor);
      font-weight: 600;
    }
  }
  .mobile-menu {
    position: absolute;
    color: white;
    right: 5%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    margin-top: 7px;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1004px) {
    .nav-menu {
      color: var(--fontPrimaryColor);
      background: var(--primaryBgColor);
      width: 90%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10%;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0%;
      right: -100%;
      transition: 0.3s;
      z-index: 99;
      border-left: 1px solid var(--fontSecondaryColor);
    }
    .mobile-menu {
      display: block;
      z-index: 99;
    }
    .nav-menu.active {
      right: 0%;
    }
  }
  @media (max-width: 370px) {
    .nav-menu {
      width: 98%;
    }
  }
`;

export default Navbar;
