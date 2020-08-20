import {
    ADD_CART,
    DELETE_CART,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";


  const initialState= {
    cart:[]
  };
  
  export default function (state = initialState, action){
    switch (action.type) {
      case ADD_CART[REQUEST]:
        return {
          ...state,
        };
      case ADD_CART[SUCCESS]:
        return {
          ...state,
        };
      case ADD_CART[FAILURE]:
        return {
          ...state,
        };

      case DELETE_CART[REQUEST]:
        return {
          ...state,
        };
      case DELETE_CART[SUCCESS]:
        return {
          ...state,
        };
      case DELETE_CART[FAILURE]:
        return {
          ...state,
        };  
      default:
        return state;
    }
  }