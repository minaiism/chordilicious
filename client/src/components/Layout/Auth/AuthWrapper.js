import { useUserContext } from '../../Context';
import React, { useEffect, useState } from 'react';
import ApiClient from '../../../services/ApiClient';
import NoAccessSnackBar from './NoAccessSnackBar';
import { CircularProgress, makeStyles } from '@material-ui/core';
import { TestIds } from '../../../Constants';

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

const AuthWrapper = ({ view }) => {
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

  return isLoading ? user ? <>{view}</>
    :
    (<article data-testid={TestIds.authWrapperSpinnerArticleId} className={classes.container}>
      <CircularProgress className={classes.spinnerIcon}/>
    </article>)
    :
    (<article data-testid={TestIds.authWrapperSnackBarArticleId}><NoAccessSnackBar/></article>);
};

export default AuthWrapper;
