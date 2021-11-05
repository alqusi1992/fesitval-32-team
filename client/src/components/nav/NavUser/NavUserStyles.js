import { makeStyles } from '@mui/styles/';
export const useStyles = makeStyles((theme, prop) => {
  return {
    userIcon: {
      fontSize: '35px',
    },
    listItemBtn: {
      '&&': {
        color: ({ drawer }) => (drawer ? '#fff' : '#000'),
        fontWeight: '900',
        transition: 'transform .3s',
        paddingLeft: '14px',
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
        '&:hover': {
          transform: 'translateX(4px)',
          backgroundColor: 'transparent ',
        },
      },
    },
  };
});
