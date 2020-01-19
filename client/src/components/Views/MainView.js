import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBarPane from './NavBarPane/NavBarPane';
import clsx from 'clsx';
import { useRoutes } from 'hookrouter';
import HomePane from './ContentPanes/HomePane';
import Favorites from './ContentPanes/FavoritesPane';
import UserProfilePane from './ContentPanes/UserProfilePane';
import TopPane from './ContentPanes/TopPane';
import Footer from './FooterPane/Footer';
import SignInCallbackPane from './ContentPanes/SignInCallbackPane';
import AuthWrapper from '../Auth/AuthWrapper';
import AboutPane from './ContentPanes/AboutPane/AboutPane';

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
    '/': () => <HomePane/>,
    '/about': () => <AuthWrapper pane={<AboutPane/>}/>,
    '/favorites': () => <AuthWrapper pane={<Favorites/>}/>,
    '/user-profile': () => <AuthWrapper pane={<UserProfilePane/>}/>,
    '/home': () => <HomePane/>,
    '/top': () => <TopPane/>,
    '/sign-in-callback': () => <SignInCallbackPane/>
  };

  const routeResult = useRoutes(routes);
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (<article className={classes.container}>
    <NavBarPane opened={drawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
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
