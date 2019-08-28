import React from 'react';
import { makeStyles } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';

const FBUserProfile = props => {
  const primary = red[700];
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    profileContainer: {
      padding: '3rem'
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    fieldContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'Montserrat, sans-serif'
    },
    imgContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      width: '250px',
      height: '150px',
      opacity: '0.7',
      padding: '1rem',
      background: primary,
      '&:hover': {
        opacity: '1',
        transition: 'opacity .4s ease-in',
        '-webkit-transform': 'scale(1.1)',
        '-ms-transform': 'scale(1.1)',
        transform: 'scale(1.1)',
        '-webkit-box-shadow': '3px 3px 5px 6px #ccc',
        '-moz-box-shadow': '3px 3px 5px 6px #ccc',
        'box-shadow': '3px 3px 5px 6px #ccc'
      },
      borderRadius: '50%'
    },
    field: {
      padding: '0.2rem'
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <section className={classes.profileContainer}>
        <figure className={classes.imgContainer}>
          <img
            src="https://i.ytimg.com/vi/GDA2CBvwdJQ/maxresdefault.jpg"
            alt="avatar"
            className={classes.img}
          />
        </figure>
        <section className={classes.fieldContainer}>
          <article className={classes.textContainer}>
            <FaceIcon />
            <p className={classes.field}>Name {props.name} </p>
          </article>
          <article className={classes.textContainer}>
            <EmailIcon />
            <p className={classes.field}>Email {props.email} </p>
          </article>
          <article className={classes.textContainer}>
            <InfoIcon />
            <p className={classes.field}>About me {props.email} </p>
          </article>
        </section>
      </section>
    </div>
  );
};

export default FBUserProfile;
