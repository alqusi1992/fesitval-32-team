import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
      <TableCell align='right'>{artist.startTime}</TableCell>
      <TableCell align='right'>{artist.endTime}</TableCell>
    </TableRow>
  );
}
