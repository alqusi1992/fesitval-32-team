export const showAlert = (type, message, dispatch) => {
  dispatch({ type: 'SHOW_ALERT', payload: { type, message } });
};
