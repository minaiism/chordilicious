import React from 'react';
import { makeStyles } from '@material-ui/core';

const About = props => {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        img:{
            width: '80%',
            height: '80%',
        },
        text:{
            fontFamily: 'Montserrat, sans-serif',
            padding: '0.3rem',
            textTransform: 'uppercase'
        }
    }));
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <p className={classes.text}>
                About
            </p>
            <img src="https://i.ytimg.com/vi/8OUSjuSSlts/maxresdefault.jpg" className={classes.img} alt="favorites"/>
        </div>
    );
};

export default About;
