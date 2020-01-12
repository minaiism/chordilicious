import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useUserContext } from '../../../Context/Context';

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
      justifyContent: 'center'
    },
    buttonItem: {
      padding: '0.3rem',
      margin: '0.3rem'
    }
  }));

  const classes = useStyles();
  const { user, setUser } = useUserContext();

  const facebookLogOut = () => {
    setUser(null);
    // TODO: signOut using API
    window.location.href = '/';
  };

  const facebookContent = user != null ? (
    <article>
      <div className={classes.container}>
        <img
          src={user.picture.data.url}
          alt={user.name}
          className={classes.img}
        />
        <article className={classes.headContainer}>
          <Typography component={'span'} variant={'subtitle2'} className={classes.header}>
            <Typography component={'span'} className={classes.span}>{user.name}</Typography>'s
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
    </article>) : (<div className={classes.buttonsContainer}>
    <Typography variant={'h5'} className={classes.buttonItem}>
      <ButtonGroup variant="contained" color="primary" href="http://localhost:8080/auth/facebook"><Button>Login with
        Facebook</Button></ButtonGroup>
    </Typography>
  </div>);

  return (
    <article>
      {facebookContent}
    </article>
  );
};

export default FacebookPane;


