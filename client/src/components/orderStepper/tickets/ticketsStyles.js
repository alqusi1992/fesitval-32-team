export const classes = {
  ticketsContainer: {
    justifyContent: 'center',
    padding: '40px 10px',
  },
  ticketContainer: {
    margin: '20px 0px',
    justifyContent: 'center',
  },
  ticketType: {
    fontSize: '24px',
    borderBottom: {
      xs: 'none',
      s: '2px solid #ddd',
    },
    paddingBottom: '10px',
    alignItems: 'center',
  },
  ticketPrice: {
    fontWeight: 'bold',
    marginRight: {
      xs: '0px',
      s: '40px',
    },
    fontSize: '30px',
    borderBottom: {
      xs: 'none',
      s: '2px solid #ddd',
    },
    paddingBottom: '10px',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ticketQuantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketQuantityController: {
    border: '1px solid #ddd',
    width: '100%',
    padding: '10px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    borderRadius: '0',
  },
  ticketQuantity: {
    height: '38px',
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  soldOutBtn: {
    padding: '15px',
    width: '100%',
    border: 'none',
    backgroundColor: ' #e92b5a',
    color: '#fff',
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.5',
      color: '#fff',
    },
  },
  soldOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 'medium',
  },
};
