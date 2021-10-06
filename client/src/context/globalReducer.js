const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, user: action.payload };

    default:
      throw new Error('No action type matched');
  }
};

export default globalReducer;
