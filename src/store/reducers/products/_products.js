import {
    GET_PRODUCTS,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";


  const initialState= {
    banner:"",
    list:[]
  };
  
  export default function (state = initialState, action){
    switch (action.type) {
      case GET_PRODUCTS[REQUEST]:
        console.log(`GET_PRODUCTS[REQUST]`);
        return {
          ...state,
        };
      case GET_PRODUCTS[SUCCESS]:
        const {payload} =action;
        return {
          ...state,
          banner:payload.banner,
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