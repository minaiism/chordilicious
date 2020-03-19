import React from 'react';
import clsx from 'clsx';
import InfoIcon from '@material-ui/icons/Info';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import makeStyles from '@material-ui/core/styles/makeStyles';

const variantIcon = {
  info: InfoIcon
};

const useStyles1 = makeStyles(theme => ({
  info: {
    backgroundColor: theme.palette.primary.main
  },
  icon: {
    fontSize: 22
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex'
  }
}));

const SnackBarPaneWrapper = props => {
  const classes = useStyles1();
  const { className, message, variant } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)}/>
          {message}
        </span>
      }
    />
  );
};

const useStyles2 = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '1rem'
  },
  snackBar: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    width: '40%',
    padding: '1.5rem'
  }
}));

//TODO: import error from context, check if not null, render error or warning, error should consist of error code and error message
const NoAccessSnackBar = () => {
  const classes = useStyles2();

  return (
    <article className={classes.container}>
      <SnackBarPaneWrapper
        variant={'info'}
        className={classes.snackBar}
        message={'Sign in to see your profile'}
      />
    </article>
  );
};

export default NoAccessSnackBar;