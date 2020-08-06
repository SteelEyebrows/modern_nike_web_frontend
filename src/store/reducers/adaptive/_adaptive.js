import {
    GET_ADAPTIVE,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";
  import _ from "underscore";

  const initialState= {
    isFatching:true,
    images:{}
  };
  
  export default function (state = initialState, action){
    switch (action.type) {
      case GET_ADAPTIVE[REQUEST]:
        return {
          ...state,
          isFatching:true
        };
      case GET_ADAPTIVE[SUCCESS]:
        const {payload} =action;
        return {
          ...state,
          images:payload,
          isFatching:false
        };
      case GET_ADAPTIVE[FAILURE]:
        return {
          ...state,
        };
      default:
        return state;
    }
  }