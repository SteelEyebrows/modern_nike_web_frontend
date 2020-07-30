import {
    SET_ADAPTIVE,
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
      case SET_ADAPTIVE[REQUEST]:
        return {
          ...state,
          isFatching:true
        };
      case SET_ADAPTIVE[SUCCESS]:
        const {payload} =action;
        console.log(payload);
        return {
          ...state,
          images:payload,
          isFatching:false
        };
      case SET_ADAPTIVE[FAILURE]:
        return {
          ...state,
        };
      default:
        return state;
    }
  }