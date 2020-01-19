import { useUserContext } from '../Context/Context';
import React, { useEffect } from 'react';
import ApiClient from '../../services/ApiClient';
import SnackBarPane from '../Views/ContentPanes/SnackBarPane/SnackBarPane';

const AuthWrapper = ({ pane }) => {
  const { user, setUser, setError} = useUserContext();

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

  return user ? (<div>{pane}</div>): (<SnackBarPane/>);
};

export default AuthWrapper;
