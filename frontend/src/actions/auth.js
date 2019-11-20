import axios from 'axios';
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { returnErrors } from './messages';

// Check token and load user
export const loadUser = () => async (dispatch, getState) => {
  // User Loading
  dispatch({
    type: USER_LOADING
  });

  try {
    const res = await axios.get('/api/auth/user', tokenConfig(getState));

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login User
export const login = (username, password) => async dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    //dispatch(loadUser());
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Register User
export const register = ({ username, email, password }) => async dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post('/api/auth/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    //dispatch(loadUser());
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Logout user
export const logout = () => async (dispatch, getState) => {
  try {
    await axios.post('/api/auth/logout', null, tokenConfig(getState));

    dispatch({
      type: LOGOUT
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

// Setup config with token - util
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};
