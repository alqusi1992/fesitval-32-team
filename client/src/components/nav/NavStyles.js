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
        height: '100px',
        justifyContent: 'center',
        transition: 'all 0.5s ease-in-out',
        [theme.breakpoints.up('mdlg')]: {
          alignItems: 'center',
        },
      },
    },
    toolBar: {
      '&&': {
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]: {
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
        maxWidth: '330px',
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
        fontFamily: '"Courgette", cursive',
        fontSize: '1.5rem',
        color: ({ drawer }) => (drawer ? '#fff' : '#000'),
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
        [theme.breakpoints.up('lg')]: {
          marginLeft: '5px',
        },
        transition: 'transform .3s',
        '&:hover': {
          transform: 'translateX(4px)',
        },
      },
    },

    navDate: {
      '&&': {
        maxWidth: '160px',
        padding: '0px',
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
        [theme.breakpoints.up('s')]: {
          paddingLeft: '10px',
        },
      },
    },
    dateText: {
      '&&': {
        lineHeight: '1.2',
        color: ({ drawer }) => (drawer ? '#fff' : '#000'),
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
      },
    },
    listItemContainer: {
      '&&': {
        justifyContent: 'flex-end',
        flex: 1,
      },
    },
    listItemBtn: {
      '&&': {
        padding: '6px 0',
        minWidth: 0,
        color: ({ drawer }) => (drawer ? '#fff' : '#000'),
        fontWeight: '900',
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
      },
    },
    iconBtn: {
      '&&': {
        marginRight: '0',
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
      },
    },
    iconButtonContainer: {
      '&&': {
        backgroundColor: '#610527',
        marginLeft: '0',
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
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
        top: 0,
        height: '100vh',
        width: '100%',
        position: 'absolute',
        opacity: ({ drawer }) => (drawer ? '1' : '0'),
        transition: 'opacity .3s,transform .3s',
        transform: ({ drawer }) =>
          drawer ? 'translateY(0px)' : 'translateY(-100%)',
        backgroundColor: theme.palette.primary.main,
      },
    },
    drawerDropDownOuter: {
      '&&': {
        justifyContent: 'center',
        paddingTop: '100px',
      },
    },
    drawerDropDown: {
      '&&': {
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
          transform: 'translateX(8px)',
          transition: 'transform .3s',
          cursor: 'pointer',
        },
      },
    },
    loginHamburgerWrapper: {
      '&&': {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('xss')]: {
          flexDirection: 'row',
        },
      },
    },
    selected: {
      '&&': {
        borderBottom: '4px solid rgb(97, 5, 39)',
        paddingBottom: '2px',
      },
    },
    listItemWrapper: {
      '&&': {
        transition: 'transform .3s',
        '&:hover': {
          transform: 'translateX(4px)',
          backgroundColor: 'transparent ',
        },
      },
    },
    closeDrawer: {
      '&&': {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: '20px',
      },
    },
    closeIcon: {
      '&&': {
        transition: 'transform .5s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.35)',
          color: 'rgb(97, 5, 39)',
        },
      },
    },
  };
});
