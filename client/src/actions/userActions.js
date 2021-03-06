import { setLocalStorage } from '../utils/localStorage';

const url = process.env.REACT_APP_SERVER_URL + '/user';

export const register = async (userData, dispatch) => {
  dispatch({ type: 'START_LOADING' });
  try {
    const response = await fetch(url + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: 'REGISTER',
        payload: { result: data.result, token: data.token },
      });
      setLocalStorage('profile', { result: data.result, token: data.token });
    }
    dispatch({ type: 'END_LOADING' });
    return data;
  } catch (error) {
    console.log(error);
    dispatch({ type: 'END_LOADING' });
    return { success: false, msg: 'Something went wrong' };
  }
};
export const login = async (userData, dispatch) => {
  dispatch({ type: 'START_LOADING' });
  try {
    const response = await fetch(url + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: 'LOGIN',
        payload: { result: data.result, token: data.token },
      });
      setLocalStorage('profile', { result: data.result, token: data.token });
    }
    dispatch({ type: 'END_LOADING' });
    return data;
  } catch (error) {
    console.log(error);
    dispatch({ type: 'END_LOADING' });
    return { success: false, msg: 'something went wrong' };
  }
};

export const sendVerifyEmail = async (userData) => {
  const { _id, email } = userData;
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/verification/send-email`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ _id, email }),
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
    return { success: false, msg: 'Something went wrong' };
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem('profile');
  dispatch({ type: 'LOGOUT' });
};

export const setUser = (payload, dispatch) => {
  dispatch({ type: 'SET_USER', payload });
};
