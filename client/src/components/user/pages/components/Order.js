import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { DownloadButton } from '../../../downloadButton/DownloadButton';

export const Order = ({ order }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#ccc',
      color: 'black',
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
  const { totalQty, totalPrice } = order.tickets.reduce(
    (total, ticket) => {
      total.totalQty += ticket.quantity;
      total.totalPrice += ticket.price;
      return total;
    },
    { totalQty: 0, totalPrice: 0 }
  );
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 300, margin: '30px', width: '80%' }}
        aria-label='customized table'
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Number:</StyledTableCell>
            <StyledTableCell align='right'>{order?._id}</StyledTableCell>
            <StyledTableCell align='right'>
              <DownloadButton order={order} />
            </StyledTableCell>
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
          {order.tickets.map((ticket) => (
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
            <StyledTableCell align='right'>{totalQty}</StyledTableCell>
            <StyledTableCell align='right'>€{totalPrice}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
