import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import Avatar from '@material-ui/core/Avatar';
import owl from '../../../../assets/owl.png';
import SkillsPaneList from './SkillsPaneList';
import GoalsPaneList from './GoalsPaneList';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'white'
  },
  icon: {
    fontSize: 70,
    margin: '0.1rem',
    color: '#C19D4C',
    transform: 'rotate(10deg) scale(1.2) translate3d(0, 0, 0)',
    transition: '.4s ease-in-out',
    '&:hover': {
      transform: 'rotate(0) scale(1) translate3d(10%, 20%, 0)',
      color: '#B8C9A9'
    }
  },
  header: {
    fontSize: 23,
    fontFamily: 'Montserrat, sans-serif',
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  text: {
    fontSize: 17,
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'justify',
    padding: '0 9rem 0 9rem'
  },
  skillText: {
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 20,
    textTransform: 'uppercase',
    margin: '0.5rem'
  },
  owl: {
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s ease 0s',
    transform: 'scale(1)',
    '&:hover': {
      transition: 'transform 0.5s ease 0s',
      transform: 'scale(0.95)'
    }
  },
  skillPaneText: {
    fontFamily: 'Montserrat, sans-serif'
  },
  divider: {
    height: '2.5px',
    margin: '0 auto',
    width: '18rem',
    backgroundColor: '#D4AA50'
  }
}));

const AboutPane = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.header}>
            <DepartureBoardIcon className={classes.icon}/>
            Junior Frontend Developer looking for Real-World
            Experience</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text}>
            A creative and hard-working person who decided to become a Front-End Developer from scratch.
            Moving towards Javascript frameworks and tools for the time being.
            Managing to contribute to all the projects I'm presently working on and will work on in the future.
            React's passionate. Currently developing my very own musical design...and you're just looking at it.
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography className={classes.skillText}>
            <Avatar className={classes.owl} src={owl}>
            </Avatar>
          </Typography>
        </Grid>
        <Grid item xs className={classes.listHeaders}>
          <Divider className={classes.divider}/>
          <Typography className={classes.skillText}>Secret Weapons</Typography>
          <Divider className={classes.divider}/>
          <SkillsPaneList className={classes.skillPaneText}/>
        </Grid>
        <Grid item xs className={classes.listHeaders}>
          <Divider className={classes.divider}/>
          <Typography className={classes.skillText}>Goals</Typography>
          <Divider className={classes.divider}/>
          <GoalsPaneList/>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPane;