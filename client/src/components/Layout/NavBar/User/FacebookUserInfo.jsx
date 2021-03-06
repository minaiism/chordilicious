import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useUserContext } from '../../../Context';
import { Paths } from '../../../../Constants';

const FacebookUserInfo = () => {
  const useStyles = makeStyles(() => ({
    container: {
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    img: {
      borderRadius: '50%',
    },
    headContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    header: {
      padding: '0.3rem',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '100',
      textDecoration: 'none',
      color: 'inherit',
    },
    span: {
      fontWeight: 600,
      fontFamily: 'Montserrat, sans-serif',
    },
    button: {
      width: '100%',
      margin: '0.5rem',
    },
    anchor: {
      textDecoration: 'none',
      color: 'inherit',
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonItem: {
      padding: '0.3rem',
      margin: '0.3rem',
    },
  }));
  const classes = useStyles();
  const { user } = useUserContext();

  const facebookContent =
    user != null ? (
      <article>
        <div className={classes.container}>
          <img src={user.avatar} alt={user.name} className={classes.img} />
          <article className={classes.headContainer}>
            <Typography
              component="span"
              variant="subtitle2"
              className={classes.header}
            >
              <Typography component="span" className={classes.span}>
                {user.name}
              </Typography>
              &apos;s account
            </Typography>
          </article>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            href="https://localhost:8443/logout"
          >
            <Typography
              href={Paths.HOME_PATH}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Log out
            </Typography>
          </Button>
        </div>
      </article>
    ) : (
      <div className={classes.buttonsContainer}>
        <Typography variant="h6" className={classes.buttonItem}>
          <Button
            component="button"
            color="primary"
            size="medium"
            variant="contained"
            startIcon={<FacebookIcon />}
            href="https://localhost:8443/auth/facebook"
          >
            Login with Facebook
          </Button>
        </Typography>
      </div>
    );

  return <article>{facebookContent}</article>;
};

export default FacebookUserInfo;
