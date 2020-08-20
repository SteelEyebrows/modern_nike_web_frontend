import {
    GET_ADAPTIVE,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";


  const initialState= {
    isFatching:true,
    first:[],
    second:[]
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
          first:payload.first,
          second:payload.second,
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