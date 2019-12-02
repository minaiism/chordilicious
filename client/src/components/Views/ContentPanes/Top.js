import React from 'react';
import {makeStyles} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const Home = () => {
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
            <Typography varian="h1">Top Lyrics</Typography>
        </div>
    );
};

export default Home;
