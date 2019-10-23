import React from 'react';
import {makeStyles} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const FBUserProfile = props => {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        },
        artistHeader: {
            padding: '1rem',
            margin: '0.5rem',
            fontFamily: 'Montserrat, sans-serif'
        },
        verseHeader: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700
        },
        verseContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0.3rem',
        },
        verseText: {
            padding: '0.2rem',
            fontFamily: 'Montserrat, sans-serif'
        }
    }));



    const classes = useStyles();
    return (
        <article className={classes.container}>
          <Typography variant="body1">
              Lyric goes here
          </Typography>
        </article>
    );
};

export default FBUserProfile;
