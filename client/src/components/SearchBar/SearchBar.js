import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import SearchButton from "../Buttons/SearchButton/SearchButton";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        flexDirection: 'column'
    },
    input: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

const SearchBar = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        input: ''
    });

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Input
                className={classes.input}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
            <SearchButton className={classes.input}/>
        </form>
    );
};

export default SearchBar;