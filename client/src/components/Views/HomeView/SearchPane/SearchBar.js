import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchButton from './SearchButton';
import * as LyricService from '../../../../services/LyricService';
import SearchInput from './SearchInput';
import { TestIds } from '../../../../Constants';
import SearchResults from './SearchResults';

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

const SearchBar = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const changeSearchTerm = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    LyricService.search(searchTerm)
      .then(lyrics => (setSearchResult(lyrics)))
      .catch((e) => setError(e));

    setSearchResult(searchResult);
  };

  return loading && error === null ? (
    <section>
      <form className={classes.container} noValidate autoComplete="off">
        <SearchInput dataTestId={TestIds.lyricSearchInputName} searchTerm={searchTerm}
                     changeSearchTerm={changeSearchTerm}/>
        <SearchButton dataTestId={TestIds.searchLyricButton} className={classes.input} handleSearch={handleSearch}/>
        <SearchResults searchResult={searchResult}/>
      </form>
    </section>
  ) : (<div>{error.code}:{error.message}</div>);
};

export default SearchBar;
