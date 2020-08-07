import {
    POST_LOGIN,
    POST_LOGOUT,
    POST_REGISTER,
    REQUEST,
    SUCCESS
  } from "../constants";
  import { createAction } from "./action-helpers";
  
  export const Actions = {

    loginRequest: (data) => createAction(POST_LOGIN[REQUEST], data),
    loginSuccess: (data) => createAction(POST_LOGIN[SUCCESS], data),
    logOutRequest: (data) => createAction(POST_LOGOUT[REQUEST], data),

    registerRequest:(data) =>createAction(POST_REGISTER[REQUEST],data),
    registerSuccess:(data) =>createAction(POST_REGISTER[SUCCESS],data),
  };
