import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Steps } from "antd";
import react from "../public/img/logo512.png";
const { Step } = Steps;

const WhoIam = () => {
  const classes = useStyles();
  return (
    <div className="will-fadeIn">
      <Card className={classes.root}>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>About me</Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              sm={4}
              justifyContent="space-around"
              alignItems="center"
            >
              <Steps progressDot direction="vertical" current={4}>
                <Step
                  title={
                    <div className={classes.steps}>
                      Gazi University - English Preparatory School
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      September 2017 – June 2018
                    </div>
                  }
                />
                <Step
                  title={
                    <div className={classes.steps}>
                      Embassy English Brighton
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Language School - April 2018 – August 2018
                    </div>
                  }
                />
                <Step
                  title={
                    <div className={classes.steps}>
                      Gazi University - B.Sc. Civil Engineering
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      September 2018 – June 2019 (changed major to computer
                      engineering)
                    </div>
                  }
                />
                <Step
                  title={
                    <div className={classes.steps}>
                      Gazi University - B.Sc. Computer Engineering
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      September 2019 – June 2022
                    </div>
                  }
                />
              </Steps>
            </Grid>
            <Grid
              container
              direction="row"
              sm={4}
              justifyContent="space-around"
              alignItems="center"
            >
              <h5 className={classes.text}>
                Empathetic Full-stack Developer with 2+ years of software
                development experience in global agile startups. Proven track
                record of delivering user-centric reliable web applications with
                best practices. Proficient in Javascript, Java, PHP, and Python
                programming languages. Experienced in designing, developing, and
                testing web applications with ReactJS and VueJS. Skilled in
                generating RESTful APIs with SQL/NoSQL databases, providing
                documentation, and troubleshooting using Express and Spring.
                Committed to personal growth and collaborative team
                productivity.
              </h5>
            </Grid>

            <Grid
              container
              direction="row"
              sm={2}
              justifyContent="space-around"
              alignItems="center"
            >
              <div className={classes.text}>Recently working with</div>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <div className={classes.stepsmini} style={{ margin: "10px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/225px-Unofficial_JavaScript_logo_2.svg.png"
                    height="50px"
                    width="50px"
                    className={classes.circlebutton}
                    alt="js"
                  />
                  Javascript{" "}
                </div>
                <div className={classes.stepsmini} style={{ margin: "10px" }}>
                  <img
                    src="https://nodejs.org/static/images/logo.svg"
                    height="50px"
                    width="50px"
                    alt="nodejs"
                    className={classes.circlebutton}
                  />
                  Nodejs{" "}
                </div>
                <div className={classes.stepsmini} style={{ margin: "10px" }}>
                  <img
                    src={react}
                    height="50px"
                    width="50px"
                    alt="reactjs"
                    className={classes.circlebutton}
                  />
                  Reactjs{" "}
                </div>
                <div className={classes.stepsmini} style={{ margin: "10px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/121px-Expressjs.png"
                    height="50px"
                    width="50px"
                    alt="expressjs"
                    className={classes.circlebutton}
                    style={{ objectFit: "contain" }}
                  />
                  Expressjs{" "}
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              sm={2}
              justifyContent="space-around"
              alignItems="center"
            >
              <div className={classes.text}>Languages</div>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <div className={classes.text2} style={{ margin: "10px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png"
                    height="40px"
                    width="40px"
                    alt="java"
                    className={classes.circlebutton}
                    style={{ backgroundColor: "#2e2e2e", objectFit: "contain" }}
                  />
                  Java - OOP applications, Scalable API projects
                </div>
                <div className={classes.text2} style={{ margin: "10px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/120px-C_Sharp_wordmark.svg.png"
                    height="40px"
                    width="40px"
                    alt="cpp"
                    className={classes.circlebutton}
                    style={{ backgroundColor: "#2e2e2e" }}
                  />
                  C/C++ D.Structures and Algorithms based{" "}
                </div>
                <div className={classes.text2} style={{ margin: "10px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png"
                    height="40px"
                    width="40px"
                    alt="py"
                    className={classes.circlebutton}
                    style={{ backgroundColor: "#2e2e2e" }}
                  />
                  Python- Data Sceince and Image processing projects and also
                  Web Scraping APIs
                </div>
                <div className={classes.text3}>
                  Databases
                  <br />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/100px-MySQL_logo.svg.png"
                    height="50px"
                    width="50px"
                    alt="db1"
                    className={classes.circlebutton}
                    style={{ backgroundColor: "#2e2e2e" }}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/121px-Postgresql_elephant.svg.png"
                    height="50px"
                    width="50px"
                    alt="db2"
                    className={classes.circlebutton}
                    style={{ backgroundColor: "#2e2e2e" }}
                  />
                  <img
                    src="https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1644403814/hevo-learn/springboot_MongoDB_configuration_mongodb.jpg?_i=AA"
                    height="50px"
                    width="50px"
                    alt="db3"
                    className={classes.circlebutton}
                    style={{ backgroundColor: "#555", objectFit: "cover" }}
                  />
                </div>
              </Grid>
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
    backgroundColor: "transparent",
    textAlign: "center",
    marginRight: "40px",
    marginLeft: "40px",
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
    fontSize: "1rem",
    color: "#ffffff",
  },
  stepsmini: {
    fontSize: "0.8rem",
    color: "#61DAFB",
  },
  circlebutton: {
    borderRadius: "50%",
    marginRight: "15px",
  },
  text2: {
    color: "#9a9a9a",
    fontSize: "0.7rem",
  },
});

export default WhoIam;
