import * as Cookies from "js-cookie";

export const setSessionCookie = (FBUserSession) => {
    removeSessionCookie();
    Cookies.set("FBUserSession", JSON.stringify(FBUserSession));
};

export const removeSessionCookie = () => {
    Cookies.remove("FBUserSession");
};

export const getSessionCookie = () => {
    const sessionCookie = Cookies.get("FBUserSession");

    if (sessionCookie === undefined) {
        return null;
    } else {
        console.log('getSessionCookie', JSON.parse(sessionCookie));
        return JSON.parse(sessionCookie);
    }
};


