import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const classes = useStyles();
  return (
    <div className="central vertical">
      <Card className={classes.root}>
        <div className="card-header-line"></div>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Projects</Typography>

          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              container
              item
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              sm={9}
            >
              <ul className={classes.projectList}>
                <ProjectItem
                  link="https://github.com/Waste-Goobers"
                  title="Wastefind"
                  description="As a graduation project, developed a complete SaaS platform for waste material analysis, and image processing features to navigate recycling hubs on a map.Achieved 92% accuracy on a deep learning material classification model."
                  techStack={[
                    "React JS",
                    "React Native",
                    "Flask",
                    "Firebase",
                    "Express JS",
                  ]}
                />
                <ProjectItem
                  link="https://work-counter.vercel.app/"
                  title="Work Counter App"
                  description="Productivity tool app which designed to track study or work sessions effectively."
                  techStack={[
                    "Nuxt 3",
                    "Firebase",
                    "Typescript",
                    "TailwindCSS",
                  ]}
                />

                <ProjectItem
                  link="https://github.com/configtheworld/nft-auction-game"
                  title="nft-auction-game"
                  description="Constructed an NFT auction simulation
                  game to analyze basic English and Combinatorial auction models in NFT trade."
                  techStack={["C#", "Unity"]}
                />

                <ProjectItem
                  link="https://github.com/configtheworld/security-extension"
                  title="Google Chrome Security Extension"
                  description="Built Google Chrome browser extension to evaluate website safety, empowering
                  users to detect potential threats."
                  techStack={["Typescript", "React"]}
                />
                <ProjectItem
                  link="https://github.com/configtheworld/unreal-crypto-wallet-api"
                  title="Crypto Wallet API"
                  description="Created an API service for accessing data of cryptocurrencies and an artificial wallet system for stock market forecasts."
                  techStack={["Express", "Mongo", "Docker"]}
                />
              </ul>
              <h3
                className={classes.steps}
                style={{ textAlign: "start", width: "100%" }}
              >
                NPM Packages
              </h3>
              <ul className={classes.projectList}>
                <ProjectItem
                  link="https://www.npmjs.com/package/vue3-otp-input-field"
                  title="Vue-Vite 3 OTP Input Field"
                  description="Customizable OTP input field component for Vue 3 Vite."
                />
                <ProjectItem
                  link="https://www.npmjs.com/package/indexed-object-to-array"
                  title="indexed-object-to-array "
                  description="A NPM package for converting indexed keys objects into an array of objects."
                />
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: "400px",
    boxShadow: "7px 18px 50px #111",
    WebkitBoxShadow: "7px 18px 50px #111",
    zIndex: "10",
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    textAlign: "center",
    marginTop: "200px",
    marginRight: "10px",
    marginLeft: "10px",
    position: "relative",
    maxWidth: "1150px",
    width: "100%",
  },
  title: {
    fontSize: "2.5rem",
    color: "#f0f0f0",
    marginBottom: "20px",
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    color: "#9a9a9a",
    margin: "10px",
    width: "340px",
  },
  text3: {
    color: "#9a9a9a",
    margin: "10px",
    width: "200px",
    fontSize: "0.8rem",
    textAlign: "center",
  },
  part: {
    textAlign: "center",
  },
  sha: {
    textShadow:
      "0px 4px 3px rgba(0,0,0,0.1),0px 4px 3px rgba(0,0,0,0.1),0px 4px 3px rgba(0,0,0,0.1)",
  },
  steps: {
    fontSize: "1.1rem",
    color: "#ffffff",
  },
  stepsmini: {
    fontSize: "1rem",
    color: "#A099FF",
  },

  circlebutton: {
    borderRadius: "50%",
    marginRight: "15px",
  },
  text2: {
    color: "#9a9a9a",
    fontSize: "0.7rem",
  },
  titleBox: {
    marginTop: "5px",
    marginBottom: "20px",
  },
  subTitle: {
    fontSize: "1.5rem",
    color: "#ffffff",
    textAlign: "start",
  },
  listBox: {
    display: "flex",
    flexWrap: "wrap",
    color: "#9a9a9a",
  },
  stepsminiList: {
    color: "#ccc",
    fontSize: "0.9rem",
    textAlign: "start",
    paddingTop: "3px",
  },
  list: {
    paddingLeft: "13px",
  },
  projectList: {
    color: "#9a9a9a",
    paddingLeft: "4px",
  },
});
export default Projects;
