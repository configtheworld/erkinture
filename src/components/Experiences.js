import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Steps } from 'antd';
import './styles/languages.css';
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
import start4ups from './styles/start.png';
import ecc from './styles/ecc.jpeg';
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
    color: '#9a9a9a',
    fontSize: '0.7rem',
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
});

const Experiences = () => {
  const classes = useStyles();
  return (
    <div className="will-fadeIn">
      <Card className={classes.root}>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Experiences</Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
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
                justifyContent="center"
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
                    style={{ backgroundColor: '#2e2e2e', padding: '2px' }}
                  />
                  C/C++ D.Structures and Algorithms based{' '}
                </div>
                <div className={classes.text2} style={{ margin: '10px' }}>
                  <img
                    src={py}
                    height="40px"
                    width="40px"
                    alt="py"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e', padding: '2px' }}
                  />
                  Python-DataSceince project and Selenium Bots{' '}
                </div>
                <div className={classes.text2} style={{ marginLeft: '40px' }}>
                  <div style={{ marginLeft: '-12px' }}>Databases</div>
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
                    style={{ marginLeft: '-25px', backgroundColor: '#2e2e2e' }}
                  />
                  <img
                    src={db3}
                    height="50px"
                    width="50px"
                    alt="db3"
                    className={classes.circlebutton}
                    style={{ marginLeft: '-25px', backgroundColor: '#2e2e2e' }}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              sm={4}
              justifyContent="space-around"
              alignItems="center"
            >
              <h5 className={classes.text}>
                <hr style={{ border: '1px solid #555' }}></hr>
                <span className={classes.stepsmini}>Entrepreneur Project</span>
                <br />
                <div style={{ textAlign: 'start', marginLeft: '22px' }}>
                  <img
                    src={start4ups}
                    height="50px"
                    width="50px"
                    alt="start4ups"
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
                  />{' '}
                  Start4ups
                </div>
                <br />
                Platform which brings Investors and ideas together, startup
                network and We have our own startups
                <hr style={{ border: '1px solid #555' }}></hr>
                <span className={classes.stepsmini}>Social Project</span>
                <br />
                <img
                  src={ecc}
                  height="50px"
                  width="50px"
                  alt="ECC"
                  className={classes.circlebutton}
                  style={{ backgroundColor: '#2e2e2e' }}
                />{' '}
                Leader of English Conversation Club
                <br />
                Gazi University Engineering Faculty - Since 2018
              </h5>
            </Grid>
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
                    <div className={classes.steps}>Start4ups - Founder</div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Startup Bootster Platform - since May 2019 - Side Project
                    </div>
                  }
                />
                <Step
                  title={
                    <div className={classes.steps}>
                      Solwider. - Frontend Web Developer
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Ankara, Turkey - Jan 2021 - June 2021
                    </div>
                  }
                />
                <Step
                  title={
                    <div className={classes.steps}>
                      SolaVieve - Full Stack Web Developer Intern
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Heidelberg, Germany (remote) - June 2021 - September 2021
                    </div>
                  }
                />

                <Step
                  title={
                    <div className={classes.steps}>
                      Jotform - Web Development Intern
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Ankara, Turkey - July 2021 - September 2021
                    </div>
                  }
                />
                <Step
                  title={
                    <div className={classes.steps}>
                      Integrio - Full Stack Web Developer
                    </div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Istanbul, Turkey - June 2021 - Present
                    </div>
                  }
                />
              </Steps>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experiences;
