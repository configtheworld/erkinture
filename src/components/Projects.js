import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import image1 from './styles/pro1.png';
import image2 from './styles/simit3.png';
import waste from './styles/wastefind.png';
import image4 from './styles/todo.png';
import image5 from './styles/ybt.png';
import image6 from './styles/mars.png';
import github from './styles/github.png';
import npm from './styles/npm.png';
import crypto from './styles/crypto.png';
import cattery from './styles/cattery.png';

import './styles/projects.css';
import { ImageList } from '@material-ui/core';
import { Spin } from 'antd';
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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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

const data = [
  {
    img: waste,
    title: 'WasteFind',
    desc: 'WasteFind encourage recycling and turn it into a habit for everyone who wants to recycle but doesnt know-how.',
    link: 'https://wastefindio.netlify.app/',
  },
  {
    img: crypto,
    title: 'unreal-crypto-wallet-api',
    desc: 'This is Public API interface for Crypto Currencies and Fake Wallet Account for Tracking The Stock Market.',
    link: 'https://unreal-crypto-wallet-api.herokuapp.com/',
  },

  {
    img: npm,
    title: 'Indexed-object-to-array',
    desc: 'Which is npm package for converting indexed keys objects into an array of objects. ',
    link: 'https://www.npmjs.com/package/indexed-object-to-array',
  },
  {
    img: cattery,
    title: 'GrandDesign Cattery',
    desc: "Website of the world's largest domestic cats.",
    link: 'http://www.mainecoontr.com/',
  },
  {
    img: image1,
    title: 'Configtheworld',
    desc: 'This is the platform which you can find news, articles and tutorials about technology and lifestyle.',
    link: 'https://configtheworld.herokuapp.com/',
  },
  {
    img: image2,
    title: 'Simitlock',
    desc: 'Save your password with dual AES encryption 🔐, Generate strong passwords with various ways 💪',
    link: 'https://simitlock.herokuapp.com/',
  },
  {
    img: image4,
    title: 'Toodoose',
    desc: 'Not a big deal. Just a to-do list for groups and multiple users',
    link: 'https://toodoose.herokuapp.com/',
  },
  {
    img: '',
    title: 'DataScience Project',
    desc: 'Observations Classifications and Multiple Prediction for Heart Failure Dataset',
    link: '#',
  },
  {
    img: image5,
    title: 'ybt parking',
    desc: 'Araç Hizmet Çözümleri',
    link: 'http://www.ybtparking.com/',
  },
  {
    img: 'https://seeklogo.com/images/P/php-logo-ADE513E748-seeklogo.com.png',
    title: 'Student Information System',
    desc: 'Secure SIS with Postgrsql and PHP',
    link: 'https://github.com/configtheworld/Student-Information-System-Php-Postgresql',
  },
  {
    img: 'http://www.serdaronder.com/wp-content/uploads/2020/03/microsoft-csharp-dotnet.jpg',
    title: 'HTTU',
    desc: 'Hasta Tespit Takip Uygulaması',
    link: 'https://github.com/configtheworld/ProjeHTTU',
  },
  {
    img: image6,
    title: 'Mars Real Estate',
    desc: 'C console app for mars lands',
    link: 'https://github.com/configtheworld/mars',
  },
  {
    img: github,
    title: 'More',
    desc: 'More Projects in My Github',
    link: 'https://github.com/configtheworld/',
  },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <div className="will-fadeIn vertical">
      <Card className={classes.root}>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Personal Projects</Typography>

          <div className={classes.rootCard}>
            {data ? (
              <ImageList className={classes.gridList} cols={2.5}>
                {data.map((project) => (
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

export default Projects;
