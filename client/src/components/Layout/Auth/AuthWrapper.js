import { useUserContext } from '../../Context';
import React, { useEffect, useState } from 'react';
import NoAccessSnackBar from './NoAccessSnackBar';
import { CircularProgress, makeStyles } from '@material-ui/core';
import { TestIds } from '../../../Constants';
import * as UserService from '../../../services/UserService';

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
      UserService.getUser()
        .then(user => {
          setUser(user);
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