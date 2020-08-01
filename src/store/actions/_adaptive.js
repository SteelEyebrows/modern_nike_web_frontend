import { GET_ADAPTIVE, REQUEST, SUCCESS, FAILURE } from "../constants";
import { createAction } from "./action-helpers";

export const Actions = {
  adaptiveRequest: (status) =>
    createAction(GET_ADAPTIVE[REQUEST],status),
    //createAction("GET_DEPARTMENTS_REQUEST", id)

  adaptiveSuccess: (status) =>
    createAction(GET_ADAPTIVE[SUCCESS], status),

  adaptiveFailure: (err) => 
    createAction(GET_ADAPTIVE[FAILURE], err)
};
