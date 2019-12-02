import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import KeyboardBackspaceIcon from '@material-ui/core/SvgIcon/SvgIcon';
import DrawerList from './DrawerList';
import Drawer from '@material-ui/core/Drawer';
import useTheme from '@material-ui/core/styles/useTheme';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Typography from '@material-ui/core/Typography';
import { useRoutes } from 'hookrouter';
import Home from '../../ContentPanes/Home';
import About from '../../ContentPanes/About';
import Favorites from '../../ContentPanes/Favorites';
import FBUserProfile from '../../ContentPanes/FBUserProfile';
import Top from '../../ContentPanes/Top';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const routes = {
  '/': () => <Home/>,
  '/about': () => <About/>,
  '/favorites': () => <Favorites/>,
  '/user-profile': () => <FBUserProfile/>,
  '/home': () => <Home/>,
  '/top': () => <Top/>
};

const DrawerPane = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [opened, setOpened] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpened(true);
  };
  const handleDrawerClose = () => {
    setOpened(false);
  };
  const routeResult = useRoutes(routes);

  return (<article><IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      className={clsx(classes.menuButton, opened && classes.hide)}
    >
      <BlurOnIcon/>
    </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={opened}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <article className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <KeyboardBackspaceIcon/> : <ArrowRightAltIcon/>}
          </IconButton>
        </article>
        <DrawerList/>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: opened
        })}
      >
        <Typography variant="body1">
          {/** dynamically rendered component **/}
          {routeResult}
        </Typography>
      </main>
    </article>
  );
};

export default DrawerPane;
