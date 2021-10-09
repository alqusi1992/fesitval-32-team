import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';

export const Order = ({ order }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const ticketsData = [
    {
      _id: 123,
      typeName: 'scbj',
      quantity: 2,
      price: 130,
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Number:</StyledTableCell>
            <StyledTableCell align='right'>123</StyledTableCell>
            <StyledTableCell align='right'>Download</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>Ticket Type</StyledTableCell>
            <StyledTableCell align='right'>Quantity</StyledTableCell>
            <StyledTableCell align='right'>Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ticketsData.map((ticket) => (
            <StyledTableRow key={ticket._id}>
              <StyledTableCell component='th' scope='row'>
                {ticket.typeName}
              </StyledTableCell>
              <StyledTableCell align='right'>{ticket.quantity}</StyledTableCell>
              <StyledTableCell align='right'>€ {ticket.price}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              Total:
            </StyledTableCell>
            <StyledTableCell align='right'>22</StyledTableCell>
            <StyledTableCell align='right'>€ 10</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
