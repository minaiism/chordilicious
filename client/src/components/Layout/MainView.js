import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NavBar from './NavBar/NavBar';
import clsx from 'clsx';
import {useRoutes} from 'hookrouter';
import HomeView from '../Views/HomeView/HomeView';
import Favorites from '../Views/FavoritesView';
import UserAccountView from '../Views/UserAccountView';
import TopView from '../Views/TopView';
import Footer from './Footer';
import AuthWrapper from './Auth/AuthWrapper';
import AboutView from '../Views/AboutView/AboutView';
import LyricsView from '../Views/LyricsView/LyricsView';
import {Paths, TestIds} from '../../Constants';

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

/* istanbul ignore next */
const routes = {
  [Paths.HOME_PATH]: () => <HomeView/>,
  [Paths.ABOUT_PATH]: () => <AboutView/>,
  [Paths.FAVORITES_PATH]: () => <AuthWrapper view={<Favorites/>}/>,
  [Paths.USER_PROFILE_PATH]: () => <AuthWrapper view={<UserAccountView/>}/>,
  [Paths.TOP_PATH]: () => <TopView/>,
  [Paths.SIGN_IN_CALLBACK_PATH]: () => <AuthWrapper view={<HomeView/>}/>,
  [Paths.LYRICS_PATH]: () => <AuthWrapper view={<LyricsView/>}/>
};

const MainView = () => {
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
      <article data-testid={TestIds.MAIN_VIEW_ARTICLE_ID}>
        {routeResult}
      </article>
    </main>
    <Footer/>
  </article>);
};

export default MainView;
