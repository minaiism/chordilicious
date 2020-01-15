import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBarPane/NavBar';
import clsx from 'clsx';
import { useRoutes } from 'hookrouter';
import HomePane from './ContentPanes/HomePane';
import About from './ContentPanes/AboutPane/AboutPane';
import Favorites from './ContentPanes/FavoritesPane';
import UserProfilePane from './ContentPanes/UserProfilePane';
import TopPane from './ContentPanes/TopPane';
import Footer from './FooterPane/Footer';
import SignInCallbackPane from './ContentPanes/SignInCallbackPane';

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

const routes = {
  '/': () => <HomePane/>,
  '/about': () => <About/>,
  '/favorites': () => <Favorites/>,
  '/user-profile': () => <UserProfilePane/>,
  '/home': () => <HomePane/>,
  '/top': () => <TopPane/>,
  '/sign-in-callback': () => <SignInCallbackPane/>
};

const MainView = () => {
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
    </article>
  );
};

export default MainView;
