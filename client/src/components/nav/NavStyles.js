import { makeStyles } from '@mui/styles/';

export const useStyles = makeStyles((theme, prop) => {
  return {
    root: {
      '& .react-multi-carousel-item': {
        padding: '10px',
      },
    },
    appBarWhite: {
      backgroundColor: '#fff !important',
      height: '82px',
      justifyContent: 'center',
      transition: 'all 0.5s ease-in-out !important',
      [theme.breakpoints.up('mdlg')]: {
        alignItems: 'center',
      },
    },
    appBarBlack: {
      backgroundColor: '#000 !important',
      height: '82px',
      justifyContent: 'center',
      transition: 'all 0.5s ease-in-out !important',
      [theme.breakpoints.up('mdlg')]: {
        alignItems: 'center',
      },
    },
    toolBar: {
      [theme.breakpoints.up('md')]: {
        margin: '0 20px',
        maxWidth: '1190px',
      },
      [theme.breakpoints.up('mdlg')]: {
        width: '1190px',
      },
    },
    logoContainer: {
      alignItems: 'center',
      flex: 1,
      [theme.breakpoints.up('lg')]: {
        marginLeft: '5px',
      },
    },
    logo: {
      lineHeight: '1 !important',
      cursor: 'pointer',
      transition: 'transform .3s !important',
      '&:hover': {
        transform: 'translateX(4px)',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: 'transparent  !important',
      },
    },
    navDate: {
      width: '250px',
      padding: '0px',
      [theme.breakpoints.up('s')]: {
        width: '150px',
        paddingLeft: '10px',
      },
    },
    dateText: {
      lineHeight: '1.2 !important',
      color: ({ drawer }) => (drawer ? '#fff' : '#000'),
    },
    listItemContainer: {
      justifyContent: 'flex-end',
      flex: 1,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    listItemBtn: {
      fontWeight: '900 !important',
      transition: 'transform .3s !important',
      '&:hover': {
        transform: 'translateX(4px)',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: 'transparent  !important',
      },
    },
    iconBtn: {
      marginRight: '0 !important',
    },
    iconButtonContainer: {
      backgroundColor: '#610527',
      marginLeft: '20px',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      '&:hover': {
        backgroundColor: '#56555f',
        transform: 'scale(1.05)',
      },
    },
    listBtn: {
      color: `${theme.palette.secondary.main} !important`,
      fontSize: '36px !important',
    },
    drawerContainer: {
      height: '88.5vh',
      width: '100%',
      position: 'absolute',
      zIndex: '999',
      opacity: ({ drawer }) => (drawer ? '1' : '0'),
      transition: 'opacity .6s,transform .6s !important',
      transform: ({ drawer }) =>
        drawer ? 'translateY(0px)' : 'translateY(-800px)',
      backgroundColor: theme.palette.primary.main,
    },
    drawerDropDownOuter: {
      justifyContent: 'center',
    },
    drawerDropDown: {
      height: '50vh',
      maxWidth: '600px',
      margin: '20px',
    },
    drawerDropDownInner: {
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'transform .3s !important',
      '&:hover': {
        transform: 'translateX(4px)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
      },
    },
  };
});
