import React from 'react';
import { Grid } from '@mui/material';
import { classes } from './ChatBotStyle';
import { Link } from 'react-router-dom';

export const steps = [
  {
    id: '0',
    message: 'Welcome our festival 32',
    trigger: '2',
  },
  {
    id: '2',
    message: 'What is your name?',
    trigger: '3',
  },
  {
    id: '3',
    user: true,
    trigger: '4',
  },
  {
    id: '4',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '5',
  },
  {
    id: '5',
    message: ' Do you need some help?',
    trigger: '6',
  },
  {
    id: '6',
    options: [
      { value: 1, label: 'YES', trigger: '7' },
      { value: 2, label: 'NO, THANK YOU', trigger: '8' },
    ],
  },
  {
    id: '8',
    message: 'YOUR WELCOME, HAVE A NICE DAY',
    trigger: '5',
  },
  {
    id: '7',
    message: 'Select the page that you want to redirect',
    trigger: '9',
  },
  {
    id: '9',
    component: (
      <Grid sx={classes.containerCoponent}>
        <Link to='/home'>
          <Grid>Home</Grid>
        </Link>
        <Link to='/about'>
          <Grid>About</Grid>
        </Link>

        <Link to='/tickets'>
          <Grid>Tickets</Grid>
        </Link>
        <Link to='/program'>
          <Grid>Program</Grid>
        </Link>
      </Grid>
    ),
    trigger: '10',
  },
  {
    id: '10',
    message: 'I will redirect you to the page when you clicked it',
    trigger: '14',
  },
  {
    id: '14',
    message: 'More Information about the fesitval',
    trigger: '15',
  },
  {
    id: '15',
    options: [
      { value: 1, label: 'YES', trigger: '11' },
      { value: 2, label: 'NO, THANK YOU', trigger: '8' },
    ],
  },
  {
    id: '11',
    options: [
      { value: 1, label: 'Info About Ticket', trigger: '12' },
      { value: 2, label: 'Info About Program', trigger: '13' },
    ],
  },
  {
    id: '12',
    component: (
      <Grid>
        <Grid sx={classes.tikcetInfo}>
          <Grid>| Bird € 20</Grid>
          <Grid>| Regular € 30</Grid>
          <Grid>| Parking € 10</Grid>
          <Grid>|Locker € 5</Grid>
          <Grid>| Weekend € 25</Grid>
        </Grid>
        <Grid sx={{ textAlign: 'center', fontFamily: 'revert' }}>
          <Link to='/tickets'>
            <Grid>Tickets</Grid>
          </Link>
        </Grid>
      </Grid>
    ),
    trigger: '11',
  },
  {
    id: '13',
    component: (
      <Grid>
        <Grid sx={classes.programInfo}>
          <Grid>Soul: Area 2</Grid>
          <Grid>Rock: Area 3</Grid>
          <Grid>Tech: Area 1</Grid>
          <Grid>Pop : Area 3</Grid>
        </Grid>
        <Grid sx={{ textAlign: 'center', fontFamily: 'revert' }}>
          <Link to='/program'>
            <Grid>Program</Grid>
          </Link>
        </Grid>
      </Grid>
    ),
    trigger: '11',
  },
];
