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
        }
    }));
    const classes = useStyles();
    return (
        <article className={classes.container}>
            <img src="https://i.ytimg.com/vi/8OUSjuSSlts/maxresdefault.jpg" className={classes.img} alt="favorites"/>
        </article>
    );
};

export default About;
