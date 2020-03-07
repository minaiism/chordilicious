import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();
const PaginationPane = () => {
  const [offset, setOffset] = useState(0);

  const handleClick = (offset) => {
    setOffset({ offset });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Pagination
        limit={15}
        offset={offset}
        total={100}
        onClick={(e, offset) => handleClick(offset)}
        otherPageColor={'secondary'}
        size={'large'}
      />
    </MuiThemeProvider>
  );
};

export default PaginationPane;