import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
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
  listIcon: {
    fontSize: '1.2rem',
    cursor: 'pointer'
  }
}));

const SearchResults = ({ searchResult }) => {
  const classes = useStyles();

  return (
    <article>
      <List className={classes.listContainer}>
        {searchResult.map(item => (
          <ListItem className={classes.listItem} key={item.id}>
            {item.title}
            <FavoriteBorderIcon className={classes.listIcon}/>
          </ListItem>
        ))}
      </List>
    </article>
  );
};

export default SearchResults;
