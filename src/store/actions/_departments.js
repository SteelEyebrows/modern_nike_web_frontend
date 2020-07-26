import { GET_DEPARTMENTS, REQUEST, SUCCESS, FAILURE } from "../constants";
import { createAction } from "./action-helpers";

export const Actions = {
  departmentRequest: (id) =>
    createAction(GET_DEPARTMENTS[REQUEST], id),
    //createAction("GET_DEPARTMENTS_REQUEST", id)

  departmentSuccess: (departments) =>
    createAction(GET_DEPARTMENTS[SUCCESS], departments),

  departmentFailure: (err) => 
    createAction(GET_DEPARTMENTS[FAILURE], err)
};
