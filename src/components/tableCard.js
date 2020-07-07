import React from 'react'
import PropTypes from "prop-types"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import SearchIcon from '@material-ui/icons/Search';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

function TableCard(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.tableData.requests.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="table-card card">
      <div className="card-title">
        {props.cardTitle}
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="data table" size="small">
          <TableHead>
            <TableRow>
              {props.tableData.headers.map((item, index) => (
                <TableCell>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? props.tableData.requests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : props.tableData.requests
            ).map((request) => (
              <TableRow data-testid="body-row" key={request.name}>
                <TableCell component="th" scope="row">
                  <div className="request-name-container">
                    <AddIcon/>
                    {request.name}
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  {request.workflow}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  <div className="avatar-contaienr">
                    <Avatar alt={request.requestor.name} src={request.requestor.img} />
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  <div className="chip">
                    {request.status}
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  <div className="request-name-container">
                    {request.approvals.approvedCheck ? <CheckIcon style={{color: "green"}} /> : ""}
                    {request.approvals.approvedMag ? <SearchIcon style={{color: "var(--secondary-color)"}}/> : ""}
                    {request.approvals.approvedEye ? <VisibilityIcon style={{color: "var(--tertiary-color)"}}/> : ""}
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  <div className="days-container">
                    {request.daysInQues}
                  </div>
                </TableCell>
                { request.priority ? 
                  <TableCell component="th" scope="row">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={request.priority}
                    >
                      <MenuItem value={"low"}>Low</MenuItem>
                      <MenuItem value={"nomral"}>Normal</MenuItem>
                      <MenuItem value={"high"}>High</MenuItem>
                    </Select>
                  </TableCell>
                  :
                  ""
              }
            </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                count={props.tableData.requests.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
  }

  TableCard.propTypes = {
    cardTitle: PropTypes.string.isRequired,
    tableData: PropTypes.object.isRequired,
  }
  
  
  export default TableCard