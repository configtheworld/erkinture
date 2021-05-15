import { Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Stats = () => {
  return (
    <Grid container direction='row' justify='space-around' alignItems='center'>
      <div>
        <CountUp separator='' end={5} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span
                ref={countUpRef}
                style={{
                  fontSize: '68px',
                  fontWeight: '700',
                  marginLeft: '35%',
                  color: '#cdcdcd',
                }}
              />
            </VisibilitySensor>
          )}
        </CountUp>
        <div style={{ color: '#61DAFB', textAlign: 'center' }}>
          Profesional Projects
        </div>
      </div>

      <div>
        <CountUp separator='' suffix='+' end={12} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span
                ref={countUpRef}
                style={{
                  fontSize: '68px',
                  fontWeight: '700',
                  marginLeft: '5%',
                  color: '#cdcdcd',
                }}
              />
            </VisibilitySensor>
          )}
        </CountUp>
        <div style={{ color: '#61DAFB', textAlign: 'center' }}>
          Personal Projects
        </div>
      </div>

      <div>
        <CountUp separator=' ' end={1} suffix='+' redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span
                ref={countUpRef}
                style={{
                  fontSize: '68px',
                  fontWeight: '700',
                  marginLeft: '20%',
                  color: '#cdcdcd',
                }}
              />
            </VisibilitySensor>
          )}
        </CountUp>
        <div style={{ color: '#61DAFB' }}>Years of Experience</div>
      </div>

      <div>
        <CountUp separator=' ' end={3} suffix='/4' redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span
                ref={countUpRef}
                style={{
                  fontSize: '68px',
                  fontWeight: '700',
                  color: '#cdcdcd',
                }}
              />
            </VisibilitySensor>
          )}
        </CountUp>
        <div style={{ color: '#61DAFB', textAlign: 'center' }}>University</div>
      </div>
    </Grid>
  );
};

export default Stats;
