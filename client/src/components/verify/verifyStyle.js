import { makeStyles } from '@mui/styles/';

export const useStyles = makeStyles((theme, prop) => {
  return {
    verifyText: {
      '&&': {
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
          fontSize: '14px',
          justifyContent: 'center',
        },
      },
    },
    verifyButton: {
      '&&': {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('md')]: {
          fontSize: '14px',
          jusitfyContent: 'center',
          width: 'auto',
        },
      },
    },
  };
});
