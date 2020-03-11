import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SearchLyricsBar from './SearchPane/SearchLyricsBar';
import PaginationPane from './PaginationPane';

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
  return (<div className={classes.container}>
      <Typography variant={'h5'} className={classes.text}>
        Search Lyrics & More
      </Typography>
      <Typography variant={'h3'} className={classes.text}>
        <SearchLyricsBar/>
        <PaginationPane/>
      </Typography>
    </div>

  );
};

export default HomeView;
