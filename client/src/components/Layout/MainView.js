import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar/NavBar';
import clsx from 'clsx';
import { useRoutes } from 'hookrouter';
import HomeView from '../Views/HomeView/HomeView';
import Favorites from '../Views/FavoritesView';
import UserAccountView from '../Views/UserAccountView';
import TopView from '../Views/TopView';
import Footer from './Footer';
import SignInCallbackView from '../Views/SignInCallbackView';
import AuthWrapper from './Auth/AuthWrapper';
import AboutView from '../Views/AboutView/AboutView';
import GeniusLyricsPane from '../Views/SongView/SongView';

const useStyles = makeStyles(theme => ({
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

const MainView = () => {

  const routes = {
    '/': () => <HomeView/>,
    '/about': () => <AboutView/>,
    '/favorites': () => <AuthWrapper view={<Favorites/>}/>,
    '/user-profile': () => <AuthWrapper view={<UserAccountView/>}/>,
    '/home': () => <HomeView/>,
    '/top': () => <TopView/>,
    '/sign-in-callback': () => <SignInCallbackView/>,
    '/lyrics': () => <AuthWrapper view={<GeniusLyricsPane/>}/>
  };

  const routeResult = useRoutes(routes);
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (<article className={classes.container}>
    <NavBar opened={drawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: drawerOpen
      })}
    >
      <article>
        {routeResult}
      </article>
    </main>
    <Footer/>
  </article>);
};

export default MainView;
