import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Pagination from '@material-ui/lab/Pagination';
import styles from './styles';

const PaginationControl = (props) => {
  const { classes, pages, page, onHandleChangePage } = props;

  return (
    <div className={classes.wrapper}>
      <Pagination count={pages} page={page} onChange={onHandleChangePage} />
    </div>
  );
}

export default compose(withStyles(styles))(PaginationControl);
