import { makeStyles } from '@mui/styles/';

export const useStyles = makeStyles((theme, prop) => {
  return {
    box: {
      '&&': {
        display: 'flex',
        position: 'relative',
        maxWidth: '1190px',
      },
    },
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
          position: 'absolute',
          zIndex: 0,
        },
      },
    },
    listItem: {
      '&&': {
        [theme.breakpoints.down('sm')]: {
          padding: '8px 16px',
        },
      },
    },
    listIcon: {
      '&&': {
        color: 'rgba(0, 0, 0, 0.83)',
      },
    },
    bottomToolbar: {
      '&&': {
        maxWidth: '500px',
        margin: '0 auto',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
          marginLeft: '50px',
        },
      },
    },
    accountTitle: {
      '&&': {
        [theme.breakpoints.down('md')]: {
          fontSize: '28px',
        },
        [theme.breakpoints.between('xs', 'xss')]: {
          fontSize: '24px',
        },
      },
    },
    mainContainer: {
      '&&': {
        // [theme.breakpoints.down('md')]: {
        //   fontSize: '28px',
        // },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
      },
    },
    formmUpdate: {
      '&&': {
        textAlign: 'center',
        padding: '40px',
        margin: '30px',
      },
    },
    buttonUpdate: {
      '&&': {
        display: 'block',
        margin: '30px auto',
      },
    },
  };
});
