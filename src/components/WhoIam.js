import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Steps } from 'antd';
import Chip from '@material-ui/core/Chip';
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
    width: '320px',
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
});

const WhoIam = () => {
  const classes = useStyles();
  return (
    <div className='will-fadeIn'>
      <Card className={classes.root}>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>About me</Typography>
          <Grid
            container
            direction='row'
            justify='space-around'
            alignItems='center'
          >
            <Grid
              container
              direction='row'
              sm={4}
              justify='space-around'
              alignItems='center'
            >
              <Steps progressDot direction='vertical' current={4}>
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
                    <div className={classes.steps}>Computer Engineering</div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Gazi University - September 2017 – BCompSc 2022
                    </div>
                  }
                />
                <Step
                  title={
                    <div className={classes.steps}>Web Developer Bootcamp</div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Self-taught - June 2020 – August 2020
                    </div>
                  }
                />
                <Step
                  title={<div className={classes.steps}>MERN Bootcamp</div>}
                  description={
                    <div className={classes.stepsmini}>
                      Self-taught - August 2020 – November 2020
                    </div>
                  }
                />
              </Steps>
            </Grid>
            <Grid
              container
              direction='row'
              sm={4}
              justify='space-around'
              alignItems='center'
            >
              <h5 className={classes.text}>
                Currently junior (3/4) student in Computer Engineering
                bachelor's degree program at Gazi University Faculty of
                Engineering. Willing to improve my career on software
                development as full stack developer and entrepreneur. Always
                open to learn
                <hr style={{ border: '1px solid #555' }}></hr>I had experience
                on MERN (Mongo-MySQL, Express, React, Node) project based real
                life products. Familiar about RESTful Routing, REST API.
                Passionate about Javascript and Clean Code. Currently looking
                for a new experiences.
              </h5>
            </Grid>
            <Grid
              container
              direction='row'
              sm={4}
              justify='space-around'
              alignItems='center'
            >
              <h5 className={classes.text}>
                <Chip
                  icon={
                    <i
                      className='fa fa-trophy'
                      style={{ fontSize: '0.8rem', color: '#61DAFB' }}
                      aria-hidden='true'
                    ></i>
                  }
                  label={<div className={classes.stepsmini}>Persistence</div>}
                  clickable
                  color='primary'
                  variant='outlined'
                />
                <br />I believe persistence and world is a playground
                <br />
                <hr style={{ marginBottom: '25px', border: '0px' }}></hr>
                <Chip
                  icon={
                    <i
                      className='fa fa-heartbeat'
                      style={{ fontSize: '0.8rem', color: '#61DAFB' }}
                      aria-hidden='true'
                    ></i>
                  }
                  label={<div className={classes.stepsmini}>Courage I had</div>}
                  clickable
                  color='primary'
                  variant='outlined'
                />
                <br /> To take a sinking ship and try to make it float. Other
                words stress management
                <br />
                <hr style={{ marginBottom: '25px', border: '0px' }}></hr>
                <Chip
                  icon={
                    <i
                      className='fa fa-heartbeat'
                      style={{ fontSize: '0.8rem', color: '#61DAFB' }}
                      aria-hidden='true'
                    ></i>
                  }
                  label={<div className={classes.stepsmini}>Entrepreneur</div>}
                  clickable
                  color='primary'
                  variant='outlined'
                />
                <br /> I knock every single door
              </h5>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhoIam;
