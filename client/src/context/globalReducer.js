const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, user: action.payload };

    case 'SHOW_ALERT':
      return {
        ...state,
        alert: {
          isAlert: true,
          type: action.payload.type,
          message: action.payload.message,
        },
      };

    case 'CLOSE_ALERT':
      return { ...state, alert: { isAlert: false, type: '', message: '' } };
    default:
      throw new Error('No action type matched');
  }
};

export default globalReducer;
