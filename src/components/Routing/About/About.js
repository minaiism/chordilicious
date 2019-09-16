import React from 'react';
import {makeStyles} from '@material-ui/core';

const About = props => {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }
    }));
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1>About us</h1>
        </div>
    );
};

export default About;
