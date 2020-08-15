import {
    ADD_CART,
    DELETE_CART,
    REQUEST,
    SUCCESS
  } from "../constants";
  import { createAction } from "./action-helpers";
  
  export const Actions = {

    addCartRequest: (data) => createAction(ADD_CART[REQUEST], data),
    addCartSuccess: (data) => createAction(ADD_CART[SUCCESS], data),
    deleteCartRequest: (data) => createAction(DELETE_CART[REQUEST], data),
    deleteCartSuccess: (data) => createAction(DELETE_CART[SUCCESS], data),

  };
