import axios from "axios";
import { Notify } from "notiflix";
import {
  getUserError,
  getUserRequest,
  getUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./actions";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";
//add JWT
const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
//remove JWT
const removeAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};
//post user/signup
export const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthToken(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
    Notify.failure("Please check your email and password");
  }
};

//post user/login
export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post("/users/login", credentials);
    setAuthToken(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
    Notify.failure("Please, check your email and password");
  }
};
//post /user/logout
export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await axios.get("/users/logout");
    removeAuthToken();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};
//get current user
export const refreshUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  setAuthToken(persistedToken);
  dispatch(getUserRequest());
  try {
    const { data } = await axios.get("/users/current");
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};
