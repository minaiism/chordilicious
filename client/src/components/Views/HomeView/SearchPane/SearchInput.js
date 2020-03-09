import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/core/SvgIcon/SvgIcon';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
    fontFamily: 'Montserrat, sans-serif'
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const SearchInput = ({ dataTestId, searchTerm, changeSearchTerm }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Input
        className={classes.input}
        id={'input-with-icon-adornment'}
        startAdornment={
          <InputAdornment position={'start'}>
            <SearchIcon/>
          </InputAdornment>
        }
        onChange={changeSearchTerm}
        value={searchTerm}
        data-testid={dataTestId}
      />
    </React.Fragment>
  );
};

export default SearchInput;
