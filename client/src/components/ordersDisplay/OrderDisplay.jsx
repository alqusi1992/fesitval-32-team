import * as React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';

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

export default function OrderDisplay({ order }) {
  const ticketsData = order.tickets.map((ticket) => {
    return {
      _id: ticket._id,
      typeName: ticket.typeName,
      quantity: ticket.quantity,
      price: ticket.price,
    };
  });
  const quantitySum = ticketsData.reduce(
    (acc, value) => acc + value.quantity,
    0
  );
  const priceSum = ticketsData.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
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
            <StyledTableCell align='right'>{quantitySum}</StyledTableCell>
            <StyledTableCell align='right'>€ {priceSum}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
