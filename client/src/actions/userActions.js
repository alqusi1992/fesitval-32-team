const url = process.env.REACT_APP_SERVER_URL + '/user';

export const register = async (userData, dispatch) => {
  try {
    const response = await fetch(url + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data?.success) {
      dispatch({ type: 'REGISTER', payload: data.result });
    }
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, msg: 'Something went wrong' };
  }
};
