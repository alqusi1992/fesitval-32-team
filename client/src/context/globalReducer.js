const globalReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      return { ...state, user: action.payload };
    case 'LOGIN':
      return { ...state, user: action.payload };

    case 'LOGOUT':
      return { ...state, user: null };

    case 'SHOW_ALERT':
      return {
        ...state,
        alert: {
          isAlert: true,
          type: action.payload.type,
          message: action.payload.message,
        },
      };
    case 'SET_USER':
      return { ...state, user: action.payload };

    case 'CLOSE_ALERT':
      return { ...state, alert: { isAlert: false, type: '', message: '' } };
    default:
      throw new Error('No action type matched');
  }
};

export default globalReducer;
