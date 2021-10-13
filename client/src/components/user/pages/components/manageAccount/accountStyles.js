import { makeStyles } from '@mui/styles/';

export const useStyles = makeStyles((theme, prop) => {
  return {
    appBar: {
      '&&': {
        marginTop: '82px',
        zIndex: 0,
        backgroundColor: '#fff',
        boxShadow: 'none',
      },
    },
    drawer: {
      '&&': {
        '& .MuiDrawer-paper': {
          top: '82px',
          zIndex: 0,
        },
      },
    },
  };
});
