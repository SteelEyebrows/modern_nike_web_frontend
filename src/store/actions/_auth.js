import {
    POST_LOGIN,
    POST_LOGOUT,
    REQUEST,
    SUCCESS
  } from "../constants";
  import { createAction } from "./action-helpers";
  
  export const Actions = {

    loginRequest: (data) => createAction(POST_LOGIN[REQUEST], data),
    loginSuccess: (data) => createAction(POST_LOGIN[SUCCESS], data),
    logOutRequest: (data) => createAction(POST_LOGOUT[REQUEST], data),
  };
