import React, { useState } from 'react';
import Context from './Context';
import axios from 'axios';
import { getSessionCookie, removeSessionCookie, setSessionCookie } from '../SessionCookie/SessionCookie';

const ContextProvider = (props) => {
  const { children } = props;
  const [FBUserSession, setFBUserSession] = useState(getSessionCookie);

  const updateUserSession = (FBUserSession) => {
    setFBUserSession(FBUserSession);
    setSessionCookie(FBUserSession);
  };

  const removeUserSession = () => {
    setFBUserSession(null);
    removeSessionCookie();
  };

  const facebookLogOut = () => {
    removeUserSession();
  };

  const signInCallback = (FBUserSession) => {
    updateUserSession(FBUserSession);
    const facebookHeader = {
      headers: {
        'accessToken': FBUserSession.accessToken,
      }
    };
    const userId = FBUserSession.id;

    axios.get('http://localhost:8080/signin/' + userId, facebookHeader)
      .then((response) => {
        console.log('signInCallback:axios', response);
      })
      .catch(error => {
        console.error('signInCallback:axios', error.response);
      });
  };

  const signUpCallback = (FBUserSession) => {
    console.log('signUpCallback', FBUserSession);
    updateUserSession(FBUserSession);
    const facebookHeader = {
      headers: { 'accessToken': FBUserSession.accessToken }
    };
    const userId = FBUserSession.id;

    axios.post('http://localhost:8080/signup', { fbId: userId }, facebookHeader)
      .then((response) => {
        console.log('signUpCallback:axios', response);
      })
      .catch(error => {
        console.error('signUpCallback:axios', error.response);
      });
  };

  return (<Context.Provider
    value={{
      FBUserSession: FBUserSession,
      signInCallback: signInCallback,
      signUpCallback: signUpCallback,
      facebookLogOut: facebookLogOut
    }}
  >
    <div>
      {children}
    </div>
  </Context.Provider>);
};

export default ContextProvider;


