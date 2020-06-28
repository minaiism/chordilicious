import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import owl from '../../../assets/owl.png';
import SkillsList from './SkillsList';
import GoalsList from './GoalsList';
import { TestIds } from '../../../Constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'white',
  },
  icon: {
    fontSize: 70,
    margin: '0.1rem',
    color: '#C19D4C',
    transform: 'rotate(10deg) scale(1.2) translate3d(0, 0, 0)',
    transition: '.4s ease-in-out',
    '&:hover': {
      transform: 'rotate(0) scale(1) translate3d(10%, 20%, 0)',
      color: '#B8C9A9',
    },
  },
  header: {
    fontSize: 23,
    fontFamily: 'Montserrat, sans-serif',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'justify',
    padding: '0 9rem 2rem 9rem',
    '@media (min-device-width: 320px) and (max-device-width: 920px)': {
      padding: '0 1.5rem',
    },
    '@media (min-device-width: 1024px) and (max-device-width: 1366px)': {
      padding: '0 2rem',
    },
  },
  skillText: {
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 20,
    textTransform: 'uppercase',
    margin: '0.5rem',
  },
  owl: {
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s ease 0s',
    transform: 'scale(1)',
    '&:hover': {
      transition: 'transform 0.5s ease 0s',
      transform: 'scale(0.95)',
    },
    '@media (min-device-width: 768px) and (max-device-width: 1024px)': {
      width: '70%',
      height: '70%',
      margin: '0 auto',
    },
    '@media (min-device-width: 1024px) and (max-device-width: 1366px)': {
      width: '70%',
      height: '70%',
      margin: '0 auto',
    },
  },
  skillPaneText: {
    fontFamily: 'Montserrat, sans-serif',
  },
  divider: {
    height: '2.5px',
    margin: '0 auto',
    width: '18rem',
    backgroundColor: '#D4AA50',
    '@media (min-device-width: 320px) and (max-device-width: 480px)': {
      width: '17rem',
    },
    '@media (min-device-width: 768px) and (max-device-width: 1024px)': {
      width: '30rem',
    },
    '@media (min-device-width: 1024px) and (max-device-width: 1366px)': {
      width: '45rem',
    },
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media (min-device-width: 320px) and (max-device-width: 1100px)': {
      flexDirection: 'column',
    },
  },
}));

const AboutView = () => {
  const classes = useStyles();

  return (
    <article
      data-testid={TestIds.ABOUT_VIEW_ARTICLE_ID}
      className={classes.root}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.header} variant="h1">
            <DepartureBoardIcon className={classes.icon} />
            Junior Frontend Developer looking for Real-World Experience
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} variant="h5">
            A creative and hard-working person who decided to become a Front-End
            Developer from scratch. Moving towards Javascript frameworks and
            tools for the time being. Managing to contribute to all the projects
            I&apos;m presently working on and will work on in the future.
            Currently developing my very own musical design...and you&apos;re
            just looking at it.
          </Typography>
        </Grid>
        <Grid className={classes.gridContainer}>
          <Grid item xs>
            <Typography className={classes.skillText} variant="h2">
              <Avatar className={classes.owl} src={owl} />
            </Typography>
          </Grid>
          <Grid item xs>
            <Divider className={classes.divider} />
            <Typography className={classes.skillText}>
              Secret Weapons
            </Typography>
            <Divider className={classes.divider} />
            <SkillsList className={classes.skillPaneText} />
          </Grid>
          <Grid item xs>
            <Divider className={classes.divider} />
            <Typography className={classes.skillText}>Goals</Typography>
            <Divider className={classes.divider} />
            <GoalsList />
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
};

export default AboutView;
