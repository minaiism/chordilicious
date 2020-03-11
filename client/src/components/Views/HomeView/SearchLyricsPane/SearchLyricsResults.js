import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { TestIds } from '../../../../Constants';

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

const SearchLyricsResults = ({ lyrics }) => {
  const classes = useStyles();

  return (
    <article data-testid={TestIds.searchLyricsResultsArticleId}>
      <List className={classes.listContainer} data-testid={TestIds.searchLyricsResultsListId}>
        {lyrics.map(item => (
          <ListItem className={classes.listItem} key={item.id} data-testid={TestIds.searchLyricsResultsListItemId}>
            {item.title}
            <FavoriteBorderIcon className={classes.listIcon}/>
          </ListItem>
        ))}
      </List>
    </article>
  );
};

export default SearchLyricsResults;