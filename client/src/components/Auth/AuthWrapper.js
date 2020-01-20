import { useUserContext } from '../Context/Context';
import React, { useEffect, useState } from 'react';
import ApiClient from '../../services/ApiClient';
import SnackBarPane from '../Views/ContentPanes/SnackBarPane/SnackBarPane';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinnerIcon: {
    fontSize: '6rem'
  }
}));

const AuthWrapper = ({ pane }) => {
  const classes = useStyles();
  const { user, setUser, setError } = useUserContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user === null && isLoggedIn === false) {
      ApiClient.get('/users/me')
        .then(res => {
          setUser(res.data);
          setIsLoggedIn(true);
          setIsLoading(true);
        })
        .catch(err => {
          setError(err.message);
          setIsLoggedIn(false);
          setIsLoading(false);
        });
    }
  }, [user, setUser, setError, isLoggedIn, isLoading]);

  return isLoading ? user ? <div>{pane}</div> : (
    <article className={classes.container}><CircularProgress className={classes.spinnerIcon}/></article>) : (
    <SnackBarPane/>);
};

export default AuthWrapper;
