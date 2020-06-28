import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MusicNoteIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { Paths } from '../../../Constants';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat, sans-serif',
  },
  anchor: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Title = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" className={classes.title}>
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        href={Paths.HOME_PATH}
        className={classes.anchor}
      >
        CHORDILICIOUS
      </Link>
      <MusicNoteIcon />
    </Typography>
  );
};

export default Title;
