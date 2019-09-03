import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

const routes = {
    '/': () => "Nothing much",
    '/about': () => <About/>,
    '/favorites': () => <Favorites/>,
    '/user-profile': () => <FBUserProfile/>
};

const primary = red[700];
const useStyles = makeStyles(theme => ({
    root: {
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

    }
}));

const NavBar = () => {
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

    const routeResult = useRoutes(routes);
    return (

        <div className={classes.root}>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        <a href="about" className={classes.anchor}>
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
            {routeResult}
        </div>
    );
};

export default NavBar;
