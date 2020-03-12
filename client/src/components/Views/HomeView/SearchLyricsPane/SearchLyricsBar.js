import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchLyricsButton from './SearchLyricsButton';
import * as LyricService from '../../../../services/LyricService';
import SearchLyricsInput from './SearchLyricsInput';
import SearchLyricsResults from './SearchLyricsResults';
import { TestIds } from '../../../../Constants';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    flexDirection: 'column'
  }
}));

const SearchLyricsBar = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phrase, setPhrase] = useState('');
  const [lyrics, setLyrics] = useState([]);

  const handleInputChange = event => {
    setPhrase(event.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    LyricService.search(phrase)
      .then(items => (setLyrics(items)))
      .catch((e) => setError(e));

    setLyrics(lyrics);
  };

  return loading && error === null ? (
    <>
      <FormControl className={classes.container} noValidate autoComplete={'off'}
                   data-testid={TestIds.searchLyricsBarFormId}>
        <SearchLyricsInput phrase={phrase} handleChange={handleInputChange}/>
        <SearchLyricsButton className={classes.input} handleSearch={handleSearch}/>
        <SearchLyricsResults lyrics={lyrics}/>
      </FormControl>
    </>
  ) : (<>{error.code}:{error.message}</>);
};

export default SearchLyricsBar;
