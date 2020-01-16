import React from 'react';
import { makeStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import UserPane from './User/UserPane';
import AppBar from '@material-ui/core/AppBar/AppBar';
import red from '@material-ui/core/colors/red';
import TitlePane from './Title/TitlePane';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import Drawer from '@material-ui/core/Drawer';
import DrawerList from './Drawer/DrawerList';
import useTheme from '@material-ui/core/styles/useTheme';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const primary = red[700];
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  navBar: {
    background: primary
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  container: {
    flexGrow: 1
  }
}));


const NavBarPane = ({opened, handleDrawerOpen, handleDrawerClose}) => {
  const classes = useStyles();
  const theme = useTheme();


  return (<div className={classes.container}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, opened && classes.hide)}
          >
            <BlurOnIcon/>
          </IconButton>
          <TitlePane/>
          <UserPane/>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={opened}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <KeyboardBackspaceIcon/> : <ArrowRightAltIcon/>}
          </IconButton>
        </div>
        <DrawerList/>
      </Drawer>
    </div>

  );
};

export default NavBarPane;
