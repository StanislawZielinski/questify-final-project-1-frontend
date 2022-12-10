import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getUserError,
  getUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from "./actions";

const initialUserState = {
  email: null,
  password: null,
};
const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.email,
  [loginSuccess]: (_, { payload }) => payload.email,
  [logoutSuccess]: () => initialUserState,
  [getUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const isLoggedIn = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getUserSuccess]: () => true,

  [registerError]: () => false,
  [loginError]: () => false,
  [getUserError]: () => false,

  [logoutSuccess]: () => false,
});
const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getUserError]: (_, { payload }) => payload,
});
export const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
  error,
});
