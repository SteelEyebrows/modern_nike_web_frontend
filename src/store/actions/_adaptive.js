import { SET_ADAPTIVE, REQUEST, SUCCESS, FAILURE } from "../constants";
import { createAction } from "./action-helpers";

export const Actions = {
  adaptiveRequest: (status) =>
    createAction(SET_ADAPTIVE[REQUEST],status),
    //createAction("GET_DEPARTMENTS_REQUEST", id)

  adaptiveSuccess: (status) =>
    createAction(SET_ADAPTIVE[SUCCESS], status),

  adaptiveFailure: (err) => 
    createAction(SET_ADAPTIVE[FAILURE], err)
};
