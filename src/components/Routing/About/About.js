import React from 'react';
import {makeStyles} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const FBUserProfile = props => {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        },
        artistHeader: {
            padding: '1rem',
            margin: '0.5rem',
            fontFamily: 'Montserrat, sans-serif'
        },
        verseHeader: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700
        },
        verseContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0.3rem',
        },
        verseText: {
            padding: '0.2rem',
            fontFamily: 'Montserrat, sans-serif'
        }
    }));

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h4" className={classes.artistHeader}>Name of an artist</Typography>
            <Typography variant="h7" className={classes.verseHeader}>Verse</Typography>
            <Typography variant="h8" className={classes.verseContainer}>
                <article className={classes.verseContainer}>
                    <Typography variant="body2" className={classes.verseText}>You know it & I know it</Typography>
                    <Typography variant="body2" className={classes.verseText}>I'm gonna be a star</Typography>
                    <Typography variant="body2" className={classes.verseText}>You wont, you wont get me very
                        far</Typography>
                    <Typography variant="body2" className={classes.verseText}>Don't say hello</Typography>
                    <Typography variant="body2" className={classes.verseText}>It's already time to go</Typography>
                    <Typography variant="body2" className={classes.verseText}>Oh the wind is carrying me
                        home</Typography>
                    <Typography variant="body2" className={classes.verseText}>me home me home again</Typography>
                </article>
            </Typography>

            <Typography variant="h7" className={classes.verseHeader}>Chorus</Typography>
            <Typography variant="h8" className={classes.verseContainer}>
                <article className={classes.verseContainer}>
                    <Typography variant="body2" className={classes.verseText}>You know it & I know it</Typography>
                    <Typography variant="body2" className={classes.verseText}>I'm gonna be a star</Typography>
                    <Typography variant="body2" className={classes.verseText}>You wont, you wont get me very
                        far</Typography>
                    <Typography variant="body2" className={classes.verseText}>Don't say h
                        variant="body1"ello</Typography>
                    <Typography variant="body2" className={classes.verseText}>It's already time to go</Typography>
                    <Typography variant="body2" className={classes.verseText}>Oh the wind is carrying me
                        home</Typography>
                    <Typography variant="body2" className={classes.verseText}>me home me home again</Typography>
                </article>
            </Typography>

            <Typography variant="h7" className={classes.verseHeader}>Verse</Typography>
            <Typography variant="h8" className={classes.verseContainer}>
                <article className={classes.verseContainer}>
                    <Typography variant="body2" className={classes.verseText}>You know it & I know it</Typography>
                    <Typography variant="body2" className={classes.verseText}>I'm gonna be a star</Typography>
                    <Typography variant="body2" className={classes.verseText}>You wont, you wont get me very
                        far</Typography>
                    <Typography variant="body2" className={classes.verseText}>Don't say h
                        variant="body1"ello</Typography>
                    <Typography variant="body2" className={classes.verseText}>It's already time to go</Typography>
                    <Typography variant="body2" className={classes.verseText}>Oh the wind is carrying me
                        home</Typography>
                    <Typography variant="body2" className={classes.verseText}>me home me home again</Typography>
                </article>
            </Typography>

            <Typography variant="h7" className={classes.verseHeader}>Bridge</Typography>
            <Typography variant="h8" className={classes.verseContainer}>
                <article className={classes.verseContainer}>
                    <Typography variant="body2" className={classes.verseText}>You know it & I know it</Typography>
                    <Typography variant="body2" className={classes.verseText}>I'm gonna be a star</Typography>
                    <Typography variant="body2" className={classes.verseText}>You wont, you wont get me very
                        far</Typography>
                    <Typography variant="body2" className={classes.verseText}>Don't say h
                        variant="body1"ello</Typography>
                    <Typography variant="body2" className={classes.verseText}>It's already time to go</Typography>
                    <Typography variant="body2" className={classes.verseText}>Oh the wind is carrying me
                        home</Typography>
                    <Typography variant="body2" className={classes.verseText}>me home me home again</Typography>
                </article>
            </Typography>

            <Typography variant="h7" className={classes.verseHeader}>Chorus</Typography>
            <Typography variant="h8" className={classes.verseContainer}>
                <article className={classes.verseContainer}>
                    <Typography variant="body2" className={classes.verseText}>You know it & I know it</Typography>
                    <Typography variant="body2" className={classes.verseText}>I'm gonna be a star</Typography>
                    <Typography variant="body2" className={classes.verseText}>You wont, you wont get me very
                        far</Typography>
                    <Typography variant="body2" className={classes.verseText}>Don't say h
                        variant="body1"ello</Typography>
                    <Typography variant="body2" className={classes.verseText}>It's already time to go</Typography>
                    <Typography variant="body2" className={classes.verseText}>Oh the wind is carrying me
                        home</Typography>
                    <Typography variant="body2" className={classes.verseText}>me home me home again</Typography>
                </article>
            </Typography>
        </div>
    );
};

export default FBUserProfile;
