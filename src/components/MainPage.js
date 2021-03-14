import { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import WhoIam from './WhoIam';
import Experiences from './Experiences';
import Projects from './Projects';
import CardCarousel from './CardCarousel';

// styles
import './styles/pulseball.css';
import './styles/slide.css';
import Pulse from './Pulse';
import Desc from './Desc';

const MainPage = () => {
  return (
    <Fragment>
      <header className='header-design'>
        <div className='listar-map-button'>
          <Link href='http://www.start4ups.com/'>
            <img
              className='imagehover'
              src='/darklogo.png'
              height='90px'
              width='90px'
              alt='start4ups'
              style={{
                borderRadius: '50%',
                position: 'relative',
                marginTop: '100px',
                boxShadow: ' 0 0 0 3px #2667ff',
                zIndex: '1',
                marginRight: '-30px',
                backgroundColor: '#313131',
              }}
            />
          </Link>
          <Link href='/'>
            <img
              className=''
              src='/me.png'
              height='100px'
              width='100px'
              alt='me'
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
          <Link href='https://github.com/configtheworld'>
            <img
              className='imagehover'
              src='/githubpp.png'
              height='90px'
              width='90px'
              alt='github'
              style={{
                borderRadius: '50%',
                position: 'relative',
                marginTop: '100px',
                boxShadow: ' 0 0 0 3px #7b2cbf',
                zIndex: '1',
                marginLeft: '-30px',
              }}
            />
          </Link>
        </div>
        <div className='footer-wave' />
      </header>

      <Desc />
      <Pulse />
      <div className='pset'>
        <WhoIam xs={12} />
        <Experiences xs={6} />
        <Projects xs={4} />
        <CardCarousel />
      </div>
    </Fragment>
  );
};

export default MainPage;
