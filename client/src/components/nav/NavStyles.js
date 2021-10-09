import { makeStyles } from '@mui/styles/';

export const useStyles = makeStyles((theme, prop) => {
  return {
    root: {
      '& .react-multi-carousel-item': {
        padding: '10px',
      },
    },
    appBar: {
      '&&': {
        backgroundColor: ({ drawer }) => (drawer ? '#000' : '#fff'),
        height: '82px',
        justifyContent: 'center',
        transition: 'all 0.5s ease-in-out',
        [theme.breakpoints.up('mdlg')]: {
          alignItems: 'center',
        },
      },
    },
    toolBar: {
      '&&': {
        [theme.breakpoints.up('md')]: {
          margin: '0 20px',
          maxWidth: '1190px',
        },
        [theme.breakpoints.up('mdlg')]: {
          width: '1190px',
        },
      },
    },
    logoContainer: {
      '&&': {
        alignItems: 'center',
        flex: 1,
        [theme.breakpoints.up('lg')]: {
          marginLeft: '5px',
        },
      },
    },
    logo: {
      '&&': {
        color: ({ drawer }) => (drawer ? '#fff' : '#000'),
        lineHeight: '1',
        cursor: 'pointer',
        transition: 'transform .3s',
        '&:hover': {
          transform: 'translateX(4px)',
          transition: 'all 0.3s ease-in-out',
          backgroundColor: 'transparent ',
        },
      },
    },
    navDate: {
      '&&': {
        width: '250px',
        padding: '0px',
        [theme.breakpoints.up('s')]: {
          width: '150px',
          paddingLeft: '10px',
        },
      },
    },
    dateText: {
      '&&': {
        lineHeight: '1.2',
        color: ({ drawer }) => (drawer ? '#fff' : '#000'),
      },
    },
    listItemContainer: {
      '&&': {
        justifyContent: 'flex-end',
        flex: 1,
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
      },
    },
    listItemBtn: {
      '&&': {
        color: ({ drawer }) => (drawer ? '#fff' : '#000'),
        fontWeight: '900',
        transition: 'transform .3s',
        '&:hover': {
          transform: 'translateX(4px)',
          transition: 'all 0.3s ease-in-out',
          backgroundColor: 'transparent ',
        },
      },
    },
    iconBtn: {
      '&&': {
        marginRight: '0',
      },
    },
    iconButtonContainer: {
      '&&': {
        backgroundColor: '#610527',
        marginLeft: '20px',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        transition: 'transform .5s',
        '&:hover': {
          backgroundColor: '#56555f',
          transform: 'scale(1.05)',
        },
      },
    },
    listBtn: {
      '&&': {
        color: `${theme.palette.secondary.main}`,
        fontSize: '36px',
      },
    },
    drawerContainer: {
      '&&': {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: '9999',
        opacity: ({ drawer }) => (drawer ? '1' : '0'),
        transition: 'opacity .6s,transform .6s',
        transform: ({ drawer }) =>
          drawer ? 'translateY(0px)' : 'translateY(-1200px)',
        backgroundColor: theme.palette.primary.main,
      },
    },
    drawerDropDownOuter: {
      '&&': {
        justifyContent: 'center',
      },
    },
    drawerDropDown: {
      '&&': {
        height: '50vh',
        maxWidth: '600px',
        margin: '20px',
      },
    },
    drawerDropDownInner: {
      '&&': {
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'transform .3s',
        '&:hover': {
          transform: 'translateX(4px)',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        },
      },
    },
  };
});
