import {
    GET_DEPARTMENTS,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";
  import _ from "underscore";

  const initialState= {
    departments: "",
    sizes: []
  };
  
  export default function (state = initialState, action){
    switch (action.type) {
      case GET_DEPARTMENTS[REQUEST]:
        console.log(`GET_DEPARTMENTS[REQUEST]`);
        return {
          ...state,
        };
      case GET_DEPARTMENTS[SUCCESS]:
        const {payload} =action;
        return {
          ...state,
          departments:payload.name
        };
      case GET_DEPARTMENTS[FAILURE]:
        return {
          ...state,
        };
      default:
        return state;
    }
  }