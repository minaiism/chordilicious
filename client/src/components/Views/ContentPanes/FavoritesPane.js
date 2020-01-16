import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import { Typography } from '@material-ui/core';
import SnackBarPane from './SnackBarPane/SnackBarPane';
import { useUserContext } from '../../Context/Context';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto'
  },
  header: {
    fontFamily: 'Montserrat, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem',
    padding: '0.5rem'
  }
}));

const FavoritesPane = () => {
  const classes = useStyles();
  const { user } = useUserContext();

  return user != null ? (
    <article>
      <Typography variant="h5" className={classes.header}>{user.name}'s Favorites</Typography>
      <List component="nav" className={classes.root} aria-label="favorites">
        <ListItem button>
          <ListItemIcon>
            <AudiotrackIcon/>
          </ListItemIcon>
          <ListItemText primary="Favorites1"/>
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Favorites2"/>
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Favorites3"/>
        </ListItem>
      </List>
    </article>) : (<article><SnackBarPane/></article>);
};

export default FavoritesPane;
