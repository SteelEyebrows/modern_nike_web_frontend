import { GET_DETAIL, REQUEST, SUCCESS, FAILURE } from "../constants";
import { createAction } from "./action-helpers";

export const Actions = {
  detailRequest: (status) =>
    createAction(GET_DETAIL[REQUEST],status),
    //createAction("GET_DEPARTMENTS_REQUEST", id)

  detailSuccess: (status) =>
    createAction(GET_DETAIL[SUCCESS], status),

  detailFailure: (err) => 
    createAction(GET_DETAIL[FAILURE], err)
};
