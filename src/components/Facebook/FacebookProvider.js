import React, {useState} from 'react';
import FacebookContext from "./FacebookContext";
import {getSessionCookie, removeSessionCookie, setSessionCookie} from "../SessionCookie/SessionCookie";

const FacebookProvider = (props) => {
    const {children} = props;
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

    return (<FacebookContext.Provider
        value={{
            userSession: userSession,
            setUserSession: updateUserSession,
            facebookLogOut: facebookLogOut
        }}
    >
        <div>
            {children}
        </div>
    </FacebookContext.Provider>)
};

export default FacebookProvider;


