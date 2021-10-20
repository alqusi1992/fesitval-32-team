const url = process.env.REACT_APP_SERVER_URL + '/user';

export const SendLink = async (data, dispatch) => {
  //   dispatch({ type: 'START_LOADING' });
  try {
    const response = await fetch(url + '/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    // dispatch({ type: 'END_LOADING' });
    return result;
  } catch (error) {
    console.log(error);
    // dispatch({ type: 'END_LOADING' });
    return { success: false, msg: 'Something went wrong!' };
  }
};

export const SubmitNewPassword = async (newPass, token) => {
  //   dispatch({ type: 'START_LOADING' });
  const body = {
    newPass,
    token,
  };
  try {
    const response = await fetch(url + '/reset-password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    // dispatch({ type: 'END_LOADING' });
    return result;
  } catch (error) {
    console.log(error);
    // dispatch({ type: 'END_LOADING' });
    return { success: false, msg: 'Something went wrong!' };
  }
};
