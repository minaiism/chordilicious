import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookUserInfo from './FacebookUserInfo';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { AccountCircle } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { Paths } from '../../../../Constants';

const useStyles = makeStyles(() => ({
  anchor: {
    textDecoration: 'none',
    color: 'inherit'
  },
  facebookButton: {
    margin: '0.5rem'
  },
  button: {
    margin: '0.5rem',
    fontSize: 'inherit',
    textAlign: 'left'
  },
  text: {
    fontFamily: 'Montserrat, sans-serif',
    margin: '0.5rem',
    fontSize: '0.95rem'
  }
}));

const UserInfo = () => {
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
        aria-label={'account of current user'}
        aria-controls={'menu-appbar'}
        aria-haspopup={'true'}
        onClick={handleMenu}
        color={'inherit'}
      >
        <AccountCircle/>
      </IconButton>

      <Menu
        id={'menu-appbar'}
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

        <Link style={{ textDecoration: 'none', color: 'inherit' }} className={classes.anchor} component={'div'}>
          <MenuItem onClick={handleClose}>
            <FacebookUserInfo className={classes.facebookButton}/>
          </MenuItem>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'inherit' }} href={Paths.USER_PROFILE_PATH}
              className={classes.anchor}>
          <MenuItem onClick={handleFavorites} className={classes.button}>
            <EmojiPeopleIcon className={classes.anchor}/>
            <Typography className={classes.text}>My Account</Typography>
          </MenuItem>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'inherit' }} href={Paths.FAVORITES_PATH}
              className={classes.anchor}>
          <MenuItem onClick={handleFavorites} className={classes.button}>
            <FavoriteIcon className={classes.anchor}/>
            <Typography className={classes.text}>My Favorites</Typography>
          </MenuItem>
        </Link>

      </Menu>
    </article>
  );
};

export default UserInfo;

