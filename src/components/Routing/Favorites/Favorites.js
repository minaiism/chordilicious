import React from 'react';
import { makeStyles } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';

const Favorites = props => {
    const primary = red[700];
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
