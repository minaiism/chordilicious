import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import SearchButton from '../../Buttons/SearchButton/SearchButton';
import { searchSong } from './GeniusService';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    flexDirection: 'column'
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  listItem:{
    fontSize: '2rem',
    textTransform: 'lowercase'
  }
}));

const SearchBar = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    searchSong('/search?q=' + searchTerm)
      .then(songs => (setSearchResult(songs)));
    const results = searchResult.map(element =>
      element.toLowerCase().includes(searchTerm)
    );
    setSearchResult(results);
  };

  return loading ? (
    <form className={classes.container} noValidate autoComplete="off">
      <Input
        className={classes.input}
        id={'input-with-icon-adornment'}
        startAdornment={
          <InputAdornment position={'start'}>
            <SearchIcon/>
          </InputAdornment>
        }
        onChange={handleChange}
        value={searchTerm}
      />
      <SearchButton className={classes.input} handleSearch={handleSearch}/>
      <List>
        {searchResult.map(item => (
          <ListItem className={classes.listItem} key={item.id}>
            {item.title}
          </ListItem>
        ))}
      </List>
    </form>
  ) : (<CircularProgress/>);
};

export default SearchBar;
