import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MusicNoteIcon from '@material-ui/core/SvgIcon/SvgIcon';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat, sans-serif'
  },
  anchor: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

const TitlePane = () => {
  const classes = useStyles();

  return (<Typography variant={'h6'} className={classes.title}>
    <Link style={{ textDecoration: 'none', color: 'inherit' }} href="home"
          className={classes.anchor}>
      CHORDILICIOUS
    </Link>
    <MusicNoteIcon/>
  </Typography>);
};

export default TitlePane;
