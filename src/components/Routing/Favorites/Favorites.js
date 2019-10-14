import React from 'react';
import {makeStyles} from '@material-ui/core';

const Favorites = (props) => {
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

        </div>
    );
};

export default Favorites;
