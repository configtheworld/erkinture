import { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import WhoIam from './WhoIam';
import Experiences from './Experiences';
import Projects from './Projects';
import configtheworldblog from '../public/img/configtheworldblog.png';
import me from '../public/img/erkin.jpg';
import github from '../public/img/githubpp.png';
import '../public/styles/pulseball.css';
import '../public/styles/slide.css';
import Pulse from './Pulse';
import Desc from './Desc';
import Stats from './Stats';
import ContactForm from './ContactForm';
import SocialMediaButtons from './SocialMediaButtons';

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
                objectFit: 'cover',
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
        <SocialMediaButtons />
      </div>
    </Fragment>
  );
};

export default MainPage;
