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
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
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
          backgroundColor: 'transparent ',
        },
      },
    },
    navDate: {
      '&&': {
        width: '250px',
        padding: '0px',
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
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
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
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
        zIndex: ({ drawer }) => (drawer ? '99999' : '1'),
        '&:hover': {
          transform: 'translateX(4px)',
          backgroundColor: 'transparent ',
        },
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
        marginLeft: '20px',
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
        zIndex: '9999',
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
  };
});
