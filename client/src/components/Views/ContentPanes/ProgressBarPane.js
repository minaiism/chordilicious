import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import RowingIcon from '@material-ui/icons/Rowing';

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4)
    },
    margin: '0 auto'
  },
  progress: {
    width: '40rem',
    margin: '1rem'
  },
  text: {
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    padding: '0.5rem'
  },
  icon:{
    fontSize: '1.8rem'
  }
}));

const ProgressBarPane = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        Hold on a sec...
        <RowingIcon className={classes.icon}/>
      </Typography>
      <LinearProgress color="primary"/>
    </div>
  );
};

export default ProgressBarPane;
