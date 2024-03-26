import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Steps } from "antd";
const { Step } = Steps;

const WhoIam = () => {
  const classes = useStyles();
  return (
    <div className="central">
      <Card className={classes.root}>
        <div className="card-header-line"></div>

        <CardContent className={classes.part}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Grid container direction="row" item sm={5} alignItems="flex-start">
              <Typography className={classes.title}>Education </Typography>
              <Steps progressDot direction="vertical" current={3}>
                <Step
                  title={
                    <div className={classes.steps}>
                      Master of Science (M.Sc.) in Computer Science
                      <br />
                      University of Passau
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      October 2022 – Nov 2024
                    </div>
                  }
                />
                <Step
                  title={
                    <div className={classes.steps}>
                      Bachelor (B.Sc.) in Computer Engineering
                      <br />
                      Gazi University
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      September 2017 – June 2022
                    </div>
                  }
                />
              </Steps>
            </Grid>

            <Grid
              container
              direction="row"
              sm={4}
              item
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography className={classes.title}>Soft Skills </Typography>
              <div>
                <h3 className={classes.subTitle}>Languages</h3>
                <div className={classes.listBox}>
                  <div className="tag">
                    <div className="tag-dot"></div>English C1 Proficiency -
                    IELTS
                  </div>
                  <div className="tag">
                    <div className="tag-dot"></div>German B1 Proficiency - Uni
                    Passau
                  </div>
                  <div className="tag">
                    <div className="tag-dot"></div>Turkish C2 Proficiency -
                    Native Lang
                  </div>
                </div>
              </div>
              <div>
                <h3 className={classes.subTitle}>Familiar Methodologies</h3>
                <div className={classes.listBox}>
                  <div className="tag">
                    <div className="tag-dot"></div>Agile
                  </div>
                  <div className="tag">
                    <div className="tag-dot"></div>Scrum
                  </div>
                  <div className="tag">
                    <div className="tag-dot"></div>Sprint
                  </div>
                  <div className="tag">
                    <div className="tag-dot"></div>Test-driven development
                  </div>
                  <div className="tag">
                    <div className="tag-dot"></div>Kanban
                  </div>
                </div>
              </div>
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
});

export default WhoIam;
