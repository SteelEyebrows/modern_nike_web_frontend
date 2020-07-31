import {
    GET_PRODUCTS,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";
  import _ from "underscore";

  const initialState= {
    list:[]
  };
  
  export default function (state = initialState, action){
    switch (action.type) {
      case GET_PRODUCTS[REQUEST]:
        console.log(`GET_PRODUCTS[REQUEST]`);
        return {
          ...state,
        };
      case GET_PRODUCTS[SUCCESS]:
        const {payload} =action;
        return {
          ...state,
          list:payload.list
        };
      case GET_PRODUCTS[FAILURE]:
        return {
          ...state,
        };
      default:
        return state;
    }
  }