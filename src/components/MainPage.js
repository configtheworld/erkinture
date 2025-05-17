import { Fragment } from "react";
import WhoIam from "./WhoIam";
import Experiences from "./Experiences";
import Education from "./Education";
import Projects from "./Projects";
import me from "../public/img/erkin.jpg";
import "../public/styles/slide.css";
import Desc from "./Desc";
import SocialMediaButtons from "./SocialMediaButtons";
import React from "react";
import Wave from "react-wavify";
import { Parallax } from "react-scroll-parallax";
import ServerAnimation from "./ServerAnimation";
import PCAnimation from "./PCAnimation";

const MainPage = () => {
  return (
    <Fragment>
      <header className="header-design">
        <div className="listar-map-button">
          <img
            className="ppimage pulse-border"
            src={me}
            height="150px"
            width="150px"
            alt="me"
            style={{
              borderRadius: "50%",
              marginTop: "100px",
              position: "relative",
              zIndex: "2",
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
      <Parallax key={0} speed={-10}>
        <ServerAnimation type="200" left="5vw" right="" top="150px" />
        <ServerAnimation type="401" left="" right="5vw" top="260px" />
      </Parallax>
      <div className="pset">
        <Parallax speed={-10}>
          <WhoIam />
        </Parallax>
        <Parallax speed={-10}>
          <PCAnimation type="200" left="5vw" right="" top="200px" />
        </Parallax>
        <Parallax speed={-10}>
          <ServerAnimation type="200" left="" right="7vw" top="150px" />
          <ServerAnimation type="200" left="" right="7vw" top="260px" />
          <ServerAnimation type="401" left="" right="7vw" top="370px" />
        </Parallax>

        <Parallax speed={0}>
          <Education />
        </Parallax>
        <Parallax speed={-10}>
          <PCAnimation type="200" left="" right="7vw" top="200px" />
        </Parallax>
        <Parallax speed={-10}>
          <ServerAnimation type="401" left="5vh" right="" top="150px" />
          <ServerAnimation type="200" left="5vh" right="" top="260px" />
          <ServerAnimation type="401" left="5vh" right="" top="370px" />
        </Parallax>
        <Parallax speed={0}>
          <Experiences />
        </Parallax>

        <Parallax speed={0}>
          <Projects />
        </Parallax>

        <SocialMediaButtons />
      </div>
    </Fragment>
  );
};

export default MainPage;
