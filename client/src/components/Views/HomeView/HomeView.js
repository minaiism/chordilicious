import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SearchLyricsBar from './SearchLyricsPane/SearchLyricsBar';
import PaginationPane from './PaginationPane';
import { TestIds } from '../../../Constants';

const HomeView = () => {
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
  return (<article className={classes.container} data-testid={TestIds.HOME_VIEW_ARTICLE_ID}>
      <Typography variant={'h5'} className={classes.text}>
        Search Lyrics & More
      </Typography>
      <Typography variant={'h3'} className={classes.text}>
        <SearchLyricsBar/>
        <PaginationPane/>
      </Typography>
    </article>

  );
};

export default HomeView;
