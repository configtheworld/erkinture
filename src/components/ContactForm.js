import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { notification, Row, Spin, message, Modal } from 'antd';

const { confirm } = Modal;

const ContactForm = () => {
  const classes = useStyles();
  const [form, setform] = useState({
    title: '',
    user_mail: '',
    message: '',
  });
  const [loading, setloading] = useState(false);

  const openNotification = () => {
    notification.open({
      message: 'Success!',
      description: 'Your Mail Successfully Sent to Me 📩 🥳',
    });
  };

  const sendEmail = (e) => {
    setloading(true);

    if (form.message !== '' && form.user_mail !== '' && form.title !== '') {
      emailjs
        .sendForm(
          'service_o1ul95m',
          'template_g1kmnfd',
          e.target,
          'user_nqgFv1y7kXeagyfhPnM1J'
        )
        .then((res) => {
          if (res.status === 200) {
            setform({
              title: '',
              user_mail: '',
              message: '',
            });
            openNotification();
          }
          setloading(false);
        })
        .catch((err) => {
          setloading(false);
        });
    } else {
      message.error('All Field Are Required!');
      setloading(false);
    }
  };

  function showConfirm(e) {
    confirm({
      title: 'You are about to sent mail',
      content: '',
      onOk() {
        sendEmail(e);
      },
      onCancel() {
        // do nothing
        message.info('Ok, whenever you want :)');
      },
    });
  }

  return (
    <div className="will-fadeIn">
      <Card className={classes.root}>
        <CardContent className={classes.part}>
          <Typography className={classes.title}>Contact Me </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {!loading ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  showConfirm(e);
                }}
                className="contact_form_form"
              >
                <Row>
                  <div>
                    <input
                      className="contact_form_input"
                      name="title"
                      type="text"
                      placeholder="Mail Title"
                      value={form.title}
                      onChange={(e) =>
                        setform({ ...form, title: e.target.value })
                      }
                      required
                    />

                    <input
                      className="contact_form_input"
                      name="user_mail"
                      type="email"
                      placeholder="Your Contact E-mail"
                      value={form.user_mail}
                      onChange={(e) =>
                        setform({ ...form, user_mail: e.target.value })
                      }
                      required
                    />
                  </div>
                </Row>

                <textarea
                  className="contact_form_textarea"
                  placeholder="Your Message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setform({ ...form, message: e.target.value })
                  }
                />

                <input
                  className="contact_form_submit_btn "
                  type="submit"
                  value="Send"
                />
              </form>
            ) : (
              <div className="example_spin_antd">
                <Spin />
              </div>
            )}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;

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
