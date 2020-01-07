import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '0.5rem',
  },
}));

const Top = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.text}>Top</h1>
    </div>
  );
};

export default Top;
