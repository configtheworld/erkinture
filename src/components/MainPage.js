import { Fragment } from "react";
import WhoIam from "./WhoIam";
import Experiences from "./Experiences";
import Projects from "./Projects";
import me from "../public/img/erkin.jpg";
import "../public/styles/pulseball.css";
import "../public/styles/slide.css";
import Pulse from "./Pulse";
import Desc from "./Desc";
import Stats from "./Stats";
import ContactForm from "./ContactForm";
import SocialMediaButtons from "./SocialMediaButtons";
import React from "react";
import Wave from "react-wavify";

const MainPage = () => {
  return (
    <Fragment>
      <header className="header-design">
        <div className="listar-map-button">
          <img
            className=""
            src={me}
            height="150px"
            width="150px"
            alt="me"
            style={{
              borderRadius: "50%",
              marginTop: "100px",
              position: "relative",
              boxShadow: " 0 0 0 6px #50514F",
              zIndex: "2",
              filter: "grayscale(30%)",
              objectFit: "cover",
            }}
          />
        </div>
        <Wave
          fill="#343434"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 7,
          }}
        />
      </header>

      <Desc />
      <Pulse />
      <div className="pset">
        <WhoIam xs={12} />
        <Experiences xs={6} />
        <Projects xs={4} />
        <ContactForm xs={12} />
        <SocialMediaButtons />
      </div>
    </Fragment>
  );
};

export default MainPage;
