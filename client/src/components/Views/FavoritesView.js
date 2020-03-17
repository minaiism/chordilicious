import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { Typography } from '@material-ui/core';
import { useUserContext } from '../Context';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { TestIds } from '../../Constants';
import ListItemText from '@material-ui/core/ListItemText';

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

const FavoritesView = () => {
  const classes = useStyles();
  const { user } = useUserContext();

  return (<article data-testid={TestIds.favoritesViewArticleId}>
    <Paper>
      <Typography variant={'h5'} className={classes.header}>{user.name}'s Favorites</Typography>
      <List component={'nav'} className={classes.root} aria-label={'favorites'}>
        <ListItem>
          <ListItemIcon>
            <PlaylistAddCheckIcon fontSize={'large'} color={'primary'}/>
          </ListItemIcon>
          <ListItemText>
            <Button color={'secondary'} className={classes.button} variant={'contained'}>
              <Link href="lyrics" className={classes.icon} underline={'none'} color={'inherit'}>
                Lyrics
              </Link>
            </Button>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  </article>);
};

export default FavoritesView;
