import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import FlightLandIcon from '@material-ui/icons/FlightLand';

import { useUserContext } from '../../Context/Context';
import { navigate } from 'hookrouter';
import ApiClient from '../../../services/ApiClient';

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

const SignInCallbackPane = () => {
  const classes = useStyles();
  const { user, setUser, loading, setLoading, error, setError } = useUserContext();

  useEffect(() => {
    if (user === null) {
      setLoading(true);
      ApiClient.get('/users/me')
        .then(res => {
          setLoading(false);
          setUser(res.data);
          navigate('/');
        })
        .catch(err => {
          setError(err.message);
        });
    } else {
      navigate('/');
    }
  }, [user, setUser, setLoading, setError]);


  return loading ? (
    <div className={classes.root}>
      <Typography variant={'h6'} className={classes.text}>
        <FlightLandIcon className={classes.icon} color={'primary'}/>
        Hold on a sec...
      </Typography>
      <CircularProgress className={classes.progressIcon} color={'primary'} size={'3rem'}/>
    </div>
  ) : (<div>error: {error}</div>);
};

export default SignInCallbackPane;
