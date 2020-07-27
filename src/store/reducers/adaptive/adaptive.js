import {
    SET_ADAPTIVE,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";
  import _ from "underscore";

  const initialState= {
    adaptive:""
  };
  
  export default function (state = initialState, action){
    switch (action.type) {
      case SET_ADAPTIVE[REQUEST]:
        
        return {
          ...state,
        };
      case SET_ADAPTIVE[SUCCESS]:
        const {payload} =action;
        return {
          ...state,
          adaptive:payload
        };
      case SET_ADAPTIVE[FAILURE]:
        return {
          ...state,
        };
      default:
        return state;
    }
  }