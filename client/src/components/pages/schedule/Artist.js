import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import moment from 'moment';

export default function Artist({ artist }) {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {artist.name}
      </TableCell>
      <TableCell>
        <a href={artist.url} target='_blank' rel='noreferrer'>
          {artist.url}
        </a>
      </TableCell>
      <TableCell align='right'>
        {moment(artist.startTime).format('YYYY-MM-DD H:MM')}
      </TableCell>
      <TableCell align='right'>
        {moment(artist.endTime).format('YYYY-MM-DD H:MM')}
      </TableCell>
    </TableRow>
  );
}
