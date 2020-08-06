import {
    GET_DETAIL,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";
  import _ from "underscore";

  const initialState= {
    detail:{},
    isFatching:true,
  };
  
  export default function (state = initialState, action){
    switch (action.type) {
      case GET_DETAIL[REQUEST]:
        return {
          ...state,
          isFatching:true
        };
      case GET_DETAIL[SUCCESS]:
        const {payload} =action;
        return {
          ...state,
          detail:payload,
          isFatching:false
        };
      case GET_DETAIL[FAILURE]:
        return {
          ...state,
        };
      default:
        return state;
    }
  }