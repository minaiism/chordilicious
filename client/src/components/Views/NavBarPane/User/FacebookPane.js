import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Context from '../../../Context/Context';

const FacebookPane = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    img: {
      borderRadius: '50%'
    },
    headContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    header: {
      padding: '0.3rem',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '100',
      textDecoration: 'none',
      color: 'inherit'
    },
    span: {
      fontWeight: 900
    },
    button: {
      width: '100%',
      margin: '0.5rem'
    },
    anchor: {
      textDecoration: 'none',
      color: 'inherit'
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonItem: {
      padding: '0.3rem',
      margin: '0.3rem'
    }
  }));

  const classes = useStyles();

  const facebookContent = (
    <Context.Consumer>
      {({ FBUserSession, signInCallback, signUpCallback, facebookLogOut}) => FBUserSession != null ? (
          <div className={classes.container}>
            <img
              src={FBUserSession.picture.data.url}
              alt={FBUserSession.name}
              className={classes.img}
            />
            <article className={classes.headContainer}>
              <Typography component={'span'} variant="subtitle2" className={classes.header}>
                <span className={classes.span}>{FBUserSession.name}</span>'s
                account
              </Typography>
            </article>
            <Button variant="contained" color="primary" className={classes.button} onClick={facebookLogOut}>
              <Typography href="home"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontFamily: 'Montserrat, sans-serif'
                    }}>Log out
              </Typography>
            </Button>
          </div>
        ) :
        (<div className={classes.buttonsContainer}>
          <article className={classes.buttonItem}>
            <FacebookLogin
              appId={process.env.REACT_APP_FB_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              callback={signInCallback}
              icon="fa-facebook"
              textButton={<span>Sign in</span>}
            />
          </article>
          <article className={classes.buttonItem}>
            <FacebookLogin
              appId={process.env.REACT_APP_FB_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              callback={signUpCallback}
              icon="fa-facebook"
              textButton={<span>Sign up</span>}
            /></article>
        </div>)
      }
    </Context.Consumer>);

  return (
    <article>
      {facebookContent}
    </article>
  );
};

export default FacebookPane;

