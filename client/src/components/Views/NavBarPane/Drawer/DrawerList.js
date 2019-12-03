import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import { SocialIcon } from 'react-social-icons';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
    listIcon: {
        fontFamily: 'Montserrat, sans-serif',
        margin: '0.2rem',
        padding: '0.4rem'
    },
    listContainer:{
        display: 'flex',
        padding: 0
    },
    listSocialIcon:{
        margin: 0
    },
    facebookButton: {
        margin: '0.5rem'
    } ,
    anchor: {
        textDecoration: 'none',
        color: 'inherit',
    }
}));

const DrawerList = () => {
    const classes = useStyles();

    return (<div>
            <Divider/>
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
                            Top 10 Chords
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
                <List className={classes.listContainer}>
                    <ListItem className={classes.listSocialIcon}>
                        <SocialIcon url="http://instagram.com/" network="instagram" target="_blank"
                                    style={{height: 35, width: 35, margin: '0.2rem'}}/>
                    </ListItem>
                    <ListItem className={classes.listSocialIcon}>
                        <SocialIcon url="http://facebook.com/" network="facebook" target="_blank"
                                    style={{height: 35, width: 35, margin: '0.2rem'}}/>
                    </ListItem>
                    <ListItem className={classes.listSocialIcon}>
                        <SocialIcon url="http://github.com/" network="github" target="_blank"
                                    style={{height: 35, width: 35, margin: '0.2rem'}} bgColor="#000"/>
                    </ListItem>
                </List>
        </div>
    );
};

export default DrawerList;
