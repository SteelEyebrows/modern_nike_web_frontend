import {
    GET_AWS,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";
  import _ from "underscore";

  const initialState= {
    isFatching:false,
    cs:{}
  };
  
  
  
  export default function (state = initialState, action){
    switch (action.type) {
      case GET_AWS[REQUEST]:
          console.log("xxx");
        return {
          ...state,
        };
      case GET_AWS[SUCCESS]:
        return {
          ...state,
        };
      case GET_AWS[FAILURE]:
        return {
          ...state,
        };
      default:
        return state;
    }
  }