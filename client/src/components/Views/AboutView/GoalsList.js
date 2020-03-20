import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ts from '../../../assets/ts.png';
import vue from '../../../assets/vue.jpg';
import datastructers from '../../../assets/datastructures.png';
import { TestIds } from '../../../Constants';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto'
  },
  text: {
    fontFamily: 'Montserrat, sans-serif'
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

const GoalsList = () => {
  const classes = useStyles();

  return (
    <article data-testid={TestIds.goalsListArticleId}>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={ts} className={classes.avatar}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText><span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase'
            }}>TypeScript</span></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={vue} className={classes.avatar}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText><span
            style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase' }}>Vue</span></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={datastructers} className={classes.avatar}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText><span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase'
            }}>Data Structures</span></ListItemText>
        </ListItem>
      </List>
    </article>
  );
};

export default GoalsList;