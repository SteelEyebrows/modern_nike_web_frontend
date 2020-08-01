import { GET_PRODUCTS, REQUEST, SUCCESS, FAILURE } from "../constants";
import { createAction } from "./action-helpers";

export const Actions = {
  productsRequest: () =>
    createAction(GET_PRODUCTS[REQUEST]),
    //createAction("GET_DEPARTMENTS_REQUEST", id)

  productsSuccess: (status) =>
    createAction(GET_PRODUCTS[SUCCESS], status),

  productsFailure: (err) => 
    createAction(GET_PRODUCTS[FAILURE], err)
};
