import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { brown, red } from '@material-ui/core/colors';
import { TestIds } from '../../../../Constants';

const SearchingButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[800],
    '&:hover': {
      backgroundColor: brown[500]
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
    fontFamily: 'Montserrat, sans-serif'
  }
}));

const SearchLyricsButton = ({ handleSearch }) => {
  const classes = useStyles();

  return (
    <article data-testid={TestIds.searchLyricsButtonArticleId}>
      <SearchingButton variant={'contained'} color={'primary'} className={classes.margin}
                       onClick={handleSearch} data-testid={TestIds.searchLyricsButtonId}>
        Search Lyrics
      </SearchingButton>
    </article>
  );
};

export default SearchLyricsButton;