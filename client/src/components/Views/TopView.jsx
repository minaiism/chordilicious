import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TestIds } from '../../Constants';

const useStyles = makeStyles(() => ({
  text: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '0.5rem',
  },
}));

const TopView = () => {
  const classes = useStyles();

  return (
    <article data-testid={TestIds.TOP_VIEW_ARTICLE_ID}>
      <h1 className={classes.text}>Top</h1>
    </article>
  );
};

export default TopView;
