import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Tag from "./core/Tag";

function ProjectItem(props) {
  const classes = useStyles();
  return (
    <li style={{ marginBottom: "10px" }}>
      <Grid container direction="row" justifyContent="flex-start">
        <a href={props.link} target="_blank" rel="noreferrer">
          <div className={classes.steps} style={{ marginRight: "10px" }}>
            {props.title}
          </div>
        </a>
        <div className={classes.stepsminiList}>{props.description}</div>
      </Grid>
      {props.techStack && (
        <div className={classes.listBox}>
          Tech Stack:
          {props.techStack.length > 0 &&
            props.techStack.map((tag, index) => (
              <Tag key={index} size="sm">
                {tag}
              </Tag>
            ))}
        </div>
      )}
    </li>
  );
}
const useStyles = makeStyles({
  steps: {
    fontSize: "1.1rem",
    color: "#ffffff",
  },
  stepsmini: {
    fontSize: "1rem",
    color: "#A099FF",
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

export default ProjectItem;
