import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import '../public/styles/projects.css';
import { ImageList } from '@material-ui/core';
import { Spin } from 'antd';
import { projectsData } from './projectsData.js';

const Projects = () => {
  const classes = useStyles();
  return (
    <div className="will-fadeIn vertical">
      <Card className={classes.root}>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Projects</Typography>

          <div className={classes.rootCard}>
            {projectsData ? (
              <ImageList className={classes.gridList} cols={2.5}>
                {projectsData.map((project) => (
                  <Card key={project.img} className={classes.root3}>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography
                          className={classes.stepsmini}
                          component="h5"
                          variant="h5"
                        >
                          {project.title}
                        </Typography>
                        <hr style={{ border: '1px solid #555' }}></hr>
                        <Typography variant="subtitle1" color="textSecondary">
                          <div className={classes.text2}>{project.desc}</div>
                        </Typography>
                        <a href={project.link}>Go to {project.title}📍</a>
                      </CardContent>
                    </div>
                    <CardMedia
                      className={classes.cover}
                      image={project.img}
                      title="Live from space album cover"
                    />
                  </Card>
                ))}
              </ImageList>
            ) : (
              <div className="example_spin_antd">
                <Spin />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: '400px',
    boxShadow: '7px 18px 50px #111',
    WebkitBoxShadow: '7px 18px 50px #111',
    zIndex: '10',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginRight: '40px',
    marginLeft: '40px',
    marginTop: '200px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#f0f0f0',
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    color: '#9a9a9a',
    margin: '10px',
    width: '320px',
  },
  text2: {
    color: '#f0f0f0',
    fontSize: '12px',
  },
  part: {
    textAlign: 'center',
  },
  sha: {
    textShadow:
      '0px 4px 3px rgba(0,0,0,0.1),0px 4px 3px rgba(0,0,0,0.1),0px 4px 3px rgba(0,0,0,0.1)',
  },
  steps: {
    fontSize: '1rem',
    color: '#ffffff',
  },
  stepsmini: {
    fontSize: '1.1rem',
    color: '#61DAFB',
  },
  rootCard: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  root3: {
    display: 'flex',
    minWidth: '300px',
    margin: '25px',
    backgroundColor: '#4a4a4a',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: '200px',
  },
  cover: {
    width: 100,
  },
});

export default Projects;
