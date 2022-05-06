import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Steps } from 'antd';
import waste from './styles/wastefind.png';
import unity from './styles/unity.png';

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

  const ExperinceSteps = () => {
    return (
      <Grid
        container
        direction="row"
        sm={4}
        justifyContent="center"
        alignItems="center"
      >
        <Steps progressDot direction="vertical" current={4}>
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
              <div className={classes.steps}>Integrio - Frontend Developer</div>
            }
            description={
              <div className={classes.stepsmini}>Sep 2021 - Present</div>
            }
          />
        </Steps>
      </Grid>
    );
  };

  const VolunteerWork = () => {
    return (
      <Grid
        container
        direction="row"
        sm={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        <div className={classes.text}>Volunteer Experiences</div>
        <h5 className={classes.text}>
          <br />
          <div style={{ textAlign: 'start', marginLeft: '22px' }}>
            <img
              src={start4ups}
              height="50px"
              width="50px"
              alt="start4ups"
              className={classes.circlebutton}
              style={{ backgroundColor: '#2e2e2e' }}
            />
            <span className={classes.stepsmini}>Entrepreneur Project</span>{' '}
            Start4ups
          </div>
          <br />
          Platform project which brings investors and ideas together, startup
          network
          <hr style={{ border: '1px solid #555' }}></hr>
          <br />
          <img
            src={ecc}
            height="50px"
            width="50px"
            alt="ECC"
            className={classes.circlebutton}
            style={{ backgroundColor: '#2e2e2e' }}
          />
          <span className={classes.stepsmini}>Social Project</span> Leader of
          English Conversation Club
          <br />
          Gazi University Engineering Faculty - Since 2018
        </h5>
      </Grid>
    );
  };

  const FinalProjects = () => {
    return (
      <Grid
        container
        direction="row"
        sm={4}
        justifyContent="space-around"
        alignItems="center"
      >
        <div className={classes.text}>Final Projects</div>
        <h5 className={classes.text}>
          <div style={{ textAlign: 'start', marginLeft: '22px' }}>
            <a
              href="https://wastefindio.netlify.app/"
              style={{ textDecorationColor: 'none' }}
            >
              <img
                src={waste}
                height="50px"
                alt="start4ups"
                className={classes.circlebutton}
              />

              <span className={classes.stepsmini}>WasteFind</span>
            </a>
            {'  Final Project I'}
          </div>
          <br />
          WasteFind provides solutions for society and material collectors who
          want to recycle their waste with the help of Image processing and use
          the mapping/routing features for recycling centers in their living
          areas easily at once by earning coins. Our project aims to encourage
          recycling and turn it into a habit for everyone who wants to
          contribute to natural recycling but doesn't know-how.
          <hr style={{ border: '1px solid #555' }}></hr>
          <br />
          <div style={{ textAlign: 'start', marginLeft: '22px' }}>
            <img
              src={unity}
              height="50px"
              width="50px"
              alt="ECC"
              className={classes.circlebutton}
              style={{ backgroundColor: '#2e2e2e' }}
            />
            <span className={classes.stepsmini}>NFT Auction Metaverse</span>
            {' Final Project II'}
          </div>
          <br />
          In order to observe and experience both simple and combinatorial
          auctions on NFT trade, I am building an interactive 3D game on the
          Unity game engine with crypto wallet authentication, marketplace
          integrations for analyzing with user behaviors.
        </h5>
      </Grid>
    );
  };
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
            <FinalProjects />

            <VolunteerWork />
            <ExperinceSteps />
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experiences;
