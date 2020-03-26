import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import { useUserContext } from '../Context';
import { navigate } from 'hookrouter';
import { Paths, TestIds } from '../../Constants';
import * as UserService from '../../services/UserService';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto'
  },
  progress: {
    width: '40rem',
    margin: '1rem'
  },
  text: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '0.5rem'
  },
  icon: {
    fontSize: '2.4rem',
    margin: '0.1rem'
  },
  progressIcon: {
    margin: '2rem'
  }
}));

const SignInCallbackView = () => {
  const classes = useStyles();
  const { user, setUser, error, setError } = useUserContext();

  useEffect(() => {
    if (user === null) {
      UserService.getUser()
        .then(user => {
          setUser(user);
          navigate(Paths.HOME_PATH);
        })
        .catch(err => {
          setError(err.message);
        });
    } else {
      navigate(Paths.HOME_PATH);
    }
  }, [user, setUser, setError]);

  return error === '' ? (
    <article data-testid={TestIds.SIGN_IN_CALLBACK_ARTICLE_ID} className={classes.root}>
      <Typography variant={'h6'} className={classes.text}>
        <FlightLandIcon className={classes.icon} color={'primary'}/>
        Hold on a sec...
      </Typography>
      <CircularProgress className={classes.progressIcon} color={'primary'} size={'3rem'}/>
    </article>
  ) : (<article data-testid={TestIds.SIGN_IN_CALLBACK_ERROR_ID}>error: {error}</article>);
};

export default SignInCallbackView;
