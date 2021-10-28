import { makeStyles } from '@mui/styles/';

export const useStyles = makeStyles((theme, prop) => {
  return {
    tableOrder: {
      border: '3px solid #581127',
      marginTop: '100px',
    },
    behindColor: {
      backgroundColor: '#581127',
      width: '100%',
    },
    BuyTicketTitle: {
      color: '#fff',
      textAlign: 'center',
    },
    userContainer: {
      display: 'flex',
      margin: '0 auto',
      padding: '15px',
    },

    userInfo: {
      border: '2px solid #DDD',
      flex: '6 !important',
      height: '300px',
      margin: '30px 5px !important',
    },
    personalDetails: {
      padding: '20px 20px',
    },

    orderContainer: {
      border: '2px solid #DDD',
      margin: '30px 5px !important',
      flex: '10 !important',
    },

    personalDetailsHeader: {
      backgroundColor: '#DDD',
      padding: '15px',
      margin: '0',
      width: '27vw',
    },
    orderTitels: {
      backgroundColor: '#DDD',
      padding: '15px',
      fontWeight: 'bold',
      fontSize: '1.2em',
      height: '58px',
    },
    orderInfo: {
      padding: '15px',
    },
    totalPrice: {
      borderTop: '2px solid #DDD',
      padding: '10px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'flex-end',
    },

    buttonPay: {
      position: 'absolute',
      bottom: '-50px',
      right: '-930px',
    },
  };
});
