import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Steps } from 'antd';
import './styles/languages.css';
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
    <div className='will-fadeIn'>
      <Card className={classes.root}>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Experiences</Typography>
          <Grid
            container
            direction='row'
            justify='space-around'
            alignItems='center'
          >
            <Grid
              container
              direction='row'
              sm={2}
              justify='space-around'
              alignItems='center'
            >
              <div className={classes.text}>Recently working on</div>
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='flex-start'
              >
                <div className={classes.stepsmini} style={{ margin: '10px' }}>
                  <img
                    src='/js.png'
                    height='50px'
                    width='50px'
                    className={classes.circlebutton}
                    alt='js'
                  />
                  Javascript{' '}
                </div>
                <div className={classes.stepsmini} style={{ margin: '10px' }}>
                  <img
                    src='/node.svg'
                    height='50px'
                    width='50px'
                    alt='nodejs'
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#7a7a7a', paddingTop: '6px' }}
                  />
                  Nodejs{' '}
                </div>
                <div className={classes.stepsmini} style={{ margin: '10px' }}>
                  <img
                    src='/logo512.png'
                    height='50px'
                    width='50px'
                    alt='reactjs'
                    className={classes.circlebutton}
                  />
                  Reactjs{' '}
                </div>
                <div className={classes.stepsmini} style={{ margin: '10px' }}>
                  <img
                    src='/express.png'
                    height='50px'
                    width='50px'
                    alt='expressjs'
                    className={classes.circlebutton}
                  />
                  Expressjs{' '}
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              direction='row'
              sm={2}
              justify='space-around'
              alignItems='center'
            >
              <div className={classes.text}>Languages</div>
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='flex-start'
              >
                <div className={classes.text2} style={{ margin: '10px' }}>
                  <img
                    src='/java.png'
                    height='40px'
                    width='40px'
                    alt='java'
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
                  />
                  Java - OOP applications{' '}
                </div>
                <div className={classes.text2} style={{ margin: '10px' }}>
                  <img
                    src='/cpp.png'
                    height='40px'
                    width='40px'
                    alt='cpp'
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e', padding: '2px' }}
                  />
                  C/C++ D.Structures and Algorithms based{' '}
                </div>
                <div className={classes.text2} style={{ margin: '10px' }}>
                  <img
                    src='/py.png'
                    height='40px'
                    width='40px'
                    alt='py'
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e', padding: '2px' }}
                  />
                  Python-DataSceince project and Selenium Bots{' '}
                </div>
                <div className={classes.text2} style={{ marginLeft: '40px' }}>
                  <div style={{ marginLeft: '-12px' }}>Databases</div>
                  <img
                    src='/mysql.png'
                    height='50px'
                    width='50px'
                    alt='db1'
                    className={classes.circlebutton}
                    style={{ backgroundColor: '#2e2e2e' }}
                  />
                  <img
                    src='/postgre.png'
                    height='50px'
                    width='50px'
                    alt='db2'
                    className={classes.circlebutton}
                    style={{ marginLeft: '-25px', backgroundColor: '#2e2e2e' }}
                  />
                  <img
                    src='/MongoDB.png'
                    height='50px'
                    width='50px'
                    alt='db3'
                    className={classes.circlebutton}
                    style={{ marginLeft: '-25px', backgroundColor: '#2e2e2e' }}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              direction='row'
              sm={4}
              justify='space-around'
              alignItems='center'
            >
              <h5 className={classes.text}>
                <hr style={{ border: '1px solid #555' }}></hr>
                <span className={classes.stepsmini}>Entrepreneur Project</span>
                <br />
                <div style={{ textAlign: 'start', marginLeft: '22px' }}>
                  <img
                    src='/start.png'
                    height='50px'
                    width='50px'
                    alt='start4ups'
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
                  src='/ecc.jpeg'
                  height='50px'
                  width='50px'
                  alt='ECC'
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
              direction='row'
              sm={4}
              justify='space-around'
              alignItems='center'
            >
              <Steps progressDot direction='vertical' current={3}>
                <Step
                  title={
                    <div className={classes.steps}>Start4ups - Founder</div>
                  }
                  description={
                    <div className={classes.stepsmini}>
                      Startup Bootster Platform - May 2019 - Present
                    </div>
                  }
                />
                <Step
                  title={<div className={classes.steps}>Solwider.</div>}
                  description={
                    <div className={classes.stepsmini}>
                      Full Stack Web Developer - Jan 2021 - Present
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
