import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const WhoIam = () => {
  const classes = useStyles();
  return (
    <div className="central">
      <Card className={classes.root}>
        <div className="card-header-line"></div>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Summary</Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <h3 className={classes.text}>
                Empathetic Full-stack Developer with 2+ years of software
                development experience in global agile startups. <br />
                <br />
                Proven track record of delivering user-centric reliable web
                applications with best practices. <br />
                <br />
                Proficient in Javascript, Java, PHP, and Python programming
                languages. <br />
                <br />
                Experienced in designing, developing, and testing web
                applications with ReactJS and VueJS. <br />
                <br />
                Skilled in generating RESTful APIs with SQL/NoSQL databases,
                providing documentation, and troubleshooting using Express and
                Spring. <br />
                <br />
                Committed to personal growth and collaborative team
                productivity.
              </h3>
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
    marginRight: "10px",
    marginLeft: "10px",
    position: "relative",
    maxWidth: "1150px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#f0f0f0",
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    color: "#f0f0f0",
    margin: "10px",
    width: "auto",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "2rem",
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
