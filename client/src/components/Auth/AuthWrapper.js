import { useUserContext } from '../Context/Context';
import React, { useEffect } from 'react';
import ApiClient from '../../services/ApiClient';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    fontSize: '6rem'
  }
});

const AuthWrapper = ({ pane }) => {
  const { user, setUser, setError } = useUserContext();
  const classes = useStyles();

  useEffect(() => {
    if (user === null) {
      ApiClient.get('/users/me')
        .then(res => {
          setUser(res.data);
        })
        .catch(err => {
          setError(err.message);
        });
    }
  }, [user, setUser, setError]);

  return user ? (<div>{pane}</div>) : (
    <article className={classes.container}><CircularProgress className={classes.spinner}/></article>);
};

export default AuthWrapper;
