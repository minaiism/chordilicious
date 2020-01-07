import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import FlightLandIcon from '@material-ui/icons/FlightLand';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto'
  },
  progress: {
    width: '40rem',
    margin: '1rem'
  },
  text: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '0.5rem'
  },
  icon: {
    fontSize: '2.4rem',
    margin: '0.4rem'
  },
  progressIcon:{
    margin: '2rem'
  }
}));

const Top = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant={'h6'} className={classes.text}>
        <FlightLandIcon className={classes.icon} color={'primary'}/>
        Hold on a sec...
      </Typography>
      <CircularProgress className={classes.progressIcon} color={'primary'} size={'3rem'} />
    </div>
  );
};

export default Top;
