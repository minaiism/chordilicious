import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SearchLyricsButton from './SearchLyricsButton';
import * as LyricService from '../../../../services/LyricService';
import SearchLyricsInput from './SearchLyricsInput';
import SearchLyricsResults from './SearchLyricsResults';
import {TestIds} from '../../../../Constants';
import FormControl from '@material-ui/core/FormControl';
import ErrorInfo from "../../ErrorInfo";

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
  const [error, setError] = useState(null);
  const [phrase, setPhrase] = useState('');
  const [lyrics, setLyrics] = useState([]);

  const handleInputChange = event => {
    setPhrase(event.target.value);
  };

  const handleSearch = () => {
    LyricService.search(phrase)
      .then(items => (setLyrics(items)))
      .catch((e) => setError(e));
  };

  return (
    <>
      <FormControl className={classes.container} noValidate autoComplete={'off'}
                   data-testid={TestIds.SEARCH_LYRICS_BAR_FORM_ID}>
        <SearchLyricsInput phrase={phrase} handleChange={handleInputChange}/>
        <SearchLyricsButton className={classes.input} handleSearch={handleSearch}/>
        <ErrorInfo error={error} content={<SearchLyricsResults lyrics={lyrics}/>}/>
      </FormControl>
    </>
  );
};

export default SearchLyricsBar;
