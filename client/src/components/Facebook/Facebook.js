import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FacebookContext from './FacebookContext';

const Facebook = () => {
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
    }
  }));

  const classes = useStyles();

  const responseFacebook = () => {

  };

  const facebookContent = (
    <FacebookContext.Consumer>
      {({ userSession, setUserSession, facebookLogOut }) => userSession != null ? (
          <section className={classes.container}>
            <img
              src={userSession.picture.data.url}
              alt={userSession.name}
              className={classes.img}
            />
            <article className={classes.headContainer}>
              <Typography variant="subtitle2" className={classes.header}>
                <span className={classes.span}>{userSession.name}</span>'s
                account
              </Typography>
            </article>
            <Button variant="contained" color="primary" className={classes.button} onClick={facebookLogOut}>
              <Link href="home"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontFamily: 'Montserrat, sans-serif'
                    }}>Log out
              </Link>
            </Button>
          </section>
        ) :
        (<FacebookLogin
          appId="2473947552663016"
          autoLoad={false}
          fields="name,email,picture"
          callback={setUserSession}
        />)
      }
    </FacebookContext.Consumer>);

  return (
    <div>
      {facebookContent}
    </div>
  );
};

export default Facebook;


