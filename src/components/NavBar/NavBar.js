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
import useTheme from "@material-ui/core/styles/useTheme";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import Home from "../Routing/Home/Home";
import Top from "../Routing/Top/Top";
import Link from "@material-ui/core/Link";
import DrawerList from "./DrawerList";

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
    facebookButton: {
        margin: '0.5rem'
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
    return (<article className={classes.container}>
        {/** Material UI's Menu **/}
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
                        <Link style={{textDecoration: 'none', color: 'inherit'}} href="home"
                              className={classes.anchor}>
                            CHORDILICIOUS
                        </Link>
                        <MusicNoteIcon/>
                    </Typography>
                    <article>
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
                            {/**Appbar Links**/}
                            {/**First Link **/}
                            <Link style={{textDecoration: 'none', color: 'inherit'}} className={classes.anchor}>
                                <MenuItem onClick={handleClose}>
                                    {/**Facebook Authentication Component**/}
                                    <Facebook className={classes.facebookButton}/>
                                </MenuItem>
                            </Link>
                            {/**Second Link **/}
                            <Link style={{textDecoration: 'none', color: 'inherit'}} href="favorites"
                                  className={classes.anchor}>
                                <MenuItem onClick={handleFavorites} className={classes.favorites}>
                                    <FavoriteIcon className={classes.anchor}/>
                                    My Favorites
                                </MenuItem>
                            </Link>
                            {/**The End of Links**/}
                        </Menu>
                    </article>
                </Toolbar>
            </AppBar>
            {/** End of Material UI's Menu**/}

        {/** Material UI's Side Drawer**/}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={opened}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <article className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <KeyboardBackspaceIcon/> : <ArrowRightAltIcon/>}
                    </IconButton>
                </article>
                {/** Link Drawer's List [separate component]**/}
                <DrawerList/>
            </Drawer>
            {/** End of Material UI's Drawer **/}
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: opened,
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

export default NavBar;
