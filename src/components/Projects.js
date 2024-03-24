import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Projects = () => {
  const classes = useStyles();
  return (
    <div className="central vertical">
      <Card className={classes.root}>
        <div className="card-header-line"></div>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Projects</Typography>
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
export default Projects;
