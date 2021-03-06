import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { TestIds } from '../../../../Constants';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    fontFamily: 'Montserrat, sans-serif',
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const SearchLyricsInput = ({ phrase, handleChange }) => {
  const classes = useStyles();

  return (
    <article data-testid={TestIds.SEARCH_LYRICS_INPUT_ARTICLE_ID}>
      <Input
        className={classes.input}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        onChange={handleChange}
        value={phrase}
        inputProps={{ 'data-testid': TestIds.SEARCH_LYRICS_INPUT_ID }}
      />
    </article>
  );
};

SearchLyricsInput.propTypes = {
  phrase: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchLyricsInput;
