import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { useState } from 'react';
import Artist from './Artist';
import { useStyles } from './ScheduleStyles';

export default function Row({ genre, artists }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <TableRow
        sx={{ '& > *': { borderBottom: 'unset' } }}
        onClick={() => setOpen(!open)}
        className={classes.collapse}
      >
        <TableCell className={classes.genre} component='th' scope='row'>
          <IconButton aria-label='expand row' size='large'>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <span className={classes.collapse}>{genre.genre}</span>
        </TableCell>
        <TableCell component='th' scope='row' className={classes.genre}>
          {genre.area}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                {genre.genre}
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Artist Name</TableCell>
                    <TableCell>URL</TableCell>
                    <TableCell align='right'>Start Time</TableCell>
                    <TableCell align='right'>End Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {artists.map(
                    (artist) =>
                      artist.genre === genre.genre && (
                        <Artist artist={artist} key={artist._id} />
                      ),
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
