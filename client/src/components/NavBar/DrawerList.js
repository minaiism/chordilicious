import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import {SocialIcon} from 'react-social-icons';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
    listIcon: {
        fontFamily: 'Montserrat, sans-serif',
        margin: '0.2rem'
    },
    facebookButton: {
        margin: '0.5rem'
    } ,
    anchor: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const DrawerList = () => {
    const classes = useStyles();

    return (<article>
            <Divider/>
            {/** Material UI's Drawer List **/}
            <List>
                    <ListItem className={classes.listIcon}>
                        <QueueMusicIcon/>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} href="about"
                              className={classes.anchor}>
                            About Chordilicious
                        </Link>
                    </ListItem>
                    <ListItem className={classes.listIcon}>
                        <FavoriteIcon/>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} href="favorites"
                              className={classes.anchor}>
                            My Favorites
                        </Link>
                    </ListItem>
                    <ListItem className={classes.listIcon}>
                        <VerticalAlignTopIcon/>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} href="top"
                              className={classes.anchor}>
                            Top 10 Lyrics
                        </Link>
                    </ListItem>
                </List>
            <Divider/>
                <List>
                    <ListItem className={classes.listIcon}>
                        <SocialIcon url="http://instagram.com/" network="instagram"
                                    style={{height: 35, width: 35, margin: '0.2rem'}}/>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} href="http://instagram.com/"
                              className={classes.anchor} target="_blank"
                              rel="noopener noreferrer">
                            Instagram
                        </Link>
                    </ListItem>
                    <ListItem className={classes.listIcon}>
                        <SocialIcon url="http://facebook.com/" network="facebook"
                                    style={{height: 35, width: 35, margin: '0.2rem'}}/>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} href="http://facebook.com/"
                              className={classes.anchor} target="_blank"
                              rel="noopener noreferrer">
                            Facebook
                        </Link>
                    </ListItem>
                    <ListItem className={classes.listIcon}>
                        <SocialIcon url="http://github.com/" network="github"
                                    style={{height: 35, width: 35, margin: '0.2rem'}} bgColor="#000"/>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} href="http://github.com/"
                              className={classes.anchor} target="_blank"
                              rel="noopener noreferrer">
                            Github
                        </Link>
                    </ListItem>
                </List>
            {/** The End of the List **/}
        </article>
    );
};

export default DrawerList;
