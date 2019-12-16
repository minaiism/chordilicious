import React from 'react';
import { makeStyles } from '@material-ui/core';
import Context from '../../Context/Context';
import SnackBarPane from './SnackBarPane/SnackBarPane';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Favorites = () => {
  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    img: {
      width: '80%',
      height: '80%'
    },
    text: {
      fontFamily: 'Montserrat, sans-serif',
      padding: '0.3rem',
      textTransform: 'uppercase'
    }
  }));

  const classes = useStyles();
  return (
    <Context.Consumer>
      {({ FBUserSession }) => FBUserSession != null ? (
          <article className={classes.container}>
            <Avatar className={classes.text} src={FBUserSession.picture.data.url}>
            </Avatar>
            <Typography className={classes.text}>
              {FBUserSession.name}'s Favorites
            </Typography>
            <Typography>{FBUserSession.favorites}</Typography>
          </article>) :
        (<article>
          <SnackBarPane/>
        </article>)
      }
    </Context.Consumer>
  );
};


export default Favorites;
