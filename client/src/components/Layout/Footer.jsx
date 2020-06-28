import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const primary = red[700];
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3rem',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: primary,
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed',
    width: '100%',
    left: 0,
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        Chordilicious &copy; Copyright 2020
      </footer>
    </div>
  );
};

export default Footer;
