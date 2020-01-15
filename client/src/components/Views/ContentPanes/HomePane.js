import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const HomePane = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    img: {
      width: '80%',
      height: '80%'
    },
    imgContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontFamily: 'Montserrat, sans-serif',
      padding: '0.3rem',
      textTransform: 'uppercase'
    }
  }));

  const classes = useStyles();
  return (<div className={classes.container}>
      <Typography variant={'h3'} className={classes.text}>
        Home
      </Typography>
      <Typography variant={'body1'} className={classes.imgContainer}>
        <img src="https://i.pinimg.com/originals/ae/50/a2/ae50a2f58cce0a65417fb3839b2b8fef.jpg" className={classes.img}
             alt="home"/>
      </Typography>
    </div>

  );
};

export default HomePane;
