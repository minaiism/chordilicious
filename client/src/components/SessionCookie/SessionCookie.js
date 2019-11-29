import * as Cookies from "js-cookie";

export const setSessionCookie = (userSession) => {
    removeSessionCookie();
    Cookies.set("userSession", JSON.stringify(userSession));
};

export const removeSessionCookie = () => {
    Cookies.remove("userSession");
};

export const getSessionCookie = () => {
    const sessionCookie = Cookies.get("userSession");

    if (sessionCookie === undefined) {
        return null;
    } else {
        console.log('getSessionCookie', JSON.parse(sessionCookie));
        return JSON.parse(sessionCookie);
    }
};


