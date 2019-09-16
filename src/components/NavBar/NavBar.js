import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import red from '@material-ui/core/colors/red';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Facebook from '../Facebook/Facebook';
import About from "../Routing/About/About";
import Favorites from "../Routing/Favorites/Favorites";
import FBUserProfile from "../Routing/FBUserProfile/FBUserProfile";
import {useRoutes} from "hookrouter";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import useTheme from "@material-ui/core/styles/useTheme";
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import {SocialIcon} from 'react-social-icons';
import Home from "../Routing/Home/Home";
import Top from "../Routing/Top/Top";

const routes = {
    '/': () => <Home/>,
    '/about': () => <About/>,
    '/favorites': () => <Favorites/>,
    '/user-profile': () => <FBUserProfile/>,
    '/home': () => <Home/>,
    '/top': () => <Top/>
};

const drawerWidth = 230;
const primary = red[700];
const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Montserrat, sans-serif'
    },
    navBar: {
        background: primary
    },
    anchor: {
        textDecoration: 'none',
        color: 'inherit',
    },
    favorites: {
        fontFamily: 'Montserrat, sans-serif',
        padding: '1.5rem',
        fontSize: 'inherit',
        textAlign: 'center'

    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    listIcon:{
        fontFamily: 'Montserrat, sans-serif',
        margin: '0.2rem'
    }
}));

const NavBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [opened, setOpened] = React.useState(false);
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
    const handleDrawerOpen = () => {
        setOpened(true);
    };
    const handleDrawerClose = () => {
        setOpened(false);
    };

    const routeResult = useRoutes(routes);
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

                    <Typography variant="h6" className={classes.title}>
                        <a href="home" className={classes.anchor}>
                            CHORDILICIOUS
                        </a>
                        <MusicNoteIcon/>
                    </Typography>
                    <div>
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
                            <a href="user-profile" className={classes.anchor}>
                                <MenuItem onClick={handleClose}>
                                    <Facebook/>
                                </MenuItem>
                            </a>

                            <a href="favorites" className={classes.anchor}>
                                <MenuItem onClick={handleFavorites} className={classes.favorites}>
                                    <FavoriteIcon className={classes.anchor}/>
                                    My Favorites
                                </MenuItem>
                            </a>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={opened}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <KeyboardBackspaceIcon/> : <ArrowRightAltIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem className={classes.listIcon}>
                        <QueueMusicIcon/>
                        <a href="about" className={classes.anchor}>
                        About Chordilicious
                        </a>
                    </ListItem>
                    <ListItem className={classes.listIcon}>
                        <FavoriteIcon/>
                        <a href="favorites" className={classes.anchor}>
                        My Favorites
                        </a>
                    </ListItem>
                    <ListItem className={classes.listIcon}>
                        <VerticalAlignTopIcon/>
                        <a href="top" className={classes.anchor}>
                        Top 10 Lyrics
                        </a>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem className={classes.listIcon}>
                        <SocialIcon url="http://instagram.com/"  network="instagram" style={{ height: 35, width: 35, margin: '0.2rem'}} />
                        <a href="http://instagram.com/" className={classes.anchor} target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </ListItem>
                    <ListItem className={classes.listIcon}>
                        <SocialIcon url="http://facebook.com/"  network="facebook" style={{ height: 35, width: 35, margin: '0.2rem'}} />
                        <a href="http://facebook.com/" className={classes.anchor} target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </ListItem>
                    <ListItem className={classes.listIcon}>
                        <SocialIcon url="http://github.com/"  network="github" style={{ height: 35, width: 35, margin: '0.2rem'}} bgColor="#000" />
                        <a href="http://github.com/" className={classes.anchor} target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: opened,
                })}
            >
                <div className={classes.drawerHeader}/>
                <Typography paragraph>
                    {routeResult}
                </Typography>
            </main>
        </div>
    );
};

export default NavBar;
