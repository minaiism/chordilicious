import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Facebook = () => {
    const useStyles = makeStyles(theme => ({
        container: {
            width: '100%',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        img: {
            borderRadius: '50%'
        },
        headContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        header: {
            padding: '0.3rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '100'
        },
        span: {
            fontWeight: 900
        },
        button: {
            width: '100%',
            marginBottom: '1.5rem'
        }
    }));

    const [userSession, setUserSession] = useState({});

    const classes = useStyles();
    const facebookContent = userSession.id ? (
        <div className={classes.container}>
            <img
                src={userSession.picture.data.url}
                alt={userSession.name}
                className={classes.img}
            />
            <div className={classes.headContainer}>
                <h5 className={classes.header}>
                    <span className={classes.span}>{userSession.name}</span>'s
                    account
                </h5>
            </div>
        </div>
    ) : (<FacebookLogin
            appId="2473947552663016"
            autoLoad={true}
            fields="name,email,picture"
            callback={setUserSession}
        />
    );

    return userSession.id === undefined ? <div>{facebookContent}</div> :
        (<div>
            {facebookContent}
            <Button variant="contained" color="primary" className={classes.button}>Log out</Button>
        </div>)
};

export default Facebook;


