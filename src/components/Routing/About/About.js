import React from 'react';
import {makeStyles} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

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
        <article className={classes.container}>
            <Typography variant="subtitle1">About us</Typography>
        </article>
    );
};

export default About;
