import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { Typography } from '@material-ui/core';
import { useUserContext } from '../../Context/Context';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

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
  },
  icon: {
    fontFamily: 'Montserrat, sans-serif'
  },
  button: {
    padding: '0 2rem 0 2rem',
    margin: '0 0.3rem 0 0.3rem'
  }
}));

const FavoritesPane = () => {
  const classes = useStyles();
  const { user } = useUserContext();

  return (<article>
    <Paper>
      <Typography variant="h5" className={classes.header}>{user.name}'s Favorites</Typography>
      <List component="nav" className={classes.root} aria-label="favorites">
        <ListItem>
          <ListItemIcon>
            <PlaylistAddCheckIcon fontSize={'large'} color={'default'}/>
            <Button color={'secondary'} className={classes.button} variant={'contained'}>
              <Link href="lyrics" className={classes.icon} underline={'none'} color={'inherit'}>
                Lyrics
              </Link>
            </Button>
          </ListItemIcon>
        </ListItem>
      </List>
    </Paper>
  </article>);
};

export default FavoritesPane;