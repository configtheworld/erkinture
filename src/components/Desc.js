import './styles/desc.css';
import Box from '@material-ui/core/Box';

const Desc = () => {
  return (
    <div style={{ width: '100%', marginTop: '150px', marginBottom: '50px' }}>
      <Box display="flex" justifyContent="center">
        <div className="headline">
          <h1
            className="sha"
            style={{
              fontSize: '3rem',
              letterSpacing: '-1px',
              color: '#AFAFAF',
            }}
          >
            Hello, I am Erkin
          </h1>

          <div className="middle" style={{ marginBottom: '65px' }}>
            <span className="text-type-animation">
              <h3
                className="sha"
                style={{ lineHeight: '1.8', color: '#9a9a9a' }}
              >
                <br />
              </h3>
              <h2
                className="sha"
                style={{
                  fontSize: '2rem',
                  letterSpacing: '-1px',
                  color: '#cdcdcd',
                }}
              >
                I'm into <br></br>{' '}
                <span
                  className="txt-rotate"
                  data-period={1500}
                  data-rotate='[ "designing software architecture", "developing full stack applications","free diving 🤿"]'
                />
                <br></br>
              </h2>
              <div
                className="sha jumping-button"
                style={{
                  fontSize: '2.5rem',
                  color: '#7a7a7a',
                  marginTop: '50px',
                }}
              >
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </span>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Desc;
