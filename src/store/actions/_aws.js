import { GET_AWS, POST_AWS , REQUEST, SUCCESS, FAILURE } from "../constants";
import { createAction } from "./action-helpers";

export const Actions = {
  awsRequest: (status) =>
    createAction(GET_AWS[REQUEST], status),

  awsSuccess: (status) =>
    createAction(GET_AWS[SUCCESS], status),

  awsFailure: (err) => 
    createAction(GET_AWS[FAILURE], err),

  writingRequest: (status) =>
    createAction(POST_AWS[REQUEST], status),

  writingSuccess: (status) =>
    createAction(POST_AWS[SUCCESS], status),

  writingFailure: (err) => 
    createAction(POST_AWS[FAILURE], err)
};
