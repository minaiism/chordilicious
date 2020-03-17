import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { TestIds } from '../../../Constants';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '2rem 8rem 2rem 8rem',
    '@media (min-device-width: 320px) and (max-device-width: 480px)': {
      padding: '0.1rem'
    },
    '@media (min-device-width: 768px) and (max-device-width: 1024px)': {
      padding: '2rem'
    },
    '@media (min-device-width: 1024px) and (max-device-width: 1366px)': {
      padding: '6rem'
    }
  },
  titleAvatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    margin: '0.5rem',
    width: '170px',
    height: '170px',
    border: '2px dashed black'
  },
  titleAndArtistContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: '1rem'
  },
  textContainer: {
    margin: '0.5rem'
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '1rem'
  },
  socialMediaIcon: {
    margin: '0.5rem'
  },
  fontFamily: {
    fontFamily: 'Montserrat, sans-serif'
  }
}));

const SongView = () => {
  const classes = useStyles();

  return (<article data-testid={TestIds.songViewArticleId}>
    <Paper className={classes.root}>
      <article className={classes.titleAvatarContainer}>
        <Avatar variant={'square'} className={classes.square}
                src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2017/07/lana-del-rey-lust-for-life-1180x616.jpg">
          CI
        </Avatar>

        <article className={classes.titleAndArtistContainer}>
          <Typography variant={'h5'} component={'h5'} className={classes.fontFamily}>
            Title of the Song
          </Typography>
          <Typography component={'p'} className={classes.fontFamily}>
            Name of the Artist
          </Typography>
        </article>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'overline'} className={classes.fontFamily}>
          Verse 1
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'subtitle1'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'overline'} className={classes.fontFamily}>
          Chorus
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'subtitle1'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'overline'} className={classes.fontFamily}>
          Verse 2
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'subtitle1'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'overline'} className={classes.fontFamily}>
          Bridge
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'subtitle1'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'overline'} className={classes.fontFamily}>
          Chorus
        </Typography>
      </article>

      <article className={classes.textContainer}>
        <Typography variant={'subtitle1'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </article>

      <article className={classes.socialMedia}>
        <FacebookIcon fontSize={'large'} className={classes.socialMediaIcon}/>
        <InstagramIcon fontSize={'large'} className={classes.socialMediaIcon}/>
        <TwitterIcon fontSize={'large'} className={classes.socialMediaIcon}/>
      </article>

    </Paper>
  </article>);
};

export default SongView;
