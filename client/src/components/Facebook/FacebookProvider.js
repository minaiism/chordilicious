import React, { useState } from 'react';
import FacebookContext from './FacebookContext';
import axios from 'axios';
import { getSessionCookie, removeSessionCookie, setSessionCookie } from '../SessionCookie/SessionCookie';

const FacebookProvider = (props) => {
  const { children } = props;
  const [userSession, setUserSession] = useState(getSessionCookie);

  const updateUserSession = (userSession) => {
    setUserSession(userSession);
    setSessionCookie(userSession);
  };

  const removeUserSession = () => {
    setUserSession(null);
    removeSessionCookie();
  };

  const facebookLogOut = () => {
    removeUserSession();
  };

  const signInCallback = (userSession) => {
    updateUserSession(userSession);
    const facebookHeader = {
      headers: { 'accessToken': userSession.accessToken }
    };
    const userId = userSession.id;

    axios.get('http://localhost:8080/signin/' + userId, facebookHeader)
      .then((response) => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      });
  };

  const signUpCallback = (userSession) => {
    updateUserSession(userSession);
    const facebookHeader = {
      headers: { 'accessToken': userSession.accessToken }
    };
    const userId = userSession.id;

    axios.post('http://localhost:8080/signup/', { fbId: userId }, facebookHeader)
      .then((response) => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      });
  };

  return (<FacebookContext.Provider
    value={{
      userSession: userSession,
      signInCallback: signInCallback,
      signUpCallback: signUpCallback,
      facebookLogOut: facebookLogOut
    }}
  >
    <div>
      {children}
    </div>
  </FacebookContext.Provider>);
};

export default FacebookProvider;


