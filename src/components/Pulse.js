import { useState, useEffect, Fragment } from 'react';

const Pulse = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Fragment>
      <div
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          marginTop: '200px',
          position: 'absolute',
          left: '37%',
        }}
      >
        <div className='animated-bg'>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </Fragment>
  );
};

export default Pulse;
