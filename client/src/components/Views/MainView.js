import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBarPane/NavBar';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { useRoutes } from 'hookrouter';
import Home from './ContentPanes/Home';
import About from './ContentPanes/AboutPane/AboutPane';
import Favorites from './ContentPanes/Favorites';
import FBUserProfile from './ContentPanes/FBUserProfile';
import Top from './ContentPanes/Top';
import Footer from './FooterPane/Footer';


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
  '/': () => <Home/>,
  '/about': () => <About/>,
  '/favorites': () => <Favorites/>,
  '/user-profile': () => <FBUserProfile/>,
  '/home': () => <Home/>,
  '/top': () => <Top/>
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
  return (<div className={classes.container}>
      <NavBar opened={drawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen
        })}
      >
        <Typography component={'span'} variant={'body2'}>
          {/** dynamically rendered component **/}
          {routeResult}
        </Typography>
      </main>
      <Footer/>
    </div>
  );
};

export default MainView;
