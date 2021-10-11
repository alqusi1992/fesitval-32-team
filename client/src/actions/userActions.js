import { setLocalStorage } from '../utils/localStorage';

const url = process.env.REACT_APP_SERVER_URL + '/user';

export const register = async (userData, dispatch) => {
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
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, msg: 'Something went wrong' };
  }
};
export const login = async (userData, dispatch) => {
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
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, msg: 'something went wrong' };
  }
};

export const logout = (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.clear();
};

export const setUser = (payload, dispatch) => {
  dispatch({ type: 'SET_USER', payload });
};
