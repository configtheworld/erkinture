import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Steps } from "antd";
import Tag from "./core/Tag";
const { Step } = Steps;
const Experiences = () => {
  const classes = useStyles();

  const ExperinceSteps = () => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sm={9}
      >
        <Steps progressDot direction="vertical" current={10}>
          <Step
            title={
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className={classes.steps}>
                  Front-End Working Student Developer
                </div>
                <a
                  href="https://www.capo.build/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={classes.stepsmini}>
                    @ CAPO Digital Solutions GmbH - Passau, Germany
                  </div>
                </a>
              </Grid>
            }
            description={
              <div className={classes.stepsmini}>
                <div className={classes.stepsminiList}>
                  <ul className={classes.list}>
                    <li>
                      Implemented project planning, BIM viewer, AI chat, and
                      live messaging to Vue application as a member of a
                      10-person startup.
                    </li>
                    <li>
                      Built a company homepage with localization and SEO
                      optimization, achieving an 80% increase in search engine
                      rankings.
                    </li>
                    <li>
                      <div className={classes.listBox}>
                        Tech Stack:
                        <Tag size="sm">Next.js</Tag>
                        <Tag size="sm">Vue.js</Tag>
                        <Tag size="sm">Typescript</Tag>
                        <Tag size="sm">Pinia</Tag>
                        <Tag size="sm">TailwindCSS</Tag>
                        <Tag size="sm">ASP.Net</Tag>
                        <Tag size="sm">i18next</Tag>
                      </div>
                    </li>
                  </ul>
                </div>
                Dec 2022 - Sep 2023
              </div>
            }
          />
          <Step
            title={
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className={classes.steps}>Front-End Developer</div>
                <a href="https://integrio.io/" target="_blank" rel="noreferrer">
                  <div className={classes.stepsmini}>
                    @ Integrio - Remote, Turkey
                  </div>
                </a>
              </Grid>
            }
            description={
              <div className={classes.stepsmini}>
                <div className={classes.stepsminiList}>
                  <ul className={classes.list}>
                    <li>
                      Contributed over 15,000 lines of code to a web portal
                      application that provides 70% operational efficiency
                      between pharmaceutical companies and pharma- cies in
                      Turkey. Over 14,000 pharmacies actively use the Kemi
                      Portal.
                    </li>
                    <li>
                      Built a company homepage with localization and SEO
                      optimization, achieving an 80% increase in search engine
                      rankings.
                    </li>
                    <li>
                      <div className={classes.listBox}>
                        Tech Stack: <Tag size="sm">Typescript</Tag>
                        <Tag size="sm">React JS</Tag>
                        <Tag size="sm">Docker</Tag>
                        <Tag size="sm">Ant Design</Tag>
                        <Tag size="sm">Saas</Tag>
                        <Tag size="sm">Storybook</Tag>
                        <Tag size="sm">Jest</Tag>
                        <Tag size="sm">Redux</Tag>
                      </div>
                    </li>
                  </ul>
                </div>
                Sep 2021 - Sep 2022
              </div>
            }
          />
          <Step
            title={
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className={classes.steps}>Web Development Intern</div>
                <a
                  href="https://www.jotform.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={classes.stepsmini}>
                    @ Jotform - Ankara, Turkey
                  </div>
                </a>
              </Grid>
            }
            description={
              <div className={classes.stepsmini}>
                <div className={classes.stepsminiList}>
                  <ul className={classes.list}>
                    <li>
                      Produced Jotform form translator Web application and API
                      services as a part of a 7-person team.
                    </li>
                    <li>
                      Enabled form-translation to desired language via this
                      internship project.
                    </li>
                    <li>
                      <div className={classes.listBox}>
                        Tech Stack: <Tag size="sm">PHP</Tag>
                        <Tag size="sm">MySQL</Tag>
                        <Tag size="sm">React JS</Tag>
                        <Tag size="sm">CSS</Tag>
                        <Tag size="sm">Jotform Public API</Tag>
                        <Tag size="sm">Google Translation API</Tag>
                      </div>
                    </li>
                  </ul>
                </div>
                Jul 2021 - Sep 2021
              </div>
            }
          />
          <Step
            title={
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className={classes.steps}>
                  Full Stack Web Developer Intern
                </div>
                <a
                  href="https://holisticly.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={classes.stepsmini}>
                    @ Solavieve Technology GmbH - Heidelberg, Germany
                  </div>
                </a>
              </Grid>
            }
            description={
              <div className={classes.stepsmini}>
                <div className={classes.stepsminiList}>
                  <ul className={classes.list}>
                    <li>
                      Integrated a chatbot. Optimized front-end, back-end apps,
                      and databases
                    </li>
                    <li>
                      Achieved a 28% increase in conversions on A/B tests by
                      merging chatbot.
                    </li>
                    <li>
                      <div className={classes.listBox}>
                        Tech Stack: <Tag size="sm">React JS</Tag>
                        <Tag size="sm">Express.js</Tag>
                        <Tag size="sm">PostgreSQL</Tag>
                        <Tag size="sm">Saas</Tag>
                        <Tag size="sm">Bootstrap</Tag>
                        <Tag size="sm">Material UI</Tag>
                      </div>
                    </li>
                  </ul>
                </div>
                Jun 2021 - Sep 2021
              </div>
            }
          />
          <Step
            title={
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className={classes.steps}>
                  Working Student Front-End Developer
                </div>
                <a
                  href="https://www.linkedin.com/company/solwidersoftware/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={classes.stepsmini}>
                    @ Solwider - Ankara, Turkey
                  </div>
                </a>
              </Grid>
            }
            description={
              <div className={classes.stepsmini}>
                <div className={classes.stepsminiList}>
                  <ul className={classes.list}>
                    <li>
                      Integrated a food delivery routing Web dashboard to show
                      the shortest path.
                    </li>
                    <li>
                      <div className={classes.listBox}>
                        Tech Stack: <Tag size="sm">React JS</Tag>
                        <Tag size="sm">Redis</Tag>
                        <Tag size="sm">Redux</Tag>
                        <Tag size="sm">Google Maps API</Tag>
                        <Tag size="sm">Material UI</Tag>
                      </div>
                    </li>
                  </ul>
                </div>
                Jan 2021 - Jun 2021
              </div>
            }
          />
        </Steps>
      </Grid>
    );
  };

  return (
    <div className="central">
      <Card className={classes.root}>
        <div className="card-header-line"></div>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Experiences</Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <ExperinceSteps />
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
  },
  stepsminiList: {
    color: "#ccc",
    fontSize: "0.9rem",
    textAlign: "start",
  },
  list: {
    paddingLeft: "13px",
  },
});

export default Experiences;
