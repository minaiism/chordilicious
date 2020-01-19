import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useUserContext } from '../../Context/Context';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  tableItem:{
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'left'
  },
  avatar:{
    display: 'flex',
  },
  favorites:{
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    '&:hover, &:focus': {
      textDecoration: 'none',
    },
  }
});

const UserProfilePane = () => {
  const classes = useStyles();
  const { user } = useUserContext();

  return (<article>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className={classes.tableItem}>My Favorites</StyledTableCell>
                  <StyledTableCell align="right" className={classes.tableItem}>Name</StyledTableCell>
                  <StyledTableCell align="right" className={classes.tableItem}>Email</StyledTableCell>
                  <StyledTableCell align="right" className={classes.tableItem}>Avatar</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" className={classes.tableItem}>
                   <Button variant="contained" color="primary"> <Link href="favorites" className={classes.favorites}>Favorites</Link></Button>
                  </StyledTableCell>
                  <StyledTableCell align="right" className={classes.tableItem}>{user.name}</StyledTableCell>
                  <StyledTableCell align="right" className={classes.tableItem}>{user.email}</StyledTableCell>
                  <StyledTableCell align="right" className={classes.tableItem}>
                    <Avatar alt="avatar" src={user.avatar} className={classes.avatar}/>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
    </article>)
};

export default UserProfilePane;
