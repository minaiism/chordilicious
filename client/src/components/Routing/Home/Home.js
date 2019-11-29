import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
        },
        img:{
            width: '80%',
            height: '80%',
        },
        imgContainer:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }));

    const classes = useStyles();
    return (
        <article className={classes.container}>
          <Typography variant="body1" className={classes.imgContainer}>
              <img src="https://i.pinimg.com/originals/ae/50/a2/ae50a2f58cce0a65417fb3839b2b8fef.jpg" className={classes.img} alt="home"/>
          </Typography>
        </article>
    );
};

export default FBUserProfile;
