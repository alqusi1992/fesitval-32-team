const globalReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      return { ...state, user: action.payload };
    case 'LOGIN':
      return { ...state, user: action.payload };

    default:
      throw new Error('No action type matched');
  }
};

export default globalReducer;
