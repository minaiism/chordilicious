import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookPane from './FacebookPane';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  anchor: {
    textDecoration: 'none',
    color: 'inherit'
  },
  facebookButton: {
    margin: '0.5rem'
  },
  favorites: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '1.5rem',
    fontSize: 'inherit',
    textAlign: 'center'
  },
}));

const UserPane = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFavorites = () => {
    setAnchorEl(null);
  };

  return (<article>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle/>
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >

        <Link style={{ textDecoration: 'none', color: 'inherit' }} className={classes.anchor}>
          <MenuItem onClick={handleClose}>
            <FacebookPane className={classes.facebookButton}/>
          </MenuItem>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'inherit' }} href="favorites"
              className={classes.anchor}>
          <MenuItem onClick={handleFavorites} className={classes.favorites}>
            <FavoriteIcon className={classes.anchor}/>
            My Favorites
          </MenuItem>
        </Link>

      </Menu>
    </article>
  );
};

export default UserPane;
