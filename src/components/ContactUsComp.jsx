import React from "react";
import styled from "styled-components";
import { GiPencilRuler } from "react-icons/gi";
import emailjs from "@emailjs/browser";

const ContactUsComp = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "amiri-render-emails",
        "template_q1gkjrc",
        e.target,
        "nxWVeDl0nBiSEU-yp"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <div className="left">
        <GiPencilRuler className="icon" />
        <p>
          If you have any question, concern, or feedback, please don't hesitate
          to contact us :)
        </p>
        {/* <div className="smIcons">
          <RiInstagramFill className="smIcon" />
        </div> */}
      </div>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name..."
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          type="text"
          name="website"
          placeholder="Your Website or Social Media..."
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="4"
          placeholder="Write your message here..."
        ></textarea>
        <button type="submit" onClick={() => alert("Email Sent")}>
          SEND!
        </button>
      </form>
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  .left {
    .icon {
      font-size: 30em;
    }
    p {
      color: var(--fontSecondaryColor);
      font-weight: 300;
    }
    .smIcon {
      font-size: 2em;
      margin-top: 1em;
    }
  }
  form {
    width: 40%;
    max-width: 40em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    input,
    textarea {
      width: 100%;
      border: none;
      background: none;
      border-bottom: 2px solid white;
      padding: 10px 4px;
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      color: white;
      outline: none;
    }
    button {
      display: flex;
      margin: auto;
      margin-top: 10px;
      background: white;
      font-size: 18px;
      font-family: "Montserrat", cursive;
      border: none;
      padding: 14px 20px;
      font-weight: 500;
    }
  }
  @media (max-width: 1200px) {
    .left {
      .icon {
        font-size: 20em;
      }
      p {
        width: 24em;
      }
    }
  }
  @media (max-width: 800px) {
    padding: 4em 1%;
    .left {
      .icon {
        font-size: 17em;
      }
      p {
        width: 18em;
      }
    }
    form {
      width: 50%;
    }
  }
  @media (max-width: 670px) {
    padding: 4em 3%;
    flex-direction: column;
    .left {
      text-align: center;
      .icon {
        font-size: 16em;
      }
      p {
        width: auto;
      }
    }
    form {
      width: 90%;
    }
  }
`;

export default ContactUsComp;
