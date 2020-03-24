import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import es6 from '../../../assets/es6.jpg';
import html5 from '../../../assets/html5.png';
import css3 from '../../../assets/css3.png';
import react from '../../../assets/react.png';
import git from '../../../assets/git.jpg';
import { TestIds } from '../../../Constants';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto'
  },
  text: {
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'uppercase'
  },
  avatar: {
    transition: 'transform 0.5s ease 0s',
    transform: 'scale(0.9)',
    border: '1px dashed #C19D4C',
    '&:hover': {
      transition: 'transform 0.5s ease 0s',
      transform: 'scale(1.1)'
    }
  }
}));

const SkillsList = () => {
  const classes = useStyles();

  return (
    <article data-testid={TestIds.SKILLS_LIST_ARTICLE_ID}>
      <List className={classes.root}>
        <ListItem className={classes.text}>
          <ListItemAvatar>
            <Avatar src={es6} className={classes.avatar}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText><span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase'
            }}>JavaScript</span></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={html5} className={classes.avatar}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText><span style={{ fontFamily: 'Montserrat, sans-serif' }}>HTML5</span></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={css3} className={classes.avatar}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText><span style={{ fontFamily: 'Montserrat, sans-serif' }}>CSS3</span></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={react} className={classes.avatar}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText><span
            style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase' }}>React</span></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={git} className={classes.avatar}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText><span style={{ fontFamily: 'Montserrat, sans-serif' }}>GIT</span></ListItemText>
        </ListItem>
      </List>
    </article>
  );
};

export default SkillsList;