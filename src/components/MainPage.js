import { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import WhoIam from './WhoIam';
import Experiences from './Experiences';
import Projects from './Projects';
import configtheworldblog from '../public/img/configtheworldblog.png';
import me from '../public/img/erkin.jpeg';
import github from '../public/img/githubpp.png';
//import ups from '../public/img/logo512.png';
// styles
import '../public/styles/pulseball.css';
import '../public/styles/slide.css';
import Pulse from './Pulse';
import Desc from './Desc';
import Stats from './Stats';
//import stackoverflow from '../public/img/logo512.png';
import ContactForm from './ContactForm';

const MainPage = () => {
  return (
    <Fragment>
      <header className="header-design">
        <div className="listar-map-button">
          <Link href="http://configtheworld.herokuapp.com/">
            <img
              className="imagehover"
              src={configtheworldblog}
              height="90px"
              width="90px"
              alt="start4ups"
              style={{
                borderRadius: '50%',
                position: 'relative',
                marginTop: '100px',
                boxShadow: ' 0 0 0 3px #8c52ff',
                zIndex: '1',
                marginRight: '-8px',
                backgroundColor: '#313131',
              }}
            />
          </Link>
          <Link to="/">
            <img
              className=""
              src={me}
              height="100px"
              width="100px"
              alt="me"
              style={{
                borderRadius: '50%',
                marginTop: '100px',
                position: 'relative',
                boxShadow: ' 0 0 0 3px #50514F',
                zIndex: '2',
                filter: 'grayscale(30%)',
              }}
            />
          </Link>
          <Link href="https://github.com/configtheworld">
            <img
              className="imagehover"
              src={github}
              height="90px"
              width="90px"
              alt="github"
              style={{
                borderRadius: '50%',
                position: 'relative',
                marginTop: '100px',
                boxShadow: ' 0 0 0 3px #30a14e',
                zIndex: '1',
                marginLeft: '-8px',
              }}
            />
          </Link>
        </div>
        <div className="footer-wave" />
      </header>

      <Desc />
      <Pulse />
      <Stats />
      <div className="pset">
        <WhoIam xs={12} />
        <Experiences xs={6} />
        <Projects xs={4} />
        <ContactForm xs={12} />
        {/*<CardCarousel />*/}
        <div className="socialmediabuttons">
          <a
            href="https://www.linkedin.com/in/erkin-berk-t%C3%BCre-76ab60163/"
            className="socialmediabutton"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/201_Linkedin_logo_logos-512.png"
              alt="linkedin"
              height="30px"
              width="30px"
              style={{ opacity: '.6' }}
              className="socialmediabuttonimage"
            />
          </a>
          <a
            href="https://github.com/configtheworld"
            className="socialmediabutton"
          >
            <img
              src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
              alt="github"
              height="30px"
              width="30px"
              style={{ opacity: '.6' }}
              className="socialmediabuttonimage"
            />
          </a>

          <a
            href="https://gitlab.com/users/configtheworld/"
            className="socialmediabutton"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/144_Gitlab_logo_logos-512.png"
              alt="gitlab"
              height="30px"
              width="30px"
              style={{ opacity: '.6' }}
              className="socialmediabuttonimage"
            />
          </a>
          <a
            href="https://stackoverflow.com/users/13969786/configtheworld"
            className="socialmediabutton"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111640.png"
              alt="stackoverflow"
              height="30px"
              width="30px"
              style={{ opacity: '0.6', marginBottom: '5px' }}
              className="socialmediabuttonimage"
            />
          </a>
          <a
            href="https://codepen.io/configtheworld"
            className="socialmediabutton"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Codepen-512.png"
              alt="gitlab"
              height="30px"
              width="30px"
              style={{ opacity: '.6' }}
              className="socialmediabuttonimage"
            />
          </a>
          <a
            href="https://www.hackerrank.com/erkinture"
            className="socialmediabutton"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/160_Hackerrank_logo_logos-512.png"
              alt="gitlab"
              height="30px"
              width="30px"
              style={{ opacity: '.6' }}
              className="socialmediabuttonimage"
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
