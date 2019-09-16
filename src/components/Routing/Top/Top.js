import React from 'react';
import {makeStyles} from '@material-ui/core';

const Home = props => {
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
            <h1>Top 10 Charts</h1>
        </div>
    );
};

export default Home;
