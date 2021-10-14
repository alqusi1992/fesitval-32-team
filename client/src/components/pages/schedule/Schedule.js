import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Genre from './Genre';
import Paper from '@mui/material/Paper';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ClockPicker from '@mui/lab/ClockPicker';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useValue } from '../../../context/globalContext';

export default function Schedule() {
  const { dispatch } = useValue();
  const [scheduleData, setScheduleData] = useState({ genre: [], artists: [] });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'START_LOADING' });
      const url =
        process.env.REACT_APP_SERVER_URL + '/schedule/6155a68b2a30ca8cc74de40f';
      const response = await fetch(url);
      const data = await response.json();

      if (data?.success) {
        const genre = [];
        const artists = [];
        data.result.forEach((area) => {
          const tempGenres = [];
          area.artists.forEach((artist) => {
            tempGenres.push(artist.genre);
            artists.push(artist);
          });
          const genres = [...new Set(tempGenres)];
          genres.forEach((genreName) => {
            genre.push({ genre: genreName, area: area.areaName });
          });
        });
        setScheduleData({ genre, artists });
        dispatch({ type: 'END_LOADING' });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ClockPicker date={moment()} onChange={() => {}} />
      </LocalizationProvider>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell>Genre</TableCell>
              <TableCell>Area</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleData.genre.map((genre, index) => (
              <Genre genre={genre} key={index} artists={scheduleData.artists} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
