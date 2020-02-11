import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import SearchButton from '../../Buttons/SearchButton/SearchButton';
import { search } from './SongService';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { CircularProgress } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
  listItem: {
    fontSize: '1.2rem',
    textTransform: 'none',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    margin: '0 1rem 0 1rem'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  listIcon:{
    fontSize:'1.2rem',
    cursor: 'pointer'
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
    search(searchTerm)
      .then(songs => (setSearchResult(songs)));
    setSearchResult(searchResult);
  };

  return loading ? (
    <section>
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
      <List className={classes.listContainer}>
        {searchResult.map(item => (
          <ListItem className={classes.listItem} key={item.id}>
            {item.title}
            <FavoriteBorderIcon className={classes.listIcon}/>
          </ListItem>
        ))}
      </List>
    </form>
    </section>
  ) : (<CircularProgress/>);
};

export default SearchBar;
