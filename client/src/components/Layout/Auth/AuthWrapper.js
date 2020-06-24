import {useUserContext} from '../../Context';
import React, {useEffect, useState} from 'react';
import NoAccessSnackBar from './NoAccessSnackBar';
import {CircularProgress, makeStyles, Typography} from '@material-ui/core';
import {ErrorCodes, TestIds} from '../../../Constants';
import * as UserService from '../../../services/UserService';
import ErrorInfo from "../../Views/ErrorInfo";
import FlightLandIcon from "@material-ui/icons/FlightLand";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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

const AuthWrapper = ({view}) => {
  const classes = useStyles();
  const {user, setUser} = useUserContext();
  const [error, setError] = useState(null);
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
          setError(err);
          setIsLoggedIn(false);
          setIsLoading(false);
        });
    }
  }, [user, setUser, setError, isLoggedIn, isLoading]);

  const conditionalContentUser =
    user
      ? <>{view}</>
      : (
        <article data-testid={TestIds.AUTH_WRAPPER_SPINNER_ARTICLE_ID} className={classes.container}>
          <Typography variant={'h6'} className={classes.text}>
            <FlightLandIcon className={classes.icon} color={'primary'}/>
            Hold on a sec...
          </Typography>
          <CircularProgress className={classes.progressIcon} color={'primary'} size={'3rem'}/>
        </article>
      );

  const content =
    isLoading
      ? conditionalContentUser
      : <></>;

  const errorContent = error && error.code === ErrorCodes.FETCH_USER_ERROR ? <article
    data-testid={TestIds.AUTH_WRAPPER_SNACKBAR_ARTICLE_ID}>
    <NoAccessSnackBar/>
  </article> : null;

  return (<ErrorInfo error={error} content={content} errorContent={errorContent}/>)
};

export default AuthWrapper;
