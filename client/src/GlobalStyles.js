import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  return {};
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      s: 450,
      sm: 600,
      md: 900,
      mdlg: 1190,
      lg: 1200,
      xl: 1536,
    },
  },
});
