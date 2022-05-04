import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Steps } from 'antd';
import Chip from '@material-ui/core/Chip';
import js from './styles/js.png';
import node from './styles/node.svg';
import react from './styles/logo512.png';
import express from './styles/express.png';
import java from './styles/java.png';
import cpp from './styles/cpp.png';
import py from './styles/py.png';
import db1 from './styles/mysql.png';
import db2 from './styles/postgre.png';
import db3 from './styles/MongoDB.png';
const { Step } = Steps;

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
    width: '340px',
  },
  text3: {
    color: '#9a9a9a',
    margin: '10px',
    width: '200px',
    fontSize: '0.8rem',
    textAlign: 'center',
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
    fontSize: '0.8rem',
    color: '#61DAFB',
  },
  circlebutton: {
    borderRadius: '50%',
    marginRight: '15px',
  },
  text2: {
    color: '#9a9a9a',
    fontSize: '0.7rem',
  },
});

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
                Currently, I am a senior year student in B.Sc.Computer
                Engineering at Gazi University. I seek to improve my career in
                every aspect of software development. I am always open to
                learning new technologies, tools, and experiences.
                <br />
                <br />
                <Chip
                  icon={
                    <i
                      className="fa fa-trophy"
                      style={{
                        fontSize: '0.8rem',
                        color: '#61DAFB',
                      }}
                      aria-hidden="true"
                    ></i>
                  }
                  label={<div className={classes.stepsmini}>Persistence</div>}
                  clickable
                  color="primary"
                  variant="outlined"
                />
                <br />
                I believe mainly persistence matters in the life and the world
                is a playground for those who are persistent
                <br />
                <Chip
                  icon={
                    <i
                      className="fa fa-users"
                      style={{ fontSize: '0.8rem', color: '#61DAFB' }}
                      aria-hidden="true"
                    ></i>
                  }
                  label={<div className={classes.stepsmini}>Team Member</div>}
                  clickable
                  color="primary"
                  variant="outlined"
                />
                <br /> I think working with a team is best and if the team needs
                some sparks I can take the responsibility as a servant leader.
                <br />
                <Chip
                  icon={
                    <i
                      className="fa fa-universal-access"
                      style={{ fontSize: '0.8rem', color: '#61DAFB' }}
                      aria-hidden="true"
                    ></i>
                  }
                  label={<div className={classes.stepsmini}>Entrepreneur</div>}
                  clickable
                  color="primary"
                  variant="outlined"
                />
                <br /> I knock every single door
              </h5>
            </Grid>

            <Grid
              container
              direction="row"
              sm={2}
              justifyContent="space-around"
              alignItems="center"
            >
              <div className={classes.text}>Recently working on</div>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <div className={classes.stepsmini} style={{ margin: '10px' }}>
                  <img
                    src={js}
                    height="50px"
                    width="50px"
                    className={classes.circlebutton}
                    alt="js"
                  />
                  Javascript{' '}
                </div>
                <div className={classes.stepsmini} style={{ margin: '10px' }}>
                  <img
                    src={node}
                    height="50px"
                    width="50px"
                    alt="nodejs"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#7a7a7a', paddingTop: '6px' }}
                  />
                  Nodejs{' '}
                </div>
                <div className={classes.stepsmini} style={{ margin: '10px' }}>
                  <img
                    src={react}
                    height="50px"
                    width="50px"
                    alt="reactjs"
                    className={classes.circlebutton}
                  />
                  Reactjs{' '}
                </div>
                <div className={classes.stepsmini} style={{ margin: '10px' }}>
                  <img
                    src={express}
                    height="50px"
                    width="50px"
                    alt="expressjs"
                    className={classes.circlebutton}
                  />
                  Expressjs{' '}
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
                <div className={classes.text2} style={{ margin: '10px' }}>
                  <img
                    src={java}
                    height="40px"
                    width="40px"
                    alt="java"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
                  />
                  Java - OOP applications{' '}
                </div>
                <div className={classes.text2} style={{ margin: '10px' }}>
                  <img
                    src={cpp}
                    height="40px"
                    width="40px"
                    alt="cpp"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
                  />
                  C/C++ D.Structures and
                  <br /> Algorithms based{' '}
                </div>
                <div className={classes.text2} style={{ margin: '10px' }}>
                  <img
                    src={py}
                    height="40px"
                    width="40px"
                    alt="py"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
                  />
                  Python-DataSceince project
                  <br /> and Selenium Bots{' '}
                </div>
                <div className={classes.text3}>
                  Databases
                  <br />
                  <img
                    src={db1}
                    height="50px"
                    width="50px"
                    alt="db1"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
                  />
                  <img
                    src={db2}
                    height="50px"
                    width="50px"
                    alt="db2"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
                  />
                  <img
                    src={db3}
                    height="50px"
                    width="50px"
                    alt="db3"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
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

export default WhoIam;
